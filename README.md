# proredcat-website

Portfolio and technical writing built with Next.js, React, Tailwind CSS, and Velite MDX.

Use Bun 1.4.4 and Node.js 24 for local development. Vercel manages its Node.js version
through project settings.

```sh
bun install --frozen-lockfile
bun run dev          # Build content, then watch content and run Next.js
bun run check        # Formatting, lint, and TypeScript checks
bun run build        # Generate content and build the site
bun run start        # Serve the production build
bun run lint:fix     # Apply safe lint fixes
bun run format       # Format source and configuration
```

TypeScript 7 provides native type checking; use a compatible language server in your
editor. Oxlint checks React, Next.js, accessibility, and TypeScript, including
type-aware rules. Oxfmt excludes articles, assets, and generated files.

Posts live in `content/blog/*.mdx`. Velite validates frontmatter and generates MDX,
reading statistics, and hero image metadata. Custom MDX components live in
`components/mdx-component.tsx`.

Dependency overrides share patched KaTeX and Sharp versions across consumers and
update Tailwind Typography's pinned CSS selector parser.

Only builds with `VERCEL_ENV=production` permit indexing; other environments emit
`noindex` metadata and response headers.
