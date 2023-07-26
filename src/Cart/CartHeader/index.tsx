"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import { resetCart } from "@/lib/redux/slices/cart";

type Props = {
	itemsCount: number;
};

export const CartHeader = ({ itemsCount }: Props) => {
	const dispatch = useAppDispatch();

	const handleRemoveAll = () => {
		dispatch(resetCart());
	};

	return (
		<div className="flex justify-between">
			<p className="text-lg font-bold uppercase">Cart ({itemsCount})</p>
			<button
				className="text-gray-500 underline transition-colors hover:text-primary-main"
				onClick={handleRemoveAll}
			>
				Remove all
			</button>
		</div>
	);
};
