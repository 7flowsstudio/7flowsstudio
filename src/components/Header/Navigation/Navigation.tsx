import React from "react";
import s from "./Navigation.module.css";
import { useTranslations } from "next-intl";

const Navigation = () => {
	const t = useTranslations("Header");

	const navList: { id: number; link: string; name: string }[] = [
		{ id: 0, link: "#about", name: t("navigation.0") },
		{ id: 1, link: "#services", name: t("navigation.1") },
		{ id: 2, link: "#portfolio", name: t("navigation.2") },
		{ id: 3, link: "#contacts", name: t("navigation.3") },
	];

	return (
		<ul className={s.navList}>
			{navList.map((item) => (
				<li key={item.id} className={s.navItem}>
					<a href={item.link} className={s.navLink}>
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
