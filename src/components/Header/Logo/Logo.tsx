import React from "react";
import s from "./Logo.module.css";
import { Link } from "@/i18n/routing";

const Logo = () => {
	return (
		<Link href="/" className={s.logo}>
			<div className={s.iconWrapper}>
				<svg className={s.logoIcon}>
					<use href="/sprite.svg#icon-logo"></use>
				</svg>
				<svg className={s.logoIconSeven}>
					<use href="/sprite.svg#icon-seven"></use>
				</svg>
			</div>
			<div className={s.iconWrapperFlows}>
				<svg className={s.logoIconFlows}>
					<use href="/sprite.svg#icon-flows"></use>
				</svg>
			</div>
		</Link>
	);
};

export default Logo;
