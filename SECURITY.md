# Website security maintenance

Builds use the patched Node.js 24.22.1 LTS release selected by `.nvmrc`. Keep the Node pin current when security releases arrive.

Dependabot vulnerability alerts and security update pull requests are enabled. Dependency updates require review and the website checks before publication.

Run `npm ci`, `npm test`, and `npx tsc --noEmit --incremental false` in this directory. The rendered-page tests run the production build in Cloudflare's local runtime.

Two build-tool dependency advisories remain tracked: `braces` (GHSA-vfj7-8cjw-p6xm, no upstream patched release), and the old `esbuild` brought in by Drizzle's legacy loader (GHSA-67mh-4wv8-2f99). The affected tools were absent from the generated server and client source maps reviewed during this maintenance pass. Keep build and development services local and use trusted build configuration. Do not force dependency downgrades or dismiss these alerts to obtain a clean audit.
