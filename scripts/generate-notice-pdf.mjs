#!/usr/bin/env node
import { mdToPdf } from "md-to-pdf";
import { writeFile } from "node:fs/promises";

const css = `
  @page {
    size: A4;
    margin: 22mm 18mm 22mm 18mm;
  }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    color: #1a1d29;
    line-height: 1.55;
    font-size: 10pt;
  }
  h1, h2, h3, h4 {
    font-family: 'Georgia', 'Times New Roman', serif;
    color: #1a2540;
    page-break-after: avoid;
  }
  h1 {
    font-size: 22pt;
    border-bottom: 3px solid #b8894a;
    padding-bottom: 8pt;
    margin-top: 18pt;
  }
  h2 {
    font-size: 15pt;
    margin-top: 22pt;
    color: #1a2540;
    border-bottom: 1px solid #e4dac5;
    padding-bottom: 4pt;
  }
  h3 {
    font-size: 12pt;
    color: #b8894a;
    margin-top: 16pt;
  }
  h4 {
    font-size: 11pt;
    color: #1a2540;
  }
  a {
    color: #1a2540;
    text-decoration: underline;
  }
  code, pre {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 8.5pt;
    background: #f3ece0;
    padding: 1px 4px;
    border-radius: 2px;
  }
  pre {
    padding: 10pt;
    background: #0f1320;
    color: #e4dac5;
    border-radius: 4px;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-word;
  }
  pre code { background: transparent; color: inherit; padding: 0; }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10pt 0;
    font-size: 9pt;
  }
  th, td {
    border: 1px solid #e4dac5;
    padding: 5pt 7pt;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: #f3ece0;
    color: #1a2540;
    font-weight: 600;
  }
  blockquote {
    border-left: 3px solid #b8894a;
    background: #f3ece0;
    padding: 8pt 12pt;
    margin: 10pt 0;
    font-style: italic;
    color: #4b4f56;
  }
  hr {
    border: 0;
    border-top: 1px solid #e4dac5;
    margin: 16pt 0;
  }
  ul, ol { padding-left: 18pt; }
  li { margin: 2pt 0; }
  strong { color: #1a2540; }
  p { margin: 5pt 0; text-align: justify; }
`;

const headerTemplate = `
  <div style="font-family: Georgia, serif; font-size: 7pt; color: #6b6f7a; width: 100%; padding: 0 18mm;">
    <div style="display: flex; justify-content: space-between; border-bottom: 0.5px solid #e4dac5; padding-bottom: 3mm;">
      <span>Notice technique — Site Académie de piano Bérénice</span>
      <span>Kayzen Lyon · avril 2026</span>
    </div>
  </div>
`;

const footerTemplate = `
  <div style="font-family: Georgia, serif; font-size: 7pt; color: #6b6f7a; width: 100%; padding: 0 18mm;">
    <div style="display: flex; justify-content: space-between; border-top: 0.5px solid #e4dac5; padding-top: 3mm;">
      <span>Kayzen Lyon SASU · 6 rue Pierre Termier, 69009 Lyon · SIRET 999 418 346 000 14</span>
      <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>
  </div>
`;

const pdf = await mdToPdf(
  { path: "docs/NOTICE-TECHNIQUE.md" },
  {
    dest: "docs/notice-technique-piano-berenice.pdf",
    css,
    pdf_options: {
      format: "A4",
      margin: { top: "26mm", right: "18mm", bottom: "24mm", left: "18mm" },
      displayHeaderFooter: true,
      headerTemplate,
      footerTemplate,
      printBackground: true,
    },
    launch_options: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  },
);

if (pdf) {
  console.log(`✓ PDF généré : ${pdf.filename}`);
} else {
  console.error("✗ Échec génération PDF");
  process.exit(1);
}
