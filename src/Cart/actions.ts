"use server";

import { revalidatePath } from "next/cache";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

import { ProductType } from "@/Products/types";

import { PRODUCTS } from "@/lib/constants";

import { Cart, MinifiedCart } from "./interfaces";

const EMPTY_CART: MinifiedCart = {
	items: [],
	total: 0,
};

const COOKIE_NAME = "audiophile-cart";
const COOKIE_OPTIONS: Omit<ResponseCookie, "name" | "value"> = {
	sameSite: "strict",
	httpOnly: true,
	maxAge: 60 * 60 * 24 * 7,
	path: "/",
};

const getCartFromCookie = (): MinifiedCart => {
	const cookieValue = cookies().get(COOKIE_NAME)?.value;
	const cart = cookieValue
		? (JSON.parse(cookieValue) as MinifiedCart)
		: EMPTY_CART;

	return cart;
};

const revalidateAllPaths = () => {
	revalidatePath("*");
};

const saveCartToCookie = (cart: MinifiedCart) => {
	cookies().set(COOKIE_NAME, JSON.stringify(cart), COOKIE_OPTIONS);
	revalidateAllPaths();
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getCart = async (): Promise<Cart> => {
	const cart = getCartFromCookie();

	const items: Cart["items"] = cart.items.map((item) => {
		const product = PRODUCTS.find((product) => product.id === item.product);
		if (!product)
			throw new Error(
				`Product with id ${item.product} not found in constants.`
			);
		return { ...item, product };
	});

	return { total: cart.total, items };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const clearCart = async () => {
	cookies().set(COOKIE_NAME, JSON.stringify(EMPTY_CART), COOKIE_OPTIONS);
	revalidateAllPaths();
};

export const addItemToCart = async (
	product: ProductType,
	quantity: number = 1
	// eslint-disable-next-line @typescript-eslint/require-await
) => {
	const cart = getCartFromCookie();
	const existingItem = cart.items.find((item) => item.product === product.id);

	if (existingItem) {
		existingItem.quantity += quantity;
		existingItem.subTotal = existingItem.quantity * product.price;
	} else {
		cart.items.push({
			product: product.id,
			quantity,
			subTotal: product.price * quantity,
		});
	}

	cart.total += product.price * quantity;
	saveCartToCookie(cart);
};

export const removeItemFromCart = async (product: ProductType) => {
	const cart = getCartFromCookie();
	const itemToRemove = cart.items.find((item) => item.product === product.id);

	if (!itemToRemove)
		throw new Error(`Product with id ${product.id} not found in cart.`);

	itemToRemove.quantity -= 1;
	itemToRemove.subTotal = itemToRemove.quantity * product.price;
	cart.total -= product.price;

	if (itemToRemove.quantity <= 0) {
		cart.items = cart.items.filter((item) => item.product !== product.id);
	}

	if (cart.items.length === 0) {
		await clearCart();
		revalidateAllPaths();
	}

	saveCartToCookie(cart);
};
