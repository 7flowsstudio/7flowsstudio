"use client";
import React from "react";
import s from "./DesktopFooter.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "@/components/Header/Logo/Logo";

const DesktopFooter = () => {
	const t = useTranslations("Footer");

	return (
		<>
			<div className={s.sideLogo}>
				<div className={s.logo}>
					<h2 className={s.title}>
						{t("title").replaceAll(" ", "\n")}
						<span className={s.icon}>
							<Image
								src="/img/purpose/arrow.svg"
								fill
								alt="icon"
								className={s.iconTitle}
							/>
						</span>
					</h2>
				</div>
				<div className={s.copyright}>
					<Logo />
					<h5 className={s.textFooter}>{t("copyright")}</h5>
				</div>
			</div>
			<div className={s.sideInfo}>
				<h3 className={s.titleEmail}>seven.flows.studio@gmail.com</h3>
				<div className={s.infoBottom}>
					<div className={s.menu}>
						<ul className={s.menuList}>
							<li className={s.menuItem}>
								<a href="#About" className={s.textFooter}>
									{t("menu.0")}
								</a>
							</li>
							<li className={s.menuItem}>
								<a href="#Services" className={s.textFooter}>
									{t("menu.1")}
								</a>
							</li>
							<li className={s.menuItem}>
								<a href="#Portfolio" className={s.textFooter}>
									{t("menu.2")}
								</a>
							</li>
						</ul>
						<ul className={s.menuPrivatList}>
							<li className={s.menuPrivatItem}>
								<Link href="/policy" className={s.textFooter}>
									Privacy Policy
								</Link>
							</li>
							<li className={s.menuPrivatItem}>
								<Link href="/terms" className={s.textFooter}>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<ul className={s.socMenuList}>
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
		</>
	);
};

export default DesktopFooter;
