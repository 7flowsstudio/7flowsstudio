"use client";
import React, { useState } from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import OrderConsultation from "./OrderConsultation/OrderConsultation";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
	const [openMobMenu, setOpenMobileMenu] = useState(false);
	return (
		<div className={s.header}>
			<nav className={s.leftNav}>
				<Logo />
				<Navigation />
			</nav>
			<div className={s.rightNav}>
				<LocaleSwitcher />
				<OrderConsultation />
				<BurgerMenu openMenu={openMobMenu} closeMenu={setOpenMobileMenu} />
			</div>
		</div>
	);
};

export default Header;
