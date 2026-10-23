import assert from "node:assert/strict";
import test from "node:test";

import { after, before } from "node:test";
import { createTestHarness } from "wrangler";

const server = createTestHarness({ workers: [{ configPath: "dist/server/wrangler.json" }] });
before(() => server.listen());
after(() => server.close());

async function render(path = "/") {
  return server.fetch(path, { headers: { accept: "text/html" } });
}

test("server-renders the Psychedelic Puppet Show homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Psychedelic Puppet Show<\/title>/i);
  assert.match(html, /Awakening curiosity and connection/i);
  assert.match(html, /Fund a question\. Create a film\./i);
  assert.match(html, /community@psychedelicpuppet\.show/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders the migrated storefront", async () => {
  const response = await render("/shop");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Unisex organic t-shirt - Stamets Rainbow/i);
  assert.match(html, /Stainless steel water bottle/i);
  assert.match(html, /Mug with Color Inside/i);
  assert.match(html, /\/shop\/p\/unisex-organic-t-shirt-stamets-rainbow/i);
});
