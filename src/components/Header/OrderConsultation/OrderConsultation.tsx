"use client";
import React from "react";
import s from "./OrderConsultation.module.css";
import { useTranslations } from "use-intl";

const OrderConsultation = () => {
	const t = useTranslations("Header");
	return (
		<button
			className={s.orderBtn}
			onClick={() => {
				const contactsSection = document.getElementById('form');
				if (contactsSection) {
					contactsSection.scrollIntoView({ behavior: 'smooth' });
				}
			}}
		>
			{t("btn")}
		</button>
	);
};

export default OrderConsultation;
