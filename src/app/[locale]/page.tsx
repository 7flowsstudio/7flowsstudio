import DevProfiler from '@/components/DevProfiler/DevProfiler';
import Purpose from '@/components/Purpose/Purpose';
import About from '@/components/Sections/About/About';
import Hero from '@/components/Sections/Hero/Hero';
import Portfolio from '@/components/Sections/Portfolio/Portfolio';
import ServicesClient from '@/components/Services/Services.client';
import ReviewsClient from '@/components/Sections/Reviews/  Reviews.client';
import TeamClient from '@/components/Sections/Team/Team.client';
import { Locale } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import FAQSection from '@/components/FAQSection/FAQSection';
import StagesNewClient from '@/components/Sections/StagesNew/StagesNew.client';
import ContactClient from '@/components/Sections/Contact/Contact.client';

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
