import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { isLocale, routing } from "@/i18n/routing";
import { host } from "@/config";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StructuredData from "@/components/StructuredData";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
	const resolvedParams = (await params) as { locale: string };
	const { locale } = resolvedParams;

	if (!isLocale(locale)) {
		notFound();
	}

	const t = await getTranslations({
		locale: locale,
		namespace: "LocaleLayout",
	});

	// Generate canonical URL for the current locale
	const canonicalUrl = locale === routing.defaultLocale
		? host
		: `${host}/${locale}`;

	// Get localized descriptions
	const descriptions = {
		uk: "Веб-агенція яка спеціалізується на створенні і просуванні сайтів.",
		en: "Web agency specializing in website creation and promotion.",
		pl: "Agencja webowa specjalizująca się w tworzeniu i promocji stron internetowych."
	};

	const titles = {
		uk: "7flows.studio - Веб-агенція",
		en: "7flows.studio - Web Agency",
		pl: "7flows.studio - Agencja Webowa"
	};

	const keywords = {
		uk: ["веб-розробка", "сайти", "дизайн", "маркетинг", "розробка сайтів", "web development"],
		en: ["web development", "websites", "design", "marketing", "website development"],
		pl: ["rozwoj web", "strony internetowe", "projektowanie", "marketing", "tworzenie stron"]
	};

	return {
		title: titles[locale as keyof typeof titles] || t("title"),
		description: descriptions[locale as keyof typeof descriptions] || t("description"),
		keywords: keywords[locale as keyof typeof keywords],
		authors: [{ name: "7flows.studio" }],
		creator: "7flows.studio",
		publisher: "7flows.studio",
		alternates: {
			canonical: canonicalUrl,
			languages: Object.fromEntries(
				routing.locales.map((loc) => [
					loc,
					loc === routing.defaultLocale
						? host
						: `${host}/${loc}`
				])
			),
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		openGraph: {
			type: 'website',
			locale: locale === 'uk' ? 'uk_UA' : locale === 'en' ? 'en_US' : 'pl_PL',
			url: canonicalUrl,
			siteName: '7flows.studio',
			title: titles[locale as keyof typeof titles],
			description: descriptions[locale as keyof typeof descriptions],
			images: [
				{
					url: `${host}/og-image.webp`,
					width: 1080,
					height: 1080,
					alt: titles[locale as keyof typeof titles],
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: titles[locale as keyof typeof titles],
			description: descriptions[locale as keyof typeof descriptions],
			images: [`${host}/og-image.webp`],
			creator: '@7flowsstudio',
		},
		icons: {
			icon: [
				{ url: "/i.png", sizes: "94x85", type: "image/png" },
				{ url: "/icon.svg", type: "image/svg+xml" }
			],
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const resolvedParams = (await params) as { locale: string };
	const { locale } = resolvedParams;
	// Ensure that the incoming `locale` is valid
	if (!isLocale(locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<StructuredData locale={locale} />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
