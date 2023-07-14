import { twMerge } from "tailwind-merge";

import { CATEGORIES } from "@/Category/constants";

import { CategoryCard } from "../CategoryCard";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const CategoryCardList = ({ className, ...props }: Props) => {
	return (
		<div
			className={twMerge([
				"flex w-full flex-col gap-14 md:flex-row md:gap-3",
				className,
			])}
			{...props}
		>
			{CATEGORIES.map((category) => {
				return <CategoryCard key={category.type} {...category} />;
			})}
		</div>
	);
};
