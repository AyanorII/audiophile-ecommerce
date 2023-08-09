import { RootState } from "@/lib/redux/store";

import { CartItem, CartItemProps } from "../CartItem";

type Props = {
	items: RootState["cart"]["items"];
	CartItemProps?: Partial<CartItemProps>;
};
export const CartItemsList = ({ items, CartItemProps }: Props) => {
	return (
		<div className="flex flex-col gap-5">
			{items.length === 0 && <p className="text-center text-lg">Empty cart</p>}
			{items.map((item) => (
				<CartItem key={item.product.id} {...CartItemProps} item={item} />
			))}
		</div>
	);
};
