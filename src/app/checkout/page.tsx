import { getCart } from "@/Cart/actions";
import {
	CheckoutForm,
	CheckoutFormContext,
	CheckoutSummary,
} from "@/Checkout/components";
import { Card } from "@/components";

const CheckoutPage = async () => {
	const cart = await getCart();

	return (
		<CheckoutFormContext cart={cart}>
			<div className="grid gap-8 lg:grid-cols-[1fr,_0.60fr]">
				<Card className="bg-white p-6 md:p-8 lg:px-12 lg:py-14">
					<h1 className="mb-8 text-3xl font-bold uppercase tracking-wider md:mb-10">
						Checkout
					</h1>
					<CheckoutForm />
				</Card>
				<Card className="lg:grow">
					<CheckoutSummary cart={cart} />
				</Card>
			</div>
		</CheckoutFormContext>
	);
};

export default CheckoutPage;
