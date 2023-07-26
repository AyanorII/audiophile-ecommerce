import { RootState } from "@/lib/redux/store";

import { CartItem } from "../CartItem";

type Props = {
	items: RootState["cart"]["items"];
};
export const CartItemsList = ({ items }: Props) => {
	return (
		<div className="flex flex-col gap-5">
			{items.length === 0 && <p className="text-center text-lg">Empty cart</p>}
			{items.map((item) => (
				<CartItem key={item.product.id} item={item} />
			))}
		</div>
	);
};
