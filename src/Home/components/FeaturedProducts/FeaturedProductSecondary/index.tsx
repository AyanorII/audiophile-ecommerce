import { Button, Card } from "@/components";
import { twMerge } from "tailwind-merge";

export const FeaturedProductSecondary = () => {
	const imageClassName =
		"bg-[url(/images/home/mobile/image-speaker-zx7.jpg)] bg-cover bg-center md:bg-[url(/images/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/images/home/desktop/image-speaker-zx7.jpg)]";

	return (
		<>
			<Card
				className={twMerge([
					"relative flex h-[320px] items-center lg:h-[527px]",
					imageClassName,
				])}
			>
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
