import { CategoryType } from "@/Category/types";

type Props = {
	category: CategoryType;
};

export const CategoryHeader = ({ category }: Props) => {
	return (
		<header className="bg-zinc-900 py-8 md:py-24">
			<h1 className="text-center text-3xl font-bold uppercase text-white sm:text-4xl">
				{category}
			</h1>
		</header>
	);
};
