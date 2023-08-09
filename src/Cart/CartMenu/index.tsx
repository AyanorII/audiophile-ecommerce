"use client";

import { Button, Card } from "@/components";
import { getFormattedPrice } from "@/lib/helpers";
import { RootState } from "@/lib/redux/store";
import { twMerge } from "tailwind-merge";

import { CartHeader } from "../CartHeader";
import { CartItemsList } from "../CartItemsList";

type Props = {
	isOpen: boolean;
	cart: RootState["cart"];
	onClose: () => void;
};

export const CartMenu = ({ isOpen, cart, onClose }: Props) => {
	const { items, total } = cart;

	return (
		<Card
			className={twMerge([
				`absolute sm:right-3 left-1/2 -translate-x-1/2 -translate-y-1/2 top-[50vh]
         sm:translate-x-[unset] sm:translate-y-[unset] sm:left-[unset] sm:top-10 z-50
         bg-white transition-all duration-300 overflow-hidden w-[90vw]
         sm:max-w-[377px] lg:max-w-[420px] gap-10 flex flex-col sm:origin-top-right`,
				isOpen ? "max-h-screen py-8 px-7 sm:p-8 scale-1" : "max-h-0 scale-0",
			])}
		>
			<CartHeader itemsCount={items.length} />
			<CartItemsList items={items} />
			<div className="flex justify-between uppercase">
				<span>TOTAL</span>
				<span className="font-bold">{getFormattedPrice(total)}</span>
			</div>
			<div
				onClick={() => {
					items.length > 0 && onClose();
				}}
			>
				<Button
					as="link"
					href="/checkout"
					disabled={items.length === 0}
					className="w-full"
				>
					Checkout
				</Button>
			</div>
		</Card>
	);
};
