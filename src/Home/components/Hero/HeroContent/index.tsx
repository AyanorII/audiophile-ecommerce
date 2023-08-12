"use client";

import { Button, Container } from "@/components";
import { motion } from "framer-motion";

export const HeroContent = () => {
	return (
		<Container>
			<motion.div
				className="relative mx-auto max-w-[40ch] text-center text-white lg:mx-0 lg:items-start lg:text-left"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.75, ease: "easeInOut" }}
			>
				<div className="mb-6 uppercase">
					<span className="mb-4 block text-sm font-thin tracking-[10px] opacity-40">
						NEW PRODUCT
					</span>
					<h1 className="whitespace-pre-line text-4xl font-bold sm:text-5xl md:text-6xl">
						{`XX99 Mark II\n Headphones`}
					</h1>
				</div>
				<p className="mb-7 whitespace-pre-line text-sm leading-loose tracking-wide opacity-60 sm:mb-10 sm:text-base sm:leading-loose">
					{/* TODO: Use "text-wrap: balance" when available */}
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</p>
				<Button as="link" href="/products/xx99-mark-two-headphones">
					See product
				</Button>
			</motion.div>
		</Container>
	);
};
