"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import React from "react";
import s from "./Footer.module.css";
import useIsMobile from "@/lib/utils/isMobile/isMobile";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import MobileFooter from "./MobileFooter/MobileFooter";

const Footer = () => {
	const isMobile = useIsMobile();

	return (
		<div className={s.foneWrapper}>
			<div className={`${s.foneElipse} ${s.adWrap}`}></div>
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
