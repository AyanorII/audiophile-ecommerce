"use client";

import Link from "next/link";
import { useEffect } from "react";

import { CartButton } from "@/Cart";
import { CategoryCardList } from "@/Category/components";
import { useEventListener, useOpenable, useScrollPosition } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";

import { DESKTOP_BREAKPOINT, SCROLL_THRESHOLD } from "./constants";

import { Container } from "../Container";
import { Logo } from "../Logo";
import { Overlay } from "../Overlay";
import { LinkList } from "./LinkList";
import { NavMenuButton } from "./NavMenuButton";

export const Navbar = () => {
	const { isOpen, handleClose, handleToggle } = useOpenable();
	const { isScrollingDown } = useScrollPosition(SCROLL_THRESHOLD);

	useEventListener("resize", () => {
		window.innerWidth > DESKTOP_BREAKPOINT && handleClose();
	});

	useEffect(() => {
		// Prevent scrolling when the menu is open.
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	const categoryCardListBaseClassName =
		"absolute overflow-hidden w-full bg-white px-6 transition-all duration-500";

	return (
		<>
			<Overlay onClickAway={handleClose} isOpen={isOpen} position="fixed" />
			<nav
				className={twMerge([
					"fixed inset-x-0 z-[9999] top-0 border-gray-200 transition-all duration-300",
					isScrollingDown ? "opacity-0" : "opacity-100",
				])}
			>
				<div className="relative z-[9999] bg-zinc-900">
					<Container>
						<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-8">
							<NavMenuButton className="p-2 lg:hidden" onClick={handleToggle} />
							<div className="flex items-center md:ml-6 md:grow lg:ml-0 lg:grow-0">
								<Link href="/" className="inline-block">
									<Logo />
								</Link>
							</div>
							<CartButton className="order-2 p-2" />
							<LinkList
								linkItemProps={{ className: "text-white" }}
								className="hidden w-full items-center justify-between md:w-auto lg:flex"
							/>
						</div>
					</Container>
				</div>
				<CategoryCardList
					className={twMerge([
						categoryCardListBaseClassName,
						``,
						isOpen
							? `max-h-screen pt-16 pb-8 md:pt-32 md:pb-16 z-[9999]`
							: "max-h-0",
					])}
				/>
			</nav>
		</>
	);
};
