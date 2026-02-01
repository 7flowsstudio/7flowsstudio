import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import React from "react";
import s from "./Services.module.css";
import { useTranslations } from "next-intl";

const Services = () => {
	const t = useTranslations("Services");
	const servicesList = [
		{
			id: 0,
			name: t("services_start.name"),
			from: t("services_start.price"),
			type: t("services_start.type"),
			list: [
				t("services_start.servicesList.0"),
				t("services_start.servicesList.1"),
				t("services_start.servicesList.2"),
				t("services_start.servicesList.3"),
				t("services_start.servicesList.4"),
				t("services_start.servicesList.5"),
				t("services_start.servicesList.6"),
			],
		},
		{
			id: 1,
			name: t("services_popular.name"),
			from: t("services_popular.price"),
			type: t("services_popular.type"),
			list: [
				t("services_popular.servicesList.0"),
				t("services_popular.servicesList.1"),
				t("services_popular.servicesList.2"),
				t("services_popular.servicesList.3"),
				t("services_popular.servicesList.4"),
				t("services_popular.servicesList.5"),
				t("services_popular.servicesList.6"),
				t("services_popular.servicesList.7"),
			],
		},
		{
			id: 2,
			name: t("services_maximum.name"),
			from: t("services_maximum.price"),
			type: t("services_maximum.type"),
			list: [
				t("services_maximum.servicesList.0"),
				t("services_maximum.servicesList.1"),
				t("services_maximum.servicesList.2"),
				t("services_maximum.servicesList.3"),
				t("services_maximum.servicesList.4"),
				t("services_maximum.servicesList.5"),
				t("services_maximum.servicesList.6"),
			],
		},
	];

	const isNotService = (serviceId: number, serviceIndex: number): boolean => {
		return serviceId === 0 && serviceIndex >= 5;
	};

	return (
		<WrapperForComponents paddingTop={100} paddingBottom={100}>
			<div id="services" className={s.servicesWrapper}>
				<h2 className={s.title}>{t("title")}</h2>
				<ul className={s.servicesList}>
					{servicesList.map((item) => (
						<li key={item.id} className={s.servicesItem}>
							<div className={s.servicesBlock}>
								<div className={s.titleBlock}>
									<div className={s.typeBlock}>
										{item.id === 1 && (
											<svg className={s.iconTypeUnion}>
												<use href="/sprite.svg#icon-union"></use>
											</svg>
										)}

										<h3 className={s.servicesTitle}>{item.name}</h3>
									</div>
									<div className={s.servicesPrice}>
										<h4 className={s.priceTitle}>{item.from}</h4>
										<p className={s.typeTitle}>{item.type}</p>
									</div>
								</div>
								<ul className={s.servicesInerList}>
									{item.list.map((service, index) => (
										<li key={index} className={s.servicesInerItem}>
											<div className={s.iconBlock}>
												<svg className={s.iconCheck}>
													<use
														href={
															isNotService(item.id, index)
																? "/sprite.svg#icon-not-check-list"
																: "/sprite.svg#icon-check-list"
														}
													></use>
												</svg>
											</div>
											<p className={s.inerText}>{service}</p>
										</li>
									))}
								</ul>
							</div>
							<button
								type="button"
								className={s.linkBtn}
								onClick={() => {
									const contactsSection = document.getElementById('contacts');
									if (contactsSection) {
										contactsSection.scrollIntoView({ behavior: 'smooth' });
									}
								}}
							>
								{t("btn")}
							</button>
						</li>
					))}
				</ul>
				<div className={s.sale}>
					<div className={s.iconWrapper}>
						<svg className={s.iconUnion}>
							<use href="/sprite.svg#icon-union"></use>
						</svg>
					</div>
					<span className={s.saleUnion}>-50% {t("title_sale")}</span>
					<div className={s.iconWrapper}>
						<svg className={s.iconUnion}>
							<use href="/sprite.svg#icon-union"></use>
						</svg>
					</div>
				</div>
			</div>
		</WrapperForComponents>
	);
};

export default Services;
