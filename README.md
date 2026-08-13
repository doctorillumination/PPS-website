# Psychedelic Puppet Show

Independent rebuild of [psychedelicpuppet.show](https://psychedelicpuppet.show/) for the Psychedelic Puppet Show nonprofit. The site preserves the established visual identity, navigation, films, NFT links, collaborations, Stamets launch page, legal pages, public archive routes, and merchandise catalog without depending on Squarespace.

## What is included

- Responsive homepage with the original hero video and local media assets
- Mission, about, NFT, donation, contact, and newsletter sections
- Collaboration and film festival page
- Paul Stamets launch and collectible page
- Complete storefront catalog with all existing product URLs
- Product options, quantities, and a client-side cart
- Terms, privacy, NFT license, video services, contact, and archive pages
- Cloudflare-compatible build output

The temporary order workflow sends a prepared order request to the nonprofit by email. Connect Stripe or another payment provider before accepting online payments. Donation requests currently use email and the existing e-transfer instructions for the same reason.

## Local development

This project requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm test
```

The test command creates the Cloudflare-compatible production build and verifies the rendered homepage and storefront.

## GitHub and Cloudflare

1. Create a new empty GitHub repository.
2. From this folder, add that repository as the Git remote, commit the files, and push the default branch.
3. In Cloudflare, create a Workers or Pages project from the GitHub repository.
4. Use `npm run build` as the build command.
5. Keep the project on Node.js 22.13 or newer.
6. Attach `psychedelicpuppet.show` as the custom domain after a preview deployment has been reviewed.

The bundled Vinext configuration produces Cloudflare Worker-compatible output. No database or object storage is required for the current site.

## Before changing DNS

- Connect a real Stripe checkout or approved merchandise provider.
- Connect the contact and newsletter forms to the desired email platform.
- Confirm current product pricing and inventory.
- Review the legal text with the nonprofit's counsel.
- Test the Cloudflare preview URL on desktop and mobile.
- Keep the Squarespace site live until the custom domain is serving the replacement correctly.

## Media and font licensing

The visual media was copied from the nonprofit's existing public site for this migration. Fredoka is bundled under the SIL Open Font License in `public/fonts/FREDOKA-LICENSE.txt`.
