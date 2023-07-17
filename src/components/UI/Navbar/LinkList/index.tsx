import { Link } from "@/components/UI/Link";
import { twMerge } from "tailwind-merge";

import { NAV_LINKS } from "./constants";

type Props = {
	linkItemProps?: Omit<React.ComponentProps<typeof Link>, "href" | "children">;
} & React.HTMLAttributes<HTMLUListElement>;

export const LinkList = ({ linkItemProps, className, ...props }: Props) => {
	return (
		<ul
			{...props}
			className={twMerge(["flex flex-col gap-5 md:flex-row", className])}
		>
			{NAV_LINKS.map(({ label, path }) => (
				<li key={path}>
					<Link href={path} {...linkItemProps}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};
