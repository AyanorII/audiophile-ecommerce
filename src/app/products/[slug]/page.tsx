export const dynamic =
	process.env.NODE_ENV === "production" ? "auto" : "force-dynamic";

import { notFound } from "next/navigation";

import {
	Product,
	ProductGallery,
	ProductInfo,
	ProductRecommendations,
} from "@/Products/components";

import { PRODUCTS } from "@/lib/constants";

const staticParams = () => {
	return PRODUCTS.map(({ slug }) => ({ slug }));
};

// fix "dynamic server usage" errors in dev mode by turning off static generation and forcing dynamic rendering
export const generateStaticParams =
	process.env.NODE_ENV === "production" ? staticParams : undefined;

type Props = {
	params: { slug: ReturnType<typeof staticParams>[number]["slug"] };
};

const ProductPage = ({ params }: Props) => {
	const product = PRODUCTS.find(({ slug }) => slug === params.slug);

	if (!product) {
		notFound();
	}

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
