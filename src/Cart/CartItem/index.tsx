"use client";

import Image from "next/image";
import { useTransition } from "react";

import { addItemToCart, removeItemFromCart } from "@/Cart/actions";
import { Card, CounterControlButton } from "@/components";
import { getFormattedPrice } from "@/lib/helpers";
import { RootState } from "@/lib/redux/store";

type Props = {
	item: RootState["cart"]["items"][number];
};

export const CartItem = ({ item }: Props) => {
	const [, startTransition] = useTransition();

	const { product, quantity } = item;
	const { id, name, price, shortName } = product;

	const handleAddItem = async () => {
		await addItemToCart(product, 1);
	};

	const handleRemoveItem = async () => {
		await removeItemFromCart(product);
	};

	return (
		<div key={id} className="flex items-center gap-3">
			<Card className="">
				<Image
					src={product.image.mobile}
					alt={name}
					width={54}
					height={54}
					className="w-full max-w-[54px]"
				/>
			</Card>
			<div className="flex flex-col font-bold tracking-wider">
				<p className="text-sm uppercase">{shortName}</p>
				<span className="text-gray-400">{getFormattedPrice(price)}</span>
			</div>
			<CounterControlButton
				value={quantity}
				onDecrement={() => startTransition(() => handleRemoveItem())}
				onIncrement={() => startTransition(() => handleAddItem())}
				buttonsClassName="p-3 md:p-4 md:py-[7px] lg:px-5"
				className="ml-auto"
			/>
		</div>
	);
};
