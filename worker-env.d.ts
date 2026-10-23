// Match the optional D1 binding used by the database helper.
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
