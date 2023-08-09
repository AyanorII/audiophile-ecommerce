import { z } from "zod";

import { PaymentMethod } from "../types";

const baseCheckoutSchema = z.object({
	name: z.string().min(1, { message: "Required" }).max(255),
	email: z.string().email().min(1, { message: "Required" }).max(255),
	phone: z.string().min(1, { message: "Required" }).max(255),
	streetAddress: z.string().min(1, { message: "Required" }).max(255),
	city: z.string().min(1, { message: "Required" }).max(255),
	country: z.string().min(1, { message: "Required" }).max(255),
	zipCode: z.string().min(1, { message: "Required" }).max(255),
	paymentMethod: z.nativeEnum(PaymentMethod),
});

const eMoneySchema = z
	.object({
		number: z.string().max(255),
		pin: z.string().max(4, { message: "e-Money PIN must be 4 digits" }),
	})
	.optional();

export const checkoutSchema = baseCheckoutSchema
	.augment({
		eMoney: z.union([z.undefined(), eMoneySchema]),
	})
	.refine(
		(data) => {
			if (data.paymentMethod === PaymentMethod.EMoney) {
				return Boolean(data.eMoney?.number) && Boolean(data.eMoney?.pin);
			}
			return true;
		},
		{ message: "Required when paymentMethod is EMoney" }
	);

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
