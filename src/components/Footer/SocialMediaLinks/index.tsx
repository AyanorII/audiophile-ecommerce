import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { SOCIAL_MEDIA_LINKS } from "./constants";

type Props = React.HTMLAttributes<HTMLUListElement>;

export const SocialMediaLinks = ({ className, ...props }: Props) => {
	return (
		<ul {...props} className={twMerge(["flex gap-3", className])}>
			{SOCIAL_MEDIA_LINKS.map(({ url, icon, name }) => (
				<Link href={url} key={name} className="group">
					{icon}
				</Link>
			))}
		</ul>
	);
};
