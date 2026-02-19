import dynamic from 'next/dynamic';
import DevProfiler from '@/components/DevProfiler/DevProfiler';
import Purpose from '@/components/Purpose/Purpose';
import About from '@/components/Sections/About/About';
import Hero from '@/components/Sections/Hero/Hero';
import Portfolio from '@/components/Sections/Portfolio/Portfolio';
import ServicesClient from '@/components/Services/Services.client';
import { Locale } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import FAQSection from '@/components/FAQSection/FAQSection';

const ReviewsClient = dynamic(() => import('@/components/Sections/Reviews/  Reviews.client'), {
  loading: () => <div>Loading reviews...</div>
});

const TeamClient = dynamic(() => import('@/components/Sections/Team/Team.client'), {
  loading: () => <div>Loading team...</div>
});

const StagesNewClient = dynamic(() => import('@/components/Sections/StagesNew/StagesNew.client'), {
  loading: () => <div>Loading stages...</div>
});

const ContactClient = dynamic(() => import('@/components/Sections/Contact/Contact.client'), {
  loading: () => <div>Loading contact...</div>
});

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  // console.log("LOCKALE", locale);

  return (
    <>
      <DevProfiler id="Hero">
        <Hero />
      </DevProfiler>

      <DevProfiler id="Portfolio">
        <Portfolio />
      </DevProfiler>

      <DevProfiler id="About">
        <About />
      </DevProfiler>

      <ServicesClient />

      <StagesNewClient />

      <DevProfiler id="Purpose">
        <Purpose />
      </DevProfiler>

      <ReviewsClient />

      <TeamClient />

      <ContactClient />

      <DevProfiler id="FAQSection">
        <FAQSection />
      </DevProfiler>
    </>
  );
}
