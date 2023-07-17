import { twMerge } from "tailwind-merge";

import { Card } from "../Card";

export const About = () => {
	const imageClassName =
		"bg-[url(/images/shared/mobile/image-best-gear.jpg)] md:bg-[url(/images/shared/tablet/image-best-gear.jpg)] lg:bg-[url(/images/shared/desktop/image-best-gear.jpg)] bg-cover bg-center";

	return (
		<div className="grid auto-rows-[minmax(300px,_1fr)] gap-8 lg:grid-cols-2 lg:items-center lg:gap-0">
			<Card className={twMerge("lg:h-[588px] lg:order-1", [imageClassName])} />
			<div className="text-center sm:mx-auto sm:max-w-[80%] lg:mx-0 lg:max-w-[90%] lg:pe-12 lg:text-left">
				<h4 className="mb-8 text-3xl font-bold uppercase leading-normal tracking-wider">
					Bringing you the <span className="text-primary-main">best</span> audio
					gear
				</h4>
				<p className="text-sm leading-loose tracking-wide opacity-60">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	);
};
