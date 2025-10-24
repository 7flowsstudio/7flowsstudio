import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import OrderConsultation from "./OrderConsultation/OrderConsultation";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

const Header = () => {
	return (
		<div className={s.header}>
			<nav className={s.leftNav}>
				<Logo />
				<Navigation />
			</nav>
			<div className={s.rightNav}>
				<LocaleSwitcher />
				<OrderConsultation />
			</div>
		</div>
	);
};

export default Header;
