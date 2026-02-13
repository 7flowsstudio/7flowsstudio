import React from "react";
import { getTranslations } from "next-intl/server";
import s from "./HeroContent.module.css";
import Image from "next/image";
import HeroImage from "../HeroImage/HeroImage";

const HeroContent = async () => {
	const t = await getTranslations("Hero");

	return (
		<div className={s.heroContent}>
			<div className={s.heroSubHero}>
				<div className={s.hero}>
					<h1 className={s.title}>
						{t("title_1")} <br />
						<Image
							src="/img/hero/Symbol.png"
							width={95}
							height={86}
							alt="flower symbol"
							className={s.image}
							priority={true} 
						/>{" "}
						{t("title_2")} {t("title_3")}
					</h1>
				</div>
				<div className={s.imageWrapperMob}>
					<HeroImage />
				</div>
				<div className={s.description}>
					<span>{t("description")}</span>
				</div>
			</div>
			<a
				href="#form"
				className={s.primaryBtn}
			>
				<span>{t("btn")}</span>
				<div className={s.primaryWrapIcon}>
					<svg className={s.iconPrimary}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</div>
			</a>
		</div>
	);
};

export default HeroContent;
