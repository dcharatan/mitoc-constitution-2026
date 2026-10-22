# mitoc-constitution-2026

Interactive review of proposed changes to the MITOC constitution and bylaws.

- `content.js` holds the old and proposed text and the notes; `index.html` is the viewer.
- `node scripts/build.mjs` checks the required MIT statements, writes the proposed Markdown to `proposed/`, and builds the static site in `site/`. Both are build outputs and are not committed.
- Pushing to `main` runs `.github/workflows/pages.yml`, which builds the site and publishes it to the `gh-pages` branch.
