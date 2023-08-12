export const dynamic =
	process.env.NODE_ENV === "production" ? "auto" : "force-dynamic";

import { notFound } from "next/navigation";

import { ProductPreview } from "@/Products/components";

import { PRODUCTS } from "@/lib/constants";

const staticParams = () => {
	const uniqueCategories = [
		...new Set(PRODUCTS.map(({ category }) => category)),
	];

	return uniqueCategories.map((category) => ({ category }));
};

// fix "dynamic server usage" errors in dev mode by turning off static generation and forcing dynamic rendering
export const generateStaticParams =
	process.env.NODE_ENV === "production" ? staticParams : undefined;

type Props = {
	params: ReturnType<typeof staticParams>[number];
};

const CategoryPage = ({ params }: Props) => {
	const uniqueCategories = staticParams();
	const foundCategory = uniqueCategories.find(
		({ category }) => category === params.category
	);

	if (!foundCategory) {
		notFound();
	}

	const categoryProducts = PRODUCTS.filter(
		(product) => product.category === params.category
	).sort((a) => (a.new ? -1 : 1));

	return (
		<>
			{categoryProducts.map((product, index) => (
				<ProductPreview key={product.id} product={product} index={index} />
			))}
		</>
	);
};

export default CategoryPage;
