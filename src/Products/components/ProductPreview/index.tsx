"use client";

import { Button, Card } from "@/components";
import { ProductType } from "@/Products/types";
import { twMerge } from "tailwind-merge";

import { ProductImage } from "../ProductImage";

type Props = {
	product: ProductType;
	index?: number;
};

export const ProductPreview = ({ product, index = 0 }: Props) => {
	const { new: isNewProduct, name, description, slug } = product;

	return (
		<div
			className={twMerge([
				"flex flex-col gap-8 md:gap-14 lg:gap-16 2xl:gap-24",
				index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row",
			])}
		>
			<Card
				className={`
          relative grid min-h-[240px] min-w-[230px] place-items-center
          bg-[#F1F1F1] sm:h-[352px] md:h-[400px] lg:h-full lg:w-full`}
			>
				<ProductImage
					product={product}
					className={`
            sm:w-1/2 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2
            md:-translate-y-1/2 lg:static lg:w-full lg:translate-x-0 lg:translate-y-0`}
				/>
			</Card>
			<div
				className={`
        text-center md:mx-auto md:w-[85%] lg:flex lg:w-full
        lg:flex-col lg:items-start lg:justify-center lg:text-left`}
			>
				{isNewProduct && (
					<span className="mb-6 inline-block text-sm uppercase tracking-[10px] text-primary-light md:mb-4">
						New product
					</span>
				)}
				<h2 className="mb-6 text-3xl font-bold uppercase sm:text-4xl md:mb-8 md:text-5xl">
					{name}
				</h2>
				<p className="mb-6 leading-relaxed tracking-wider text-gray-500 lg:mb-10">
					{description}
				</p>
				<Button as="link" href={`/products/${slug}`}>
					See product
				</Button>
			</div>
		</div>
	);
};
