"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Overlay } from "@/components";
import { Badge } from "@/components/UI/Badge";
import { useOpenable } from "@/lib/hooks";
import { useAppSelector } from "@/lib/redux/hooks";
import { twMerge } from "tailwind-merge";

import { CartMenu } from "../CartMenu";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CartButton = ({ className, ...props }: Props) => {
	const [itemsCount, setItemsCount] = useState(0);

	const { isOpen, handleOpen, handleClose } = useOpenable();

	const { items } = useAppSelector((state) => state.cart);

	useEffect(() => {
		// Prevent scrolling when the menu is open.
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	useEffect(() => {
		setItemsCount(items.length);
	}, [items, itemsCount]);

	return (
		<>
			<Overlay
				isOpen={isOpen}
				onClickAway={handleClose}
				position={isOpen ? "fixed" : "absolute"}
			/>
			<div className="order-2 sm:relative">
				<button
					className={twMerge(["relative", className])}
					onClick={handleOpen}
					{...props}
				>
					<Badge
						count={itemsCount}
						className={twMerge([
							"absolute -right-1 -top-1 transition-all",
							itemsCount > 0 ? "opacity-100" : "opacity-0",
						])}
					/>
					<Image
						src="/images/shared/desktop/icon-cart.svg"
						alt="cart button"
						width={23}
						height={20}
					/>
				</button>
				<CartMenu isOpen={isOpen} />
			</div>
		</>
	);
};
