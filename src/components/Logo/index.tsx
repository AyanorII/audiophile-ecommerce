import Image, { ImageProps } from "next/image";

import { twMerge } from "tailwind-merge";

type Props = Omit<ImageProps, "src" | "alt">;

export const Logo = ({ className, ...props }: Props) => {
	return (
		<Image
			src="/images/shared/desktop/logo.svg"
			width={143}
			height={25}
			alt="audiophile"
			className={twMerge(["object-contain", className])}
			{...props}
		/>
	);
};
