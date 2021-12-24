export async function get() {
  // On the fly
  // const data = await fetch(import.meta.env.VITE_API_ENDPOINT + '/api/v1/posts?published=t');
  // const posts = await data.json();
  const body = await render();

  // // Pre-created
  // const data = await fetch(import.meta.env.VITE_SITEMAP_URL);
  // const body = await data.text();

  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
}

const render = () => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
<url>
    <loc>https://www.weblime.com/</loc>
  </url>
  <url>
    <loc>https://www.weblime.com/get-in-touch/</loc>
  </url>
  <url>
    <loc>https://www.weblime.com/packages/</loc>
  </url>
  <url>
    <loc>https://www.weblime.com/portfolio/</loc>
  </url>
  <url>
    <loc>https://www.weblime.com/solutions/</loc>
  </url>
<url>
<loc>https://www.weblime.com/stories/2020-year-in-review/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/3-tips-for-starting-an-online-business-in-2021/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/basic-steps-for-a-speedy-website/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/generating-leads-for-your-growing-home-improvement-business/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/how-to-market-a-home-renovation-business/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/how-to-promote-your-business-locally/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/learn-from-your-competition/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/local-seo-must-haves-for-any-website/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/seo-101-the-core-components-you-should-know/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/the-truth-behind-cookies-pixels-and-privacy-policies/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/the-ultimate-wordpress-guide/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/10-ways-to-get-more-home-improvement-customers/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/how-fast-should-a-website-load/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/the-best-marketing-strategies-for-small-businesses/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/top-website-builders/</loc>
</url>
<url>
<loc>https://www.weblime.com/stories/10-reasons-to-use-a-content-management-system/</loc>
</url>
</urlset>
`;
