import React, { useEffect, useState } from "react";
import s from "./ComponentBackground.module.css";

const ComponentBackground = () => {
	const [isLoaded, setIsLoaded] = useState(false);

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
