"use client";

import { useState, useTransition } from "react";
import { toast } from "react-toastify";

import { Button, CounterControlButton } from "@/components";
import { ProductType } from "@/Products/types";

import { addItemToCart } from "../../../Cart/actions";

type Props = {
	product: ProductType;
};

export const AddToCart = ({ product }: Props) => {
	const [quantity, setQuantity] = useState(0);
	const [, startTransition] = useTransition();

	const handleAddToCart = async () => {
		if (quantity === 0) return;

		try {
			await addItemToCart(product, quantity);
			toast.success(`${product.shortName} added to cart`);
		} catch (error) {
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="flex gap-4">
			<CounterControlButton
				value={quantity}
				onIncrement={setQuantity}
				onDecrement={setQuantity}
			/>
			<Button
				as="button"
				onClick={() => startTransition(() => handleAddToCart())}
			>
				Add to cart
			</Button>
		</div>
	);
};
