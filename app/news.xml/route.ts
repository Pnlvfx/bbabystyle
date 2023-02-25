import ssrapis from '../../components/API/ssrapis'
export async function GET() {
  const news = await ssrapis.getSitemap('news') as NewsProps[]
  const content = news.map((news) => `<url><loc>${process.env.NEXT_PUBLIC_CLIENT_URL}${news.permalink}</loc></url>`).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${content}</urlset>
`, {headers: {
  'content-type': 'text/xml'
}})
}