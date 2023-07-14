import { ImageProps } from "next/image";
import { LinkProps } from "next/link";

export enum CategoryType {
	Headphones = "headphones",
	Speakers = "speakers",
	Earphones = "earphones",
}

export type Category = {
	type: CategoryType;
	image: ImageProps["src"];
	href: LinkProps["href"];
};
