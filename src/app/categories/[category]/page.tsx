import { Container } from "@/components";
import { Product } from "@/Products/components";

import { PRODUCTS } from "@/lib/constants";

export function generateStaticParams() {
	const uniqueCategories = [
		...new Set(PRODUCTS.map(({ category }) => category)),
	];

	return uniqueCategories.map((category) => ({ category }));
}

type Props = {
	params: ReturnType<typeof generateStaticParams>[number];
};

const CategoryPage = ({ params }: Props) => {
	const categoryProducts = PRODUCTS.filter(
		(product) => product.category === params.category
	).sort((a) => (a.new ? -1 : 1));

	return (
		<Container>
			<div className="flex flex-col gap-32 lg:gap-40">
				{categoryProducts.map((product, index) => (
					<Product key={product.id} product={product} index={index} />
				))}
			</div>
		</Container>
	);
};

export default CategoryPage;
