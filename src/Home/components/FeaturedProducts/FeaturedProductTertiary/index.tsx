import { Button, Card } from "@/components";
import { twMerge } from "tailwind-merge";

export const FeaturedProductTertiary = () => {
	const imageClassName =
		"bg-[url(/images/home/mobile/image-earphones-yx1.jpg)] bg-cover md:bg-[url(/images/home/tablet/image-earphones-yx1.jpg)] lg:bg-[url(/images/home/desktop/image-earphones-yx1.jpg)]";

	return (
		<div className="grid auto-rows-[200px] gap-3 md:auto-rows-[320px] md:grid-cols-2">
			<Card className={twMerge(["relative", imageClassName])} />
			<Card className="flex flex-col items-start justify-center bg-gray-100">
				<div className="px-3 md:px-5 lg:px-8 xl:px-10">
					<h3 className="mb-8 text-3xl font-bold uppercase tracking-widest">
						YX1 Earphones
					</h3>
					<Button as="link" href="/TODO" variant="outlined">
						See product
					</Button>
				</div>
			</Card>
		</div>
	);
};
