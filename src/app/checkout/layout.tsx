import { Metadata } from "next";

import { Container, GoBack } from "@/components";

type Props = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: "Checkout | Audiophile",
	description:
		"Finalize your purchase of top-tier audio equipment at Audiophile NYC. Easy, secure, and swift checkout process. Step closer to elevating your sound experience today!",
};

const CheckoutLayout = ({ children }: Props) => {
	return (
		<div className="mt-[100px]">
			<Container className="mb-16 mt-8 md:mb-32 md:mt-24 lg:mb-40 lg:mt-32">
				<GoBack className="my-6 self-start pl-0 md:mb-14" fallbackPath="/" />
				{children}
			</Container>
		</div>
	);
};

export default CheckoutLayout;
