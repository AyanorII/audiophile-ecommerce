import { ProductType } from "@/Products/types";

export interface CartItem {
	product: ProductType;
	quantity: number;
}

export interface Cart {
	items: (CartItem & { subTotal: number })[];
	total: number;
}

export interface MinifiedCart extends Omit<Cart, "items"> {
	items: {
		product: ProductType["id"];
		quantity: number;
		subTotal: number;
	}[];
}
