import { ProductType } from "@/Products/types";

type Props = {
	product: ProductType;
};

export const ProductInfo = ({ product }: Props) => {
	const { features, includes } = product;

	const HEADING_CLASS_NAME =
		"text-2xl font-bold tracking-wider md:text-4xl uppercase mb-6";

	return (
		<div className="flex flex-col gap-24 lg:flex-row lg:gap-32">
			<div className="lg:w-1/2">
				<h3 className={HEADING_CLASS_NAME}>Features</h3>
				<p className="whitespace-pre-line tracking-wide text-gray-400">
					{features}
				</p>
			</div>
			<div className="grid md:grid-cols-2 lg:block">
				<h3 className={HEADING_CLASS_NAME}>In the box</h3>
				<ul className="flex flex-col gap-4">
					{includes.map(({ quantity, item }, index) => (
						<li key={index} className="flex gap-5">
							<span className="font-bold text-primary-main">{quantity}x</span>
							<span className="tracking-wide text-gray-400">{item}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
