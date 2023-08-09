"use client";

import { FormProvider, useForm } from "react-hook-form";

import { CheckoutSchema, checkoutSchema } from "@/Checkout/schemas";
import { PaymentMethod } from "@/Checkout/types";
import { zodResolver } from "@hookform/resolvers/zod";

export const CheckoutFormContext = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const defaultValues: CheckoutSchema = {
		name: "",
		email: "",
		phone: "",
		streetAddress: "",
		city: "",
		country: "",
		zipCode: "",
		paymentMethod: PaymentMethod.CashOnDelivery,
	};

	const methods = useForm({
		defaultValues,
		resolver: zodResolver(checkoutSchema),
	});

	const { handleSubmit } = methods;

	const onSubmit = handleSubmit((data) => {
		// TODO: Handle form submission
		console.log(data);
	});

	return (
		<FormProvider {...methods}>
			{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
			<form onSubmit={onSubmit}>{children}</form>
		</FormProvider>
	);
};
