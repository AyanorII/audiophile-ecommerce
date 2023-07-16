import Image from "next/image";

import { Card, Container } from "@/components";

import { FeaturedProductMainContent } from "./FeaturedProductMainContent";
import { FeaturedProductMainImage } from "./FeaturedProductMainImage";

export const FeaturedProductMain = () => {
	return (
		<Card className="relative bg-primary-main py-14 lg:pb-12">
			<Container className="flex h-full flex-col items-center justify-center gap-10 lg:max-w-[77%] lg:flex-row xl:gap-16 2xl:gap-24">
				<Image
					src="/images/home/desktop/pattern-circles.svg"
					width={100}
					height={100}
					className="absolute left-0 top-[-20%] z-10 w-full md:top-[-25%] lg:bottom-[-40%] lg:left-[-15%] lg:top-[unset] 2xl:bottom-[-500px] 2xl:left-[-250px]"
					alt="pattern"
				/>
				<FeaturedProductMainImage />
				<FeaturedProductMainContent />
			</Container>
		</Card>
	);
};
