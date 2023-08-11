"use client";

import Image from "next/image";

import { Overlay } from "@/components";
import { Badge } from "@/components/UI/Badge";
import { useOpenable } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";

import { CartMenu } from "../CartMenu";
import { Cart } from "../interfaces";

type Props = {
	cart: Cart;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CartButton = ({ className, cart, ...props }: Props) => {
	const { isOpen, handleOpen, handleClose } = useOpenable();

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
						count={cart.items.length}
						className={twMerge([
							"absolute -right-1 -top-1 transition-all",
							cart.items.length > 0 ? "opacity-100" : "opacity-0",
						])}
					/>
					<Image
						src="/images/shared/desktop/icon-cart.svg"
						alt="cart button"
						width={23}
						height={20}
					/>
				</button>
				<CartMenu cart={cart} isOpen={isOpen} onClose={handleClose} />
			</div>
		</>
	);
};
