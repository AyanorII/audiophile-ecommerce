import { Button, Card } from "@/components";
import { ProductType } from "@/Products/types";

import { PRODUCTS } from "@/lib/constants";

import { ProductImage } from "../ProductImage";

type Props = {
	product: ProductType;
};

export const ProductRecommendations = ({ product }: Props) => {
	const { others } = product;
	const slugs = others.map(({ slug }) => slug);

	const recommendations = PRODUCTS.filter((product) =>
		slugs.includes(product.slug)
	);

	return (
		<div className="text-center">
			<h3 className="mb-10 text-2xl font-bold uppercase tracking-wider md:mb-14 lg:mb-16">
				You may also like
			</h3>
			<div className="mx-auto lg:max-w-[90%] xl:max-w-[85%]">
				<div className="flex flex-col gap-14 md:flex-row md:gap-[2%]">
					{recommendations.map((recommendation) => {
						const { name, slug } = recommendation;

						return (
							<div key={slug}>
								<div className="flex h-full flex-col justify-between">
									<Card className="bg-[#F1F1F1]">
										<ProductImage
											product={recommendation}
											className="mx-auto w-1/2 object-contain md:w-full md:object-cover"
										/>
									</Card>
									<h4 className="my-8 text-2xl font-bold uppercase md:my-10">
										{name}
									</h4>
									<Button
										as="link"
										href={`/products/${slug}`}
										className="self-center"
									>
										See product
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
