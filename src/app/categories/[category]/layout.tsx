import { Metadata } from "next";

import { CategoryCardList } from "@/Category/components";
import { CategoryType } from "@/Category/types";
import { About, PageContainer } from "@/components";

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

const CategoriesLayout = ({ children }: Props) => {
	return (
		<div>
			{children}
			<PageContainer>
				<CategoryCardList className="mt-10" />
				<About />
			</PageContainer>
		</div>
	);
};

export default CategoriesLayout;
