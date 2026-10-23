# Website security maintenance

Builds use the patched Node.js 24.22.1 LTS release selected by `.nvmrc`. Keep the Node pin current when security releases arrive.

Dependabot vulnerability alerts and security update pull requests are enabled. Dependency updates require review and the website checks before publication.

Run `npm ci`, `npm test`, and `npx tsc --noEmit --incremental false` in this directory. The rendered-page tests run the production build in Cloudflare's local runtime.

The remaining build-tool advisory is `braces` (GHSA-vfj7-8cjw-p6xm, no upstream patched release). It was absent from the generated server and client source maps reviewed during maintenance. Use trusted build configuration and keep this alert open until a compatible fix is available. Do not force dependency downgrades or dismiss alerts to obtain a clean audit.

The website has no configured database, tables, migrations, or active database routes. Unused `drizzle-kit`, `drizzle-orm`, and their starter files were removed, eliminating the legacy loader and its old `esbuild` dependency (GHSA-67mh-4wv8-2f99). No replacement database tooling is needed for the current site.
