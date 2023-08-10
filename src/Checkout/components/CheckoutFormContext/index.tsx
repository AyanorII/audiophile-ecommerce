"use client";

import { FormProvider, useForm } from "react-hook-form";

import { checkoutSchema } from "@/Checkout/schemas";
import { PaymentMethod } from "@/Checkout/types";
import { Overlay } from "@/components";
import { useOpenable } from "@/lib/hooks";
import { RootState } from "@/lib/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";

import { CheckoutCompleteModal } from "../CheckoutCompleteModal";

type Props = {
	children: React.ReactNode;
	cart: RootState["cart"];
};

export const CheckoutFormContext = ({ children, cart }: Props) => {
	const { isOpen, handleOpen, handleClose } = useOpenable();

	const methods = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			streetAddress: "",
			city: "",
			country: "",
			zipCode: "",
			paymentMethod: PaymentMethod.CashOnDelivery,
		},
		resolver: zodResolver(checkoutSchema),
	});

	const { handleSubmit } = methods;

	const showCheckoutCompleteModal = handleSubmit(() => {
		handleOpen();
	});

	return (
		<>
			<Overlay isOpen={isOpen} onClickAway={() => {}} position="fixed" />
			<CheckoutCompleteModal
				isOpen={isOpen}
				cart={cart}
				onClose={handleClose}
			/>
			<FormProvider {...methods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={showCheckoutCompleteModal}>{children}</form>
			</FormProvider>
		</>
	);
};
