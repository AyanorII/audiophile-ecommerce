import { Metadata } from "next";

import { Category, CategoryType } from "./types";

export const CATEGORIES: Category[] = [
	{
		type: CategoryType.Headphones,
		image: "/images/shared/desktop/image-category-thumbnail-headphones.png",
		href: "/categories/headphones",
	},
	{
		type: CategoryType.Speakers,
		image: "/images/shared/desktop/image-category-thumbnail-speakers.png",
		href: "/categories/speakers",
	},
	{
		type: CategoryType.Earphones,
		image: "/images/shared/desktop/image-category-thumbnail-earphones.png",
		href: "/categories/earphones",
	},
];

export const CATEGORIES_METADATA: Record<CategoryType, Metadata> = {
	[CategoryType.Headphones]: {
		title: "Headphones: Premium Sound & Unmatched Comfort | Audiophile",
		description:
			"Discover high-end headphones curated by Audiophile experts in NYC. Dive into a realm of immersive sound, premium design, and unparalleled comfort. Experience audio excellence today!",
	},
	[CategoryType.Speakers]: {
		title: "Speakers: Superior Audio & Elegant Design | Audiophile",
		description:
			"Elevate your sound experience with Audiophile's range of high-end speakers. Located in NYC, we offer speakers that blend superior audio quality with stunning aesthetics. Transform your auditory experience!",
	},
	[CategoryType.Earphones]: {
		title: "Earphones: Crisp Sound On-The-Go | Audiophile",
		description:
			"Explore a world of clear, powerful sound with Audiophile's premium earphones. Compact, stylish, and designed for the discerning listener in NYC. Dive into precision audio anytime, anywhere!",
	},
};
