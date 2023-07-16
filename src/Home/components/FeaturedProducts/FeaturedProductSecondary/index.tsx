import { Button, Card } from "@/components";

export const FeaturedProductSecondary = () => {
	return (
		<>
			<Card className="relative flex h-[320px] items-center bg-[url(/images/home/mobile/image-speaker-zx7.jpg)] bg-cover bg-center md:bg-[url(/images/home/tablet/image-speaker-zx7.jpg)] lg:h-[527px] lg:bg-[url(/images/home/desktop/image-speaker-zx7.jpg)]">
				<div className="relative ml-[10%] md:ml-[12%] xl:ml-[15%]">
					<h3 className="mb-8 text-3xl font-bold uppercase tracking-widest">
						ZX7 Speaker
					</h3>
					<Button as="link" href="/TODO" variant="outlined">
						See product
					</Button>
				</div>
			</Card>
		</>
	);
};
