"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { CartItem } from "@/Cart";
import { clearCart } from "@/Cart/actions";
import { Button, Card } from "@/components";
import { getFormattedPrice } from "@/lib/helpers";
import { RootState } from "@/lib/redux/store";
import { twMerge } from "tailwind-merge";

type Props = {
	isOpen: boolean;
	cart: RootState["cart"];
	onClose: () => void;
};

export const CheckoutCompleteModal = ({ isOpen, cart, onClose }: Props) => {
	const [, startTransition] = useTransition();
	const router = useRouter();

	const { items, total } = cart;

	const handleClick = async () => {
		await clearCart();
		onClose(); // Necessary to remove overflow: hidden from the document. See Overlay.tsx;
		router.push("/");

		// For some reason, the cart icon doesn't update when we navigate back to the home page.
		// That's why we need to refresh the page. There might be a better way to solve this issue.
		router.refresh();
	};

	return (
		<Card
			className={twMerge([
				`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 md:p-12
        z-50 bg-white min-w-[327px] md:min-w-[540px]`,
				!isOpen && "hidden",
			])}
		>
			<Image
				src="/images/checkout/icon-order-confirmation.svg"
				width={64}
				height={64}
				alt="Order confirmation"
				className="mb-8"
			/>
			<h2 className="mb-4 whitespace-pre-wrap text-2xl font-bold uppercase md:mb-6 md:text-3xl">
				{`Thank you \nfor your order`}
			</h2>
			<p className="mb-6 text-gray-400 md:mb-8">
				You will receive an email confirmation shortly.
			</p>
			<Card className="mb-6 flex min-h-[140px] flex-col md:mb-12 lg:flex-row">
				<div className="flex grow flex-col justify-center bg-[#f0f0f0] p-6 pl-2">
					{items.length > 0 && <CartItem item={items[0]} showQuantity />}
					{items.length > 1 && (
						<>
							<div className="my-3 h-[0.75px] w-full bg-gray-300" />
							<p className="text-center text-sm font-bold text-gray-400">
								and {items.length - 1} other item(s)
							</p>
						</>
					)}
				</div>
				<div className="flex grow flex-col justify-center bg-gray-900 px-6 py-5">
					<p className="mb-2 font-thin uppercase tracking-wider text-gray-400">
						Grand Total
					</p>
					<p className="text-lg font-bold tracking-wider text-white">
						{getFormattedPrice(total)}
					</p>
				</div>
			</Card>
			<Button
				as="button"
				// href="/"
				onClick={() => startTransition(() => handleClick())}
				className="w-full"
			>
				Back to home
			</Button>
		</Card>
	);
};
