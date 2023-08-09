import { SHIPPING_FEE, VAT_FEE_PERCENTAGE } from "@/lib/constants";

import { PaymentMethod } from "./types";

/**
 * Calculates the VAT fee (value-added tax, known in some countries as a goods
 * and services tax (GST)) based on the total.
 * @param total number
 * @returns number
 */
export const calculateVAT = (total: number) => {
	return total * VAT_FEE_PERCENTAGE;
};

/**
 * Calculates the grand total based on the total and the shipping fee.
 * @param total number
 * @returns number
 */
export const calculateGrandTotal = (total: number) => {
	return total + SHIPPING_FEE;
};

export const getPaymentMethodLabel = (paymentMethod: PaymentMethod) => {
	const labelMap: Record<PaymentMethod, string> = {
		[PaymentMethod.EMoney]: "e-Money",
		[PaymentMethod.CashOnDelivery]: "Cash on Delivery",
	};

	return labelMap[paymentMethod];
};
