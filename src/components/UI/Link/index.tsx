import NextLink, { LinkProps } from "next/link";

import { twMerge } from "tailwind-merge";

type Props = LinkProps & {
	className?: string;
	children: React.ReactNode;
};

export const Link = ({ className, children, ...props }: Props) => {
	const BASE_CLASS_NAME =
		"font-bold uppercase hover:text-primary-main tracking-widest transition-all ease-in-out";

	return (
		<NextLink {...props} className={twMerge([BASE_CLASS_NAME, className])}>
			{children}
		</NextLink>
	);
};
