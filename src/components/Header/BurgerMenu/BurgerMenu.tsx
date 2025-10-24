"use client";
import React from "react";
import s from "./BurgerMenu.module.css";

type ButtonProps = {
	openMenu: boolean;
	closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: React.FC<ButtonProps> = ({ openMenu, closeMenu }) => {
	const hundlerClick = () => {
		closeMenu(!openMenu);
	};
	return (
		<div className={s.burgerWrapper} onClick={() => hundlerClick()}>
			<svg className={s.burgerIcon}>
				<use href="/sprite.svg#icon-burger"></use>
			</svg>
		</div>
	);
};

export default BurgerMenu;
