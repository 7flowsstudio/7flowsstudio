import { routing } from '@/i18n/routing';
import { host } from '@/config';

interface StructuredDataProps {
  locale: string;
}

export default async function StructuredData({ locale }: StructuredDataProps) {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '7flows.studio',
    alternateName: '7Flows Studio',
    url: locale === routing.defaultLocale ? host : `${host}/${locale}`,
    logo: `${host}/logo.svg`,
    description:
      locale === 'uk'
        ? 'Веб-агенція яка спеціалізується на створенні і просуванні сайтів.'
        : locale === 'en'
          ? 'Web agency specializing in website creation and promotion.'
          : 'Agencja webowa specjalizująca się w tworzeniu i promocji stron internetowych.',
    foundingDate: '2026-03-07',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Ukrainian', 'English', 'Polish'],
      contactOption: 'TollFree',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
      addressRegion: 'Ukraine',
    },
    sameAs: [
      'https://www.linkedin.com/company/7flows-studio/posts/?feedView=all&viewAsMember=true',
      'https://www.facebook.com/people/7flowsstudio/61587178511191/',
      'https://www.instagram.com/seven.flows.studio',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:
        locale === 'uk'
          ? 'Послуги веб-розробки'
          : locale === 'en'
            ? 'Web Development Services'
            : 'Usługi rozwoju web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'uk'
                ? 'Розробка сайтів'
                : locale === 'en'
                  ? 'Website Development'
                  : 'Tworzenie stron internetowych',
            description:
              locale === 'uk'
                ? 'Створення сучасних веб-сайтів з адаптивним дизайном'
                : locale === 'en'
                  ? 'Creating modern websites with responsive design'
                  : 'Tworzenie nowoczesnych stron internetowych z responsywnym designem',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'uk'
                ? 'UX/UI Дизайн'
                : locale === 'en'
                  ? 'UX/UI Design'
                  : 'Projektowanie UX/UI',
            description:
              locale === 'uk'
                ? 'Проектування користувацького інтерфейсу та досвіду'
                : locale === 'en'
                  ? 'User interface and experience design'
                  : 'Projektowanie interfejsu użytkownika i doświadczenia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'uk'
                ? 'SEO просування'
                : locale === 'en'
                  ? 'SEO Promotion'
                  : 'Promocja SEO',
            description:
              locale === 'uk'
                ? 'Оптимізація сайтів для пошукових систем'
                : locale === 'en'
                  ? 'Website optimization for search engines'
                  : 'Optymalizacja stron internetowych pod kątem wyszukiwarek',
          },
        },
      ],
    },
    knowsAbout: [
      'Web Development',
      'UI/UX Design',
      'SEO Optimization',
      'Digital Marketing',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Ukraine',
      },
      {
        '@type': 'Country',
        name: 'Poland',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    employee: [
      {
        '@type': 'Person',
        name: 'Віталій Барабаш',
        jobTitle: 'Fullstack Developer',
        sameAs: 'https://www.linkedin.com/in/vitalii-barabash/',
      },
      {
        '@type': 'Person',
        name: 'Вікторія Струк',
        jobTitle: 'Software Engineer',
        sameAs: 'https://www.linkedin.com/in/viktoriia-struk',
      },
      {
        '@type': 'Person',
        name: 'Євгенія Наріжна',
        jobTitle: 'Fullstack Developer',
        sameAs: 'https://www.linkedin.com/in/yevheniia-narizhna-12852a332/',
      },
      {
        '@type': 'Person',
        name: "Дар'я Околіта",
        jobTitle: 'UX/UI Designer',
        sameAs: 'https://www.linkedin.com/in/daria-okolita',
      },
    ],
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '7flows.studio',
    url: locale === routing.defaultLocale ? host : `${host}/${locale}`,
    description:
      locale === 'uk'
        ? 'Веб-агенція яка спеціалізується на створенні і просуванні сайтів.'
        : locale === 'en'
          ? 'Web agency specializing in website creation and promotion.'
          : 'Agencja webowa specjalizująca się w tworzeniu i promocji stron internetowych.',
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: '7flows.studio',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${locale === routing.defaultLocale ? host : `${host}/${locale}`}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}
