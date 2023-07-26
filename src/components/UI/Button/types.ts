import { LinkProps } from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "contained" | "outlined" | "text" | "dark";

export type CommonProps = {
	variant?: ButtonVariant;
	children: ReactNode;
	disabled?: boolean;
};

export type LinkSpecificProps = LinkProps & { as: "link"; className?: string };
export type HTMLButtonSpecificProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		as: "button";
	};

export type SpecificProps = LinkSpecificProps | HTMLButtonSpecificProps;
