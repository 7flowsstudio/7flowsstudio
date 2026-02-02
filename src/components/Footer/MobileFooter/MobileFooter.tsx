"use client";
import React from "react";
import s from "./MobileFooter.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "@/components/Header/Logo/Logo";

const MobileFooter = () => {
	const t = useTranslations("Footer");
	return (
		<div className={s.footerMobWrapper}>
			<div className={s.footerHead}>
				<div className={s.footerTop}>
					<h2 className={s.title}>{t("title")}</h2>
					<div className={s.wrapperIcon}>
						<Image
							src="/img/purpose/arrow_bottom.svg"
							fill
							alt="icon"
							className={s.iconTitle}
						/>
					</div>
					<h3 className={s.titleEmail}>seven.flows.studio@gmail.com</h3>
				</div>

				<div className={s.socMenuBlock}>
					<ul className={s.socListMenu}>
						<li className={s.socItemMenu}>
							<a href="#About" className={s.textFooter}>
								{t("menu.0")}
							</a>
						</li>
						<li className={s.socItemMenu}>
							<a href="#Services" className={s.textFooter}>
								{t("menu.1")}
							</a>
						</li>
						<li className={s.socItemMenu}>
							<a href="#Portfolio" className={s.textFooter}>
								{t("menu.2")}
							</a>
						</li>
						<li className={s.socItemMenu}>
							<Link href="/policy" className={s.textFooter}>
								Privacy Policy
							</Link>
						</li>
						<li className={s.socItemMenu}>
							<Link href="/terms" className={s.textFooter}>
								Terms of Service
							</Link>
						</li>
					</ul>

					<ul className={s.socMenuIconList}>
						<li className={s.socMenuItem}>
							<a href="http://linkedin.com" className={s.linkSoc}>
								<svg className={s.iconSoc}>
									<use href="/sprite.svg#icon-linkedin"></use>
								</svg>
							</a>
						</li>
						<li className={s.socMenuItem}>
							<a href="http://instagram.com" className={s.linkSoc}>
								<svg className={s.iconSoc}>
									<use href="/sprite.svg#icon-instagram"></use>
								</svg>
							</a>
						</li>
						<li className={s.socMenuItem}>
							<a href="http://facebook.com" className={s.linkSoc}>
								<svg className={s.iconSoc}>
									<use href="/sprite.svg#icon-facebook"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={s.copyright}>
				<Logo variant="footer" />
				<h5 className={s.textFooter}>{t("copyright")}</h5>
			</div>
		</div>
	);
};

export default MobileFooter;
