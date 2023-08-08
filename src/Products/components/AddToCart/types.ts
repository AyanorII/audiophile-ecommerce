import { RootState } from "@/lib/redux/store";
import { ProductType } from "@/Products/types";

export type MinifiedCart = Omit<RootState["cart"], "items"> & {
	items: {
		product: ProductType["id"];
		quantity: number;
		subTotal: number;
	}[];
};
