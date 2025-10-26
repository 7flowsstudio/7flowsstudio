import React, { useEffect, useState } from "react";
import Image from "next/image";
import s from "./ComponentBackground.module.css";
import { useTranslations } from "next-intl";

const ComponentBackground = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const t = useTranslations("Hero");

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 10);
	}, []);
	return (
		<div
			className={`${s.visualFirstScreen} ${isLoaded ? s.lazyLoaded : ""}`}
		></div>
	);
};

export default ComponentBackground;
