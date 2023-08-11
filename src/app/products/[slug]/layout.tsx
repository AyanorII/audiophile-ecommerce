import { Metadata } from "next";

import { CategoryCardList } from "@/Category/components";
import { About, Container, GoBack } from "@/components";

import { PRODUCTS } from "@/lib/constants";

type Props = {
	children: React.ReactNode;
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({
	params: { slug }, // eslint-disable-next-line @typescript-eslint/require-await
}: Props): Promise<Metadata> => {
	const product = PRODUCTS.find(
		({ slug: productSlug }) => productSlug === slug
	);

	return {
		title: `${product?.name} | Audiophile`,
		description: product?.description,
	};
};

const ProductsLayout = ({ children, params }: Props) => {
	const { slug } = params;
	const product = PRODUCTS.find(
		({ slug: productSlug }) => productSlug === slug
	);

	return (
		<div className="mt-[100px]">
			<Container className="mb-16 mt-8 flex flex-col gap-32 md:mb-32 md:mt-24 lg:mb-40 lg:mt-32 lg:gap-40">
				<div>
					<GoBack
						className="my-6 self-start pl-0 md:mb-14"
						fallbackPath={`/categories/${product?.category}`}
					/>
					{children}
				</div>
				<CategoryCardList className="mt-10 lg:mt-20" />
				<About />
			</Container>
		</div>
	);
};

export default ProductsLayout;
