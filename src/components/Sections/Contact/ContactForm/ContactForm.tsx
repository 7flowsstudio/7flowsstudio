"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { ValidationSchemaContact } from "@/lib/utils/validationSchema";
import s from "./ContactForm.module.css";
import { useState } from "react";
import SuccessModdal from "./SuccessModdal/SuccessModdal";

type InitialValuesType = {
	name: string;
	interest: string;
	email: string;
};

const ContactForm = () => {
	const t = useTranslations("Contact");
	const [successMessage, setSuccessMessage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const hundlerSubmit = async (
		values: InitialValuesType,
		{ resetForm }: FormikHelpers<InitialValuesType>
	) => {
		const data = {
			name: values.name,
			interest: values.interest,
			email: values.email,
		};

		try {
			setIsLoading(true);
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setSuccessMessage(true);
				resetForm();
			}
		} catch (error) {
			console.error("Error sending email:", error);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<WrapperForComponents paddingTop={100} paddingBottom={100}>
			<h3 className={s.title}>{t("title")}</h3>
			<Formik
				initialValues={{ name: "", interest: "", email: "" }}
				validationSchema={ValidationSchemaContact}
				onSubmit={hundlerSubmit}
			>
				<Form className={s.form}>
					<p className={s.text}>
						{t("greeting")}
						<span>, 7FLOWS!</span>
					</p>
					<div className={s.wrappInput}>
						<p className={s.text}>{t("name")}</p>
						<Field name="name" className={s.input} />

						<p className={s.text}>
							<span className={s.text}>&</span>
							{t("me")}
						</p>
					</div>
					<div className={s.wrappInput}>
						<p className={s.text}>{t("interest")}</p>
						<Field name="interest" className={s.input} />
						<span className={s.text}>.</span>
					</div>
					<div className={s.wrappInput}>
						<p className={s.text}>{t("write")}</p>
						<Field name="email" type="email" className={s.input} />
						<span className={s.text}>.</span>
					</div>
					<button type="submit" className={s.primaryBtn}>
						<span>
							{/* {t("btn")} */}
							{isLoading ? t("btn_1") : t("btn")}
						</span>
						<div className={s.primaryWrapIcon}>
							<svg className={s.iconPrimary}>
								<use href="/sprite.svg#icon-arrow-top-right"></use>
							</svg>
						</div>
					</button>
				</Form>
			</Formik>
			{successMessage && (
				<SuccessModdal setSuccessMessage={setSuccessMessage} />
			)}
		</WrapperForComponents>
	);
};
export default ContactForm;
