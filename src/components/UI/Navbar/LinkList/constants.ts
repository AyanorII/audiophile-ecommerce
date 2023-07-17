import { CategoryType } from "@/Category/types";
import { capitalize } from "@/lib/helpers/capitalize";

import { NavLink } from "./types";

const CATEGORIES_LINKS: NavLink[] = Object.values(CategoryType).map(
	(category) => ({
		label: CategoryType[capitalize(category) as keyof typeof CategoryType],
		path: `/${category.toLowerCase()}`,
	})
);

export const NAV_LINKS: NavLink[] = [
	{
		label: "Home",
		path: "/",
	},
	...CATEGORIES_LINKS,
];
