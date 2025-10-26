import React from "react";
import Image from "next/image";
import s from "./HeroImage.module.css";

const HeroImage = () => {
	return (
		<div className={s.blockImage}>
			<div className={s.wraperImage}>
				<Image
					src="/img/hero/Abstract_smooth_x22.webp"
					width={1983}
					height={1983}
					alt="image_abstact"
					sizes="100vw"
					className={s.image}
				/>
			</div>
		</div>
	);
};

export default HeroImage;
