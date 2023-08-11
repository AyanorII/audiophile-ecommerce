import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "./globals.css";

import { getCart } from "@/Cart/actions";
import { Footer } from "@/components";
import { Navbar } from "@/components/UI/Navbar";
import { Providers } from "@/lib/redux/providers";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Audiophile",
	description:
		"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cart = await getCart();

	return (
		<html lang="en" className="h-full">
			<body
				className={twMerge([
					manrope.className,
					"overflow-x-hidden flex flex-col h-full bg-[#fafafa]",
				])}
			>
				<Providers>
					<Navbar cart={cart} />
					<div className="grow">{children}</div>
					<Footer />
					<ToastContainer
						position="bottom-right"
						autoClose={1500}
						limit={2}
						hideProgressBar={false}
						newestOnTop
						transition={Slide}
						closeOnClick
						rtl={false}
						draggable
						theme="colored"
					/>
				</Providers>
			</body>
		</html>
	);
}
