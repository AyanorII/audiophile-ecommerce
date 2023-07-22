"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

import { useEventListener } from "@/lib/hooks";
import { ProductType } from "@/Products/types";
import { twMerge } from "tailwind-merge";

type GalleryIndex = "first" | "second" | "third";

type CommonProps = {
	product: ProductType;
	className?: string;
};

type Props = CommonProps & {
	galleryIndex?: GalleryIndex;
};

export const ProductImage = ({ product, galleryIndex, ...props }: Props) => {
	const { image, name, gallery } = product;

	const { mobile, tablet, desktop } = galleryIndex
		? gallery[galleryIndex]
		: image;

	const [windowWidth, setWindowWidth] = useState(0);

	useEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const className = twMerge(["h-full w-full object-cover", props.className]);

	const commonProps: Omit<ImageProps, "src"> = {
		alt: name,
		className,
		unoptimized: true,
		width: 220,
		height: 240,
	};

	if (windowWidth > 1024) return <Image src={desktop} {...commonProps} />;

	if (windowWidth > 768) return <Image src={tablet} {...commonProps} />;

	return <Image src={mobile} {...commonProps} />;
};
