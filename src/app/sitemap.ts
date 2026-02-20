import {MetadataRoute} from 'next';
import {host} from '@/config';
import {Locale, getPathname, routing} from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {

  const publicPages: Array<Parameters<typeof getPathname>[0]['href']> = [
    '/',
    '/policy',
    '/terms'
  ];

  const entries: MetadataRoute.Sitemap = [];

  publicPages.forEach(href => {
    entries.push(getEntry(href));
  });

  return entries;
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: href === '/' ? 1.0 : 0.2,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      )
    }
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({locale, href});
  return host + pathname;
}
