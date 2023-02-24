export async function GET() {
  return new Response(`# *
User-agent: *
Allow: /
Disallow: /login
Disallow: /governance
Disallow: /governance/*
Disallow: /submit
Disallow: /b/*/submit

# Host
Host: https://www.bbabystyle.com

# Sitemaps
Sitemap: https://www.bbabystyle.com/sitemap.xml
Sitemap: https://www.bbabystyle.com/posts.xml
Sitemap: https://www.bbabystyle.com/news.xml
Sitemap: https://www.bbabystyle.com/community.xml`);
}
