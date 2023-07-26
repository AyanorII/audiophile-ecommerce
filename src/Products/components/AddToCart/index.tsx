"use client";

import { useState } from "react";

import { Button, CounterControlButton } from "@/components";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addItem } from "@/lib/redux/slices/cart";
import { ProductType } from "@/Products/types";

type Props = {
	product: ProductType;
};

export const AddToCart = ({ product }: Props) => {
	const [quantity, setQuantity] = useState(0);

	const dispatch = useAppDispatch();

	const handleAddToCart = () => {
		if (quantity === 0) return;

		dispatch(
			addItem({
				product,
				quantity,
			})
		);
	};

	return (
		<div className="flex gap-4">
			<CounterControlButton
				value={quantity}
				onIncrement={setQuantity}
				onDecrement={setQuantity}
			/>
			<Button as="button" onClick={handleAddToCart}>
				Add to cart
			</Button>
		</div>
	);
};
