import { Metadata } from "next";

import { CategoryCardList, CategoryHeader } from "@/Category/components";
import { CategoryType } from "@/Category/types";
import { About, Container } from "@/components";

import { CATEGORIES_METADATA } from "@/Category/constants";

type Props = {
	params: {
		category: CategoryType;
	};
	children: React.ReactNode;
};

export const generateMetadata = async ({
	params: { category }, // eslint-disable-next-line @typescript-eslint/require-await
}: Props): Promise<Metadata> => {
	return CATEGORIES_METADATA[category];
};

const CategoriesLayout = ({ children, params }: Props) => {
	return (
		<div>
			<div className="bg-zinc-900 pt-[100px]">
				<CategoryHeader category={params.category} />
			</div>
			<Container className="my-16 flex flex-col gap-32 md:my-32 lg:my-40 lg:gap-40">
				{children}
				<CategoryCardList className="mt-10" />
				<About />
			</Container>
		</div>
	);
};

export default CategoriesLayout;
