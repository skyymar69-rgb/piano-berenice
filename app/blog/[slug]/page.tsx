import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  blogArticles,
  getAllArticles,
  getArticleBySlug,
  type BlogArticle,
} from "@/lib/blog";
import { school } from "@/lib/school";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [school.teacher.fullName],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

/** Rendu Markdown léger : ## h2, ### h3, > blockquote, listes, paragraphes. */
function renderBody(body: string): React.ReactNode {
  const lines = body.split(/\r?\n/);
  const out: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    const items = listBuffer.map((l, i) => (
      <li
        key={`li-${out.length}-${i}`}
        className="mt-2 leading-relaxed text-[var(--ink)]/85"
        dangerouslySetInnerHTML={{ __html: inline(l) }}
      />
    ));
    if (listType === "ol") {
      out.push(
        <ol
          key={`ol-${out.length}`}
          className="mt-4 list-decimal space-y-1 pl-6"
        >
          {items}
        </ol>,
      );
    } else {
      out.push(
        <ul
          key={`ul-${out.length}`}
          className="mt-4 list-disc space-y-1 pl-6 marker:text-[var(--accent)]"
        >
          {items}
        </ul>,
      );
    }
    listBuffer = [];
    listType = null;
  };

  function inline(s: string): string {
    // bold + italic + inline link [text](url)
    return s
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="smart-link font-medium text-[var(--primary)]">$1</a>',
      );
  }

  lines.forEach((raw, idx) => {
    const line = raw.trimEnd();
    if (line === "") {
      flushList();
      return;
    }
    if (line.startsWith("### ")) {
      flushList();
      out.push(
        <h3
          key={`h3-${idx}`}
          className="mt-8 font-serif text-xl text-[var(--primary)] sm:text-2xl"
          dangerouslySetInnerHTML={{ __html: inline(line.slice(4)) }}
        />,
      );
    } else if (line.startsWith("## ")) {
      flushList();
      out.push(
        <h2
          key={`h2-${idx}`}
          className="heading-bar mt-12 font-serif text-2xl text-[var(--primary)] sm:text-3xl"
          dangerouslySetInnerHTML={{ __html: inline(line.slice(3)) }}
        />,
      );
    } else if (line.startsWith("> ")) {
      flushList();
      out.push(
        <blockquote
          key={`bq-${idx}`}
          className="mt-6 border-l-2 border-[var(--accent)] pl-5 font-serif text-lg italic leading-snug text-[var(--primary)]"
          dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }}
        />,
      );
    } else if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ol") flushList();
      listType = "ol";
      listBuffer.push(line.replace(/^\d+\.\s+/, ""));
    } else if (line.startsWith("- ")) {
      if (listType !== "ul") flushList();
      listType = "ul";
      listBuffer.push(line.slice(2));
    } else {
      flushList();
      out.push(
        <p
          key={`p-${idx}`}
          className="mt-4 leading-relaxed text-[var(--ink)]/85"
          dangerouslySetInnerHTML={{ __html: inline(line) }}
        />,
      );
    }
  });
  flushList();
  return out;
}

function ArticleJsonLd({ article }: { article: BlogArticle }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: school.teacher.fullName,
      url: "https://piano-berenice.com/professeur",
    },
    publisher: {
      "@type": "Organization",
      name: school.brand.name,
      url: "https://piano-berenice.com",
      logo: {
        "@type": "ImageObject",
        url: "https://piano-berenice.com/logo.webp",
      },
    },
    mainEntityOfPage: `https://piano-berenice.com/blog/${article.slug}`,
    keywords: article.tags.join(", "),
    articleSection: article.category,
    image: article.imageSlug
      ? `https://piano-berenice.com/images/${article.imageSlug}-lg.webp`
      : undefined,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function BlogArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const dateFormatted = new Date(article.publishedAt).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <>
      <ArticleJsonLd article={article} />
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {article.category} · {article.readingMinutes} min de lecture
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--ink)]/80">
            {article.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span>Par {school.teacher.fullName}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>{dateFormatted}</time>
            <span aria-hidden>·</span>
            <span className="flex flex-wrap gap-1">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs"
                >
                  #{t}
                </span>
              ))}
            </span>
          </div>
        </header>

        {article.imageSlug && (
          <figure className="my-8 overflow-hidden rounded-2xl border border-[var(--border)]">
            <picture>
              <source
                type="image/webp"
                srcSet={`/images/${article.imageSlug}-md.webp 960w, /images/${article.imageSlug}-lg.webp 1600w`}
                sizes="(min-width:1024px) 768px, 100vw"
              />
              <img
                src={`/images/${article.imageSlug}-lg.webp`}
                alt={article.imageAlt ?? article.title}
                loading="eager"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </picture>
          </figure>
        )}

        <div className="prose-warm">{renderBody(article.body)}</div>

        {/* CTA mid-article style "boîte" */}
        <aside className="my-12 rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Passez à la pratique
          </p>
          <h3 className="heading-bar mt-3 font-serif text-2xl text-[var(--primary)]">
            Envie d'apprendre avec une professeure diplômée à Nice ?
          </h3>
          <p className="mt-3 text-[var(--ink)]/85">
            L'Académie de piano Bérénice ouvre ses inscriptions pour la
            rentrée 2026 – 2027. Cours individuels, en binôme ou en groupe,
            pour enfants, ados et adultes — au cœur de Cimiez.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/inscription"
              prefetch
              className="magnetic-cta inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
            >
              S'inscrire pour la rentrée
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/professeur"
              prefetch
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Découvrir Bérénice
            </Link>
          </div>
        </aside>
      </article>

      {/* Articles connexes */}
      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-2xl text-[var(--primary)] sm:text-3xl">
          À lire ensuite
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              prefetch
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)] hover:shadow-lg"
            >
              {a.imageSlug && (
                <div className="aspect-[5/3] overflow-hidden">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/images/${a.imageSlug}-sm.webp 480w, /images/${a.imageSlug}-md.webp 960w`}
                      sizes="(min-width:1024px) 380px, 100vw"
                    />
                    <img
                      src={`/images/${a.imageSlug}-md.webp`}
                      alt={a.imageAlt ?? a.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </picture>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  {a.category} · {a.readingMinutes} min
                </p>
                <h3 className="mt-2 font-serif text-lg leading-snug text-[var(--primary)] transition group-hover:text-[var(--accent)]">
                  {a.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
