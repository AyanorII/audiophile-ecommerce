"use client";

import Image from "next/image";

import { Card, CounterControlButton } from "@/components";
import { getFormattedPrice } from "@/lib/helpers";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addItem, removeItem } from "@/lib/redux/slices/cart";
import { RootState } from "@/lib/redux/store";
import { ProductType } from "@/Products/types";

type Props = {
	item: RootState["cart"]["items"][number];
};

export const CartItem = ({ item }: Props) => {
	const dispatch = useAppDispatch();

	const { product, quantity } = item;
	const { id, name, price, shortName } = product;

	const handleAddItem = (product: ProductType) => {
		dispatch(addItem({ product, quantity: 1 }));
	};

	const handleRemoveItem = (product: ProductType) => {
		dispatch(removeItem(product));
	};

	return (
		<div key={id} className="flex items-center gap-5">
			<Card className="">
				<Image src={product.image.mobile} alt={name} width={64} height={64} />
			</Card>
			<div className="flex flex-col font-bold tracking-wider">
				<p className="uppercase">{shortName}</p>
				<span className="text-gray-400">{getFormattedPrice(price)}</span>
			</div>
			<CounterControlButton
				value={quantity}
				onDecrement={() => handleRemoveItem(product)}
				onIncrement={() => handleAddItem(product)}
				buttonsClassName="p-3 md:p-4 md:py-[7px] lg:px-5"
				className="ml-auto"
			/>
		</div>
	);
};
