import { Button, Card, CounterControlButton, Price } from "@/components";
import { ProductType } from "@/Products/types";

import { ProductImage } from "../ProductImage";

type Props = {
	product: ProductType;
};

export const Product = ({ product }: Props) => {
	const { new: isNewProduct, name, description, price } = product;

	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 2xl:gap-24">
			<Card className="relative min-h-[240px] min-w-[230px] lg:h-full lg:w-full">
				<ProductImage product={product} />
			</Card>
			<div className="flex flex-col gap-6 md:justify-center">
				{isNewProduct && (
					<span className="inline-block text-sm uppercase tracking-[10px] text-primary-light">
						New product
					</span>
				)}
				<h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
					{name}
				</h2>
				<p className="leading-relaxed tracking-wider text-gray-500">
					{description}
				</p>
				<Price price={price} className="lg:mb-4" />
				<div className="flex gap-4">
					<CounterControlButton />
					<Button as="button">Add to cart</Button>
				</div>
			</div>
		</div>
	);
};
