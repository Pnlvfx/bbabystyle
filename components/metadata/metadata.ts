const getTwitter = (card: 'summary_large_image' | 'summary', title: string, description: string, images?: string[]) => {
  return {
    creator: '@Bbabystyle',
    card,
    title,
    description,
    images,
  };
};

interface ImagesProps {
  url: string
  width: number
  height: number
}

const getOG = (title: string, description: string, url: string, type: 'article' | 'website' | 'profile', images?: ImagesProps[], videos?: string[]) => {
  return {
    title,
    description,
    url,
    siteName: 'bbabystyle',
    images,
    type,
    videos,
  }
}

export const getMetadata = (title: string, description: string, url: string, type: 'article' | 'website' | 'profile', card: 'summary_large_image' | 'summary', images?: ImagesProps[], videos?: string[]) => {
  const twImages = images && images.length >= 1 ? [images[0].url] : undefined;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
      },
    },
    openGraph: getOG(title, description, url, type, images, videos),
    twitter: getTwitter(card, title, description, twImages)
  };
}
