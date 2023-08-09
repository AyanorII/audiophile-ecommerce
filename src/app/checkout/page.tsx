import { getCart } from "@/Cart/actions";
import { CheckoutForm } from "@/Checkout/components";
import { CheckoutFormContext } from "@/Checkout/components/CheckoutFormContext";
import { CheckoutSummary } from "@/Checkout/components/CheckoutSummary";
import { Card } from "@/components";

const CheckoutPage = async () => {
	const cart = await getCart();

	return (
		<CheckoutFormContext>
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
