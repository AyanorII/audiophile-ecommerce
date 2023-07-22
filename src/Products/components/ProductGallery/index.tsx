import { Card } from "@/components";
import { ProductType } from "@/Products/types";

import { ProductImage } from "../ProductImage";

type Props = {
	product: ProductType;
};

export const ProductGallery = ({ product }: Props) => {
	return (
		<div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-[0.75fr,_1fr] md:grid-rows-2">
			<Card
				className={`md:col-start-1 md:col-end-2 md:row-start-1
          md:row-end-2 `}
			>
				<ProductImage product={product} galleryIndex="first" />
			</Card>
			<Card className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
				<ProductImage product={product} galleryIndex="second" />
			</Card>
			<Card className="row-start-3 row-end-5 md:col-start-2 md:col-end-3 md:row-span-full">
				<ProductImage product={product} galleryIndex="third" />
			</Card>
		</div>
	);
};
