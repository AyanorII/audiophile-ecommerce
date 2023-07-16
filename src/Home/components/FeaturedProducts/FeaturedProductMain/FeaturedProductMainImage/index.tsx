import Image from "next/image";

import productImageDesktop from "@/../public/images/home/desktop/image-speaker-zx9.png";
import productImageMobile from "@/../public/images/home/mobile/image-speaker-zx9.png";
import productImageTablet from "@/../public/images/home/tablet/image-speaker-zx9.png";

export const FeaturedProductMainImage = () => {
	return (
		<div>
			<Image
				src={productImageMobile}
				alt="ZX9 Speaker"
				className="relative z-10 mx-auto md:hidden"
				width={172}
				height={207}
			/>
			<Image
				src={productImageTablet}
				alt="ZX9 Speaker"
				className="relative z-10 mx-auto hidden md:block lg:hidden "
				width={197}
				height={237}
			/>
			<Image
				src={productImageDesktop}
				alt="ZX9 Speaker"
				className="relative -bottom-16 z-10 hidden min-w-[410px] lg:block"
			/>
		</div>
	);
};
