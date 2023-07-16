import { FeaturedProductMain } from "./FeaturedProductMain";
import { FeaturedProductSecondary } from "./FeaturedProductSecondary";
import { FeaturedProductTertiary } from "./FeaturedProductTertiary";

export const FeaturedProducts = () => {
	return (
		<div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
			<FeaturedProductMain />
			<FeaturedProductSecondary />
			<FeaturedProductTertiary />
		</div>
	);
};
