import { Product } from "@/Products/components";

import { PRODUCTS } from "@/lib/constants";

export const generateStaticParams = () => {
	const uniqueCategories = [
		...new Set(PRODUCTS.map(({ category }) => category)),
	];

	return uniqueCategories.map((category) => ({ category }));
};

type Props = {
	params: ReturnType<typeof generateStaticParams>[number];
};

const CategoryPage = ({ params }: Props) => {
	const categoryProducts = PRODUCTS.filter(
		(product) => product.category === params.category
	).sort((a) => (a.new ? -1 : 1));

	return (
		<>
			{categoryProducts.map((product, index) => (
				<Product key={product.id} product={product} index={index} />
			))}
		</>
	);
};

export default CategoryPage;
