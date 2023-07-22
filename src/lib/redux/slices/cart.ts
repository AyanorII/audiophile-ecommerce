import { ProductType } from "@/Products/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
	product: ProductType;
	quantity: number;
	subTotal: number;
};

type CartState = {
	items: CartItem[];
	total: number;
};

const initialState = {
	items: [],
	total: 0,
} as CartState;

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		reset: () => initialState,
		addItem: (
			state,
			{ payload }: PayloadAction<Omit<CartItem, "subtotal">>
		) => {
			const product = state.items.find(
				({ product: item }) => item.id === payload.product.id
			);

			if (product) {
				product.quantity += payload.quantity;
				product.subTotal = product.quantity * product.product.price;
			} else {
				state.items.push({
					product: payload.product,
					quantity: payload.quantity,
					subTotal: payload.product.price * payload.quantity,
				});
			}
		},
		removeItem: (state, { payload }: PayloadAction<ProductType>) => {
			state.items.filter(({ product }) => product.id !== payload.id);
		},
	},
});

export const { addItem, removeItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
