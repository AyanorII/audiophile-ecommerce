"use client";

import { ProductType } from "@/Products/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
	product: ProductType;
	quantity: number;
};

export type CartState = {
	items: (CartItem & { subTotal: number })[];
	total: number;
};

const cart =
	typeof window !== "undefined"
		? window.localStorage.getItem("cart")
		: undefined;

const initialState = cart
	? (JSON.parse(cart) as CartState)
	: ({
			items: [],
			total: 0,
	  } as CartState);

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		resetCart: () => initialState,

		addItem: (state, { payload }: PayloadAction<CartItem>) => {
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

			state.total = state.items.reduce(
				(acc, { subTotal }) => acc + subTotal,
				0
			);

			if (typeof window !== "undefined") {
				window.localStorage.setItem("cart", JSON.stringify(state));
			}
		},

		removeItem: (state, { payload }: PayloadAction<ProductType>) => {
			const product = state.items.find(
				({ product: item }) => item.id === payload.id
			);

			if (product && product.quantity > 1) {
				product.quantity -= 1;
				product.subTotal = product.quantity * product.product.price;
			} else {
				state.items = state.items.filter(
					({ product: item }) => item.id !== payload.id
				);
			}

			state.total = state.items.reduce(
				(acc, { subTotal }) => acc + subTotal,
				0
			);

			if (typeof window !== "undefined") {
				window.localStorage.setItem("cart", JSON.stringify(state));
			}
		},
	},
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
