"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import React from "react";
import s from "./Hero.module.css";
import ComponentBackground from "./ComponentBackground/ComponentBackground";
import HeroContent from "./HeroContent/HeroContent";
import HeroImage from "./HeroImage/HeroImage";

const Hero = () => {
	return (
		<div className={s.heroWrapper}>
			<ComponentBackground />

			<WrapperForComponents>
				<HeroContent />
				<div className={s.imageWrapLaptop}>
					<HeroImage />
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default Hero;
