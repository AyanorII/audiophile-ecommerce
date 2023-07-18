import { twMerge } from "tailwind-merge";

import { Container, Logo } from "../UI";
import { LinkList } from "../UI/Navbar/LinkList";
import { CopyrightDisclaimer } from "./CopyrightDisclaimer";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => {
	const pseudoElementClassName = `before:absolute before:left-1/2 before:top-0 before:h-1 before:w-[100px]
    before:-translate-x-1/2 before:bg-primary-main before:content-[''] md:before:left-0 md:before:translate-x-0`;

	return (
		<footer className="bg-zinc-900">
			<Container>
				<div
					className={twMerge([
						"relative grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start md:text-left gap-12 pb-8 pt-14 text-center",
						pseudoElementClassName,
					])}
				>
					<Logo className="col-span-full lg:col-start-1 lg:col-end-2" />
					<LinkList
						linkItemProps={{ className: "text-white" }}
						className="col-span-full lg:col-start-2 lg:col-end-3 lg:justify-self-end"
					/>
					<p className="col-span-full leading-relaxed text-gray-400 md:mb-12 lg:col-start-1 lg:col-end-2">
						Audiophile is an all in one stop to fulfill your audio needs.
						We&apos;re a small team of music lovers and sound specialists who
						are devoted to helping you get the most out of personal audio. Come
						and visit our demo facility - we&apos;re open 7 days a week.
					</p>
					<CopyrightDisclaimer className="col-span-full md:col-span-1 lg:col-start-1 lg:col-end-2" />
					<SocialMediaLinks className="col-span-full md:col-start-2 md:col-end-3 md:justify-self-end" />
				</div>
			</Container>
		</footer>
	);
};
