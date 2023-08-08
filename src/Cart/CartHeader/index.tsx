"use client";

import { useTransition } from "react";

import { clearCart } from "@/Cart/actions";

type Props = {
	itemsCount: number;
};

export const CartHeader = ({ itemsCount }: Props) => {
	const [, startTransition] = useTransition();

	return (
		<div className="flex justify-between">
			<p className="text-lg font-bold uppercase">Cart ({itemsCount})</p>
			<button
				className="text-gray-500 underline transition-colors hover:text-primary-main"
				onClick={() => startTransition(async () => await clearCart())}
			>
				Remove all
			</button>
		</div>
	);
};
