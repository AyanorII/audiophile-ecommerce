import { Button, Container } from "@/components";

export const FeaturedProductMainContent = () => {
	return (
		<Container className="relative z-10">
			<div className="mx-auto max-w-[50ch] whitespace-pre-wrap text-center text-white lg:text-start">
				<h2 className="mb-6 text-4xl font-bold uppercase tracking-widest sm:text-5xl md:text-6xl">{`ZX9\nSpeaker`}</h2>
				<p className="mb-6 font-thin leading-relaxed tracking-wider sm:mb-8 md:mb-10 lg:mb-16">
					Upgrade to premium speakers that are phenomenally built to deliver
					truly remarkable sound.
				</p>
				<Button
					as="link"
					variant="dark"
					href="/products/zx9-speaker"
					className="inline-block"
				>
					See Product
				</Button>
			</div>
		</Container>
	);
};
