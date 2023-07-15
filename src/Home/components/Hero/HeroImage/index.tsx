import Image from "next/image";

import heroImageDesktop from "@/../public/images/home/desktop/image-hero.jpg";
import heroImageMobile from "@/../public/images/home/mobile/image-header.jpg";
import heroImageTablet from "@/../public/images/home/tablet/image-header.jpg";

export const HeroImage = () => {
	return (
		<>
			<Image
				src={heroImageMobile}
				alt="XX99 Mark II Headphones"
				fill
				className="object-contain sm:object-cover md:hidden"
			/>
			<Image
				src={heroImageTablet}
				alt="XX99 Mark II Headphones"
				fill
				className="hidden object-cover md:block lg:hidden"
			/>
			<Image
				src={heroImageDesktop}
				alt="XX99 Mark II Headphones"
				fill
				className="hidden object-cover lg:block"
			/>
		</>
	);
};
