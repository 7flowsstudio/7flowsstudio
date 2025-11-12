import Purpose from "@/components/Purpose/Purpose";
import Flows from "@/components/Sections/Flows/Flows";
import Hero from "@/components/Sections/Hero/Hero";
import Portfolio from "@/components/Sections/Portfolio/Portfolio";
import Stages from "@/components/Stages/Stages";
import { Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

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
      <Hero />
      <Portfolio />
      <Flows />
      <Stages />
      <Purpose />
    </>
  );
}
