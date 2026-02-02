import React from "react";
import s from "./Logo.module.css";
import { Link } from "@/i18n/routing";

type LogoProps = {
	variant?: "header" | "footer";
};

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
	const isHeader = variant === "header";
	const isFooter = variant === "footer";
	return (
		<Link
			href="/"
			className={`${s.logo} ${isFooter ? s.logoFooter : ""}`}
			aria-label="7Flows Studio — головна"
			data-testid="header-logo"
		>
			<div
				className={`${s.iconWrapper} ${isFooter ? s.iconWrapperFooter : ""}`}
			>
				<svg className={`${s.logoIcon} ${isFooter ? s.logoIconFooter : ""}`}>
					<use href="/sprite.svg#icon-logo"></use>
				</svg>
				<svg
					className={`${s.logoIconSeven} ${
						isFooter ? s.logoIconSevenFooter : ""
					}`}
				>
					<use href="/sprite.svg#icon-seven"></use>
				</svg>
			</div>
			<div
				className={`${s.iconWrapperFlows} ${
					isFooter ? s.iconWrapperFlowsFooter : ""
				}`}
			>
				<svg className={s.logoIconFlows}>
					<use href="/sprite.svg#icon-flows"></use>
				</svg>
			</div>
		</Link>
	);
};

export default Logo;
