"use client";

import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { BASE_CLASS_NAME } from "./constants";

import { getButtonClassName } from "./helpers";
import {
	CommonProps,
	HTMLButtonSpecificProps,
	LinkSpecificProps,
	SpecificProps,
} from "./types";

type Props = CommonProps & SpecificProps;

export const Button = ({
	as,
	children,
	variant = "contained",
	...props
}: Props) => {
	const variantClassName = getButtonClassName(variant);

	const className = twMerge([
		BASE_CLASS_NAME,
		variantClassName,
		props.className,
		props.disabled && "bg-gray-300 cursor-not-allowed hover:bg-gray-300",
	]);

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (props.disabled) {
			e.preventDefault();
		}
	};

	if (as === "link") {
		return (
			<Link
				{...(props as LinkSpecificProps)}
				className={className}
				onClick={handleLinkClick}
			>
				{children}
			</Link>
		);
	}

	return (
		<button {...(props as HTMLButtonSpecificProps)} className={className}>
			{children}
		</button>
	);
};
