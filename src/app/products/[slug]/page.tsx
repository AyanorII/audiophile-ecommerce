import {
	Product,
	ProductGallery,
	ProductInfo,
	ProductRecommendations,
} from "@/Products/components";
import { ProductType } from "@/Products/types";

import { PRODUCTS } from "@/lib/constants";

type Props = {
	params: { slug: ProductType["slug"] };
};

const ProductPage = ({ params }: Props) => {
	const product = PRODUCTS.find(({ slug }) => slug === params.slug);

	// TODO: Render not-found 404
	if (!product) return null;

	return (
		<div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
			<Product product={product} />
			<ProductInfo product={product} />
			<ProductGallery product={product} />
			<ProductRecommendations product={product} />
		</div>
	);
};

export default ProductPage;
