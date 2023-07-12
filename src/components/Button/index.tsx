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
	]);

	if (as === "link") {
		return (
			<Link {...(props as LinkSpecificProps)} className={className}>
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
