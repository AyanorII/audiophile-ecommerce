import { Metadata } from "next";

import { CategoryCardList } from "@/Category/components";
import { About, GoBack, PageContainer } from "@/components";

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
			<PageContainer>
				<div>
					<GoBack
						className="my-6 self-start pl-0 md:mb-14"
						fallbackPath={`/categories/${product?.category}`}
					/>
					{children}
				</div>
				<CategoryCardList className="mt-10 lg:mt-20" />
				<About />
			</PageContainer>
		</div>
	);
};

export default ProductsLayout;
