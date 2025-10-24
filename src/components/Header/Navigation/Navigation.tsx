import React from "react";
import s from "./Navigation.module.css";
import { useTranslations } from "next-intl";
import { Link, Pathnames } from "@/i18n/routing";

const Navigation = () => {
	const t = useTranslations("Header");

	const navList: { id: number; link: Pathnames; name: string }[] = [
		{ id: 0, link: "/about", name: t("navigation.0") },
		{ id: 1, link: "/services", name: t("navigation.1") },
		{ id: 2, link: "/portfolio", name: t("navigation.2") },
		{ id: 3, link: "/contacts", name: t("navigation.3") },
	];

	return (
		<ul className={s.navList}>
			{navList.map((item) => (
				<li key={item.id} className={s.navItem}>
					<Link href={item.link} className={s.navLink}>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
