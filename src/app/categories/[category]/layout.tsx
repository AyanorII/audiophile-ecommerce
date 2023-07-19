import { CategoryHeader } from "@/Category/components";
import { CategoryType } from "@/Category/types";

type Props = {
	params: {
		category: CategoryType;
	};
	children: React.ReactNode;
};

const CategoriesLayout = ({ children, params }: Props) => {
	return (
		<div className="bg-zinc-900 pt-[100px]">
			<CategoryHeader category={params.category} />
			{children}
		</div>
	);
};

export default CategoriesLayout;
