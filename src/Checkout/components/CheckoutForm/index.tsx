"use client";

import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { getPaymentMethodLabel } from "@/Checkout/helpers";
import { CheckoutSchema } from "@/Checkout/schemas";
import { Label, RadioGroup } from "@/components";
import TextField from "@/components/Form/TextField";

import { PaymentMethod } from "../../types";

export const CheckoutForm = () => {
	const { control, watch } = useFormContext<CheckoutSchema>();

	const paymentMethod = watch("paymentMethod");

	return (
		<div className="flex flex-col gap-8 md:gap-14">
			<div id="billing-details">
				<FormSectionHeading>Billing Details</FormSectionHeading>
				<div className="grid gap-6 md:grid-cols-2 md:gap-x-4">
					<TextField
						control={control}
						name="name"
						label="Name"
						required
						placeholder="John Doe"
					/>
					<TextField
						control={control}
						name="email"
						required
						label="Email Address"
						placeholder="john_doe@email.com"
					/>
					<TextField
						control={control}
						name="phone"
						required
						label="Phone Number"
						placeholder="+1 202-555-0136"
					/>
				</div>
			</div>
			<div id="shipping-info">
				<FormSectionHeading>Shipping Info</FormSectionHeading>
				<div className="grid gap-6 md:grid-cols-2 md:gap-x-4">
					<TextField
						control={control}
						name="streetAddress"
						required
						label="Street Address"
						placeholder="1137 Williams Avenue"
						containerClassName="col-span-full"
					/>
					<TextField
						control={control}
						name="zipCode"
						label="ZIP Code"
						required
						placeholder="10001"
						containerClassName="col-span-1"
					/>
					<TextField
						control={control}
						name="city"
						label="City"
						required
						placeholder="New York"
						containerClassName="col-span-1"
					/>
					<TextField
						control={control}
						name="country"
						label="Country"
						required
						placeholder="United States"
						containerClassName="col-span-1"
					/>
				</div>
			</div>
			<div id="payment-details">
				<FormSectionHeading>Payment Details</FormSectionHeading>
				<div className="grid gap-6 md:grid-cols-2 md:gap-x-4">
					<Label className="mt-2">Payment Method</Label>
					<RadioGroup
						control={control}
						name="paymentMethod"
						options={Object.values(PaymentMethod).map((method) => ({
							value: method,
							label: getPaymentMethodLabel(method),
						}))}
					/>
				</div>
				{paymentMethod === PaymentMethod.EMoney && (
					<div className="mt-8 flex flex-col gap-6 md:mt-6 md:flex-row">
						<TextField
							control={control}
							name="eMoney.number"
							type="number"
							label="e-Money Number"
							required
							placeholder="238521993"
							containerClassName="w-full md:w-1/2"
						/>
						<TextField
							control={control}
							name="eMoney.pin"
							type="number"
							required
							label="e-Money PIN"
							placeholder="6891"
							containerClassName="w-full md:w-1/2"
						/>
					</div>
				)}
				{paymentMethod === PaymentMethod.CashOnDelivery && (
					<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
						<Image
							src="/images/checkout/icon-cash-on-delivery.svg"
							width={48}
							height={48}
							alt="Cash on Delivery"
						/>
						<p className="tracking-wider text-gray-400">
							The ‘Cash on Delivery’ option enables you to pay in cash when our
							delivery courier arrives at your residence. Just make sure your
							address is correct so that your order will not be cancelled.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

const FormSectionHeading = ({ children }: { children: React.ReactNode }) => {
	return (
		<h2 className="mb-4 text-sm font-bold uppercase text-primary-main">
			{children}
		</h2>
	);
};
