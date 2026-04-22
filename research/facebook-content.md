# Page Facebook — Académie de piano Bérénice

URL : https://fr-fr.facebook.com/AcademieDePianoBerenice

---

## Métadonnées publiques (confirmées)

| Champ | Valeur |
|---|---|
| Nom de la page | Académie de piano Bérénice (Nice) |
| Catégorie | **École d'art** |
| Intro (début visible) | *« Ecole de musique à Nice / Eveil musical, cours de piano enfants - adultes, cours de solfège / Professe… »* (tronqué côté texte Facebook) |
| Adresse affichée | 59 Boulevard de Cimiez, Nice, France |
| Téléphone affiché | 04 93 81 37 57 |
| Email affiché | berenice.lecardeur@gmail.com |
| Page ID interne Facebook | `100064023490150` (extrait du rebond mobile) |

---

## Pourquoi le contenu détaillé n'a pas pu être scrapé

- `WebFetch` renvoie uniquement le title de la page (Facebook sert un placeholder sans JS).
- `mbasic.facebook.com` redirige désormais vers une page « Contenu introuvable » / « Rejoindre ou se connecter » → authentification requise pour voir fil, publications, avis.
- Wayback Machine retourne 302 sur le profil FB (pas d'archive exploitable).
- Les infos ci-dessus proviennent d'une inspection manuelle (transmise par l'utilisateur du projet), de recherches Google qui ont indexé quelques posts, et de WebRankInfo.

---

## Publications visibles dans les résultats Google (indexées)

Un post trouvé par Google : *« Bonjour à tous / Je vous souhaite à tous une belle rentrée / Les cours de piano repre… »* (URL tronquée : https://www.facebook.com/AcademieDePianoBerenice/posts/4806623272700203/).

→ Confirme que la page Facebook est **active et utilisée pour annoncer les rentrées et actualités**. C'est cohérent avec le comportement attendu : Bérénice poste en début d'année scolaire et probablement lors des auditions.

---

## Implications pour le nouveau site

1. **Ne pas republier le contenu Facebook sans accord explicite** de Bérénice — les photos d'élèves mineurs sont particulièrement sensibles (droit à l'image + RGPD).
2. **Intégrer un lien propre** vers la page Facebook dans le footer et dans le bloc « Actualités » de la home — c'est aujourd'hui le canal de communication vivant de l'école.
3. **Ne pas dupliquer Facebook avec un flux embedded** sur le site : Facebook traque les visiteurs via iframe, incompatible RGPD sans consentement cookie. Afficher uniquement un lien texte + icône.
4. **Migrer progressivement** les annonces récurrentes (rentrée, auditions, stages) vers `/actualites` sur le nouveau site, qui devient la source officielle, Facebook servant de relais.

---

## À demander à Bérénice

- Accès propriétaire à la page Facebook pour éventuelle intégration plus poussée (bouton « S'abonner », pixel de conversion si publicité un jour envisagée — hors scope par défaut).
- Liste des 5-10 dernières publications qu'elle souhaite conserver / convertir en posts MDX pour le nouveau site (seed `data/news/`).
- Confirmation qu'on peut utiliser certaines photos Facebook (avec droit à l'image OK) pour alimenter temporairement la galerie, avant shooting pro.
- Récupérer d'éventuels avis / messages reçus en DM utilisables comme témoignages (avec accord explicite du rédacteur).
