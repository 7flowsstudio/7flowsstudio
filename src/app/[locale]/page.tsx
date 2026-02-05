import DevProfiler from '@/components/DevProfiler/DevProfiler';
import Purpose from '@/components/Purpose/Purpose';
import About from '@/components/Sections/About/About';
import Hero from '@/components/Sections/Hero/Hero';
import Portfolio from '@/components/Sections/Portfolio/Portfolio';
import StagesNew from '@/components/Sections/StagesNew/StagesNew';
import ServicesClient from '@/components/Services/Services.client';
import ReviewsClient from '@/components/Sections/Reviews/  Reviews.client';
import Stages from '@/components/Stages/Stages';
import { Locale } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import FAQSection from '@/components/FAQSection/FAQSection';
import Contact from '@/components/Sections/Contact/Contact';

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

      <DevProfiler id="StagesNew">
        <StagesNew />
      </DevProfiler>

      {/* <DevProfiler id="Stages">
        <Stages />
      </DevProfiler> */}

      <DevProfiler id="Purpose">
        <Purpose />
      </DevProfiler>

			<ReviewsClient />

			<DevProfiler id="Contact">
				<Contact />
			</DevProfiler>

			<DevProfiler id="FAQSection">
				<FAQSection />
			</DevProfiler>
		</>
	);
}
