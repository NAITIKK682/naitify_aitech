import { useEffect } from 'react';

const setMeta = (name, content, attr = 'name') => {
  if (!content) return;
  const selector = `${attr}="${name}"`;
  let el = document.head.querySelector(`[${selector}]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const SEO = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical
}) => {
  const siteTitle = 'Naitify_AiTech';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = fullTitle;

    // Update meta description
    setMeta('description', description);

    // Update keywords if provided
    if (keywords) setMeta('keywords', keywords);

    // Update canonical URL - SEO optimization for domain
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Open Graph meta tags for social sharing
    setMeta('og:type', ogType, 'property');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:url', canonical, 'property'); // Add og:url for better sharing

    // Twitter Card meta tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    return () => {
      document.title = prevTitle;
      // Note: we intentionally do not remove meta tags to avoid side effects
    };
  }, [fullTitle, description, keywords, ogImage, ogType, canonical]);

  return null;
};

export default SEO;
