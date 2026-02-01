"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import React from "react";
import s from "./Footer.module.css";
import { useTranslations } from "next-intl";
import useIsMobile from "@/lib/utils/isMobile/isMobile";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import MobileFooter from "./MobileFooter/MobileFooter";

const Footer = () => {
	const t = useTranslations("Footer");
	const isMobile = useIsMobile();

	// if (!isMobile) return 0;

	return (
		<div className={s.foneWrapper}>
			<div className={`${s.foneElipse} ${s.adWrap}`}>
				{/* <Image
					src="/img/footer/Ellipse.svg"
					fill
					className={s.image}
					alt="img_fone"
				/> */}
			</div>
			<WrapperForComponents paddingBottom={isMobile ? 32 : 64}>
				<div className={s.footerWrapper}>
					<MobileFooter />
					<DesktopFooter />
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default Footer;
