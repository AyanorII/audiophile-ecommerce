"use client";

import Image from "next/image";

import { ProductType } from "@/Products/types";

type Props = {
	product: ProductType;
};

export const ProductImage = ({ product }: Props) => {
	const { image, name } = product;
	const { mobile, tablet, desktop } = image;

	const windowWidth = window.innerWidth || 0;

	const className = "h-full w-full object-cover";

	if (windowWidth > 1024) {
		return (
			<Image
				src={desktop}
				alt={name}
				className={className}
				width={220}
				height={240}
			/>
		);
	} else if (windowWidth > 768) {
		return (
			<Image
				src={tablet}
				alt={name}
				className={className}
				width={220}
				height={240}
			/>
		);
	}

	return (
		<Image
			src={mobile}
			alt={name}
			className={className}
			width={220}
			height={240}
		/>
	);
};
