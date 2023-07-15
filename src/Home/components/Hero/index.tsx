import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen w-full items-center overflow-hidden bg-zinc-900 py-4">
			<HeroImage />
			<HeroContent />
		</section>
	);
};
