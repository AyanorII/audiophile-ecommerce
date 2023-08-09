import { CartItemsList } from "@/Cart";
import { calculateGrandTotal, calculateVAT } from "@/Checkout/helpers";
import { Button, Card } from "@/components";
import { getFormattedPrice } from "@/lib/helpers";
import { RootState } from "@/lib/redux/store";

import { SHIPPING_FEE } from "@/lib/constants";

type Props = { cart: RootState["cart"] };

export const CheckoutSummary = ({ cart }: Props) => {
	const { items, total } = cart;

	const vatFee = calculateVAT(total);
	const grandTotal = calculateGrandTotal(total);

	return (
		<Card className="flex flex-col gap-8 bg-white p-6 md:p-8 lg:px-12 lg:py-14">
			<h2 className="text-lg font-bold uppercase tracking-wider">Summary</h2>
			<CartItemsList items={items} CartItemProps={{ showQuantity: true }} />
			{items.length > 0 && (
				<div className="flex flex-col gap-2 uppercase md:text-lg">
					<div className="flex justify-between">
						<p className="font-thin text-gray-500">Total</p>
						<p className="text-right font-bold">{getFormattedPrice(total)}</p>
					</div>
					<div className="flex justify-between">
						<p className="font-thin text-gray-500">Shipping</p>
						<p className="text-right font-bold">
							{getFormattedPrice(SHIPPING_FEE)}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="font-thin text-gray-300">VAT (included)</p>
						<p className="text-right font-bold">{getFormattedPrice(vatFee)}</p>
					</div>
					<div className="mt-4 flex justify-between">
						<p className="font-thin text-gray-500">Grand Total</p>
						<p className="text-right font-bold text-primary-main">
							{getFormattedPrice(grandTotal)}
						</p>
					</div>
				</div>
			)}
			<Button as="button" type="submit" disabled={items.length === 0}>
				Continue & Pay
			</Button>
		</Card>
	);
};
