export async function onRequest({ request, next, env }) {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://commons.build/sitemap/posts/0</loc>
    </sitemap>
    <sitemap>
        <loc>https://commons.build/sitemap/widgets/</loc>
    </sitemap>
    <sitemap>
        <loc>https://commons.build/sitemap/profiles/</loc>
    </sitemap>
    <sitemap>
        <loc>https://commons.build/sitemap/sources/0</loc>
    </sitemap>
    <sitemap>
        <loc>https://commons.build/sitemap/sources/50000</loc>
    </sitemap>
</sitemapindex>`,
    {
      headers: {
        "content-type": "application/xml;charset=UTF-8",
      },
    }
  );
}
