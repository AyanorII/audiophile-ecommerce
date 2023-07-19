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
		<div>
			<div className="bg-zinc-900 pt-[100px]">
				<CategoryHeader category={params.category} />
			</div>
			<div className="my-16 md:my-32 lg:my-40">{children}</div>
		</div>
	);
};

export default CategoriesLayout;
