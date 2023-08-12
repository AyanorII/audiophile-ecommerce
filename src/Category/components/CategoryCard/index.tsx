import Image from "next/image";
import Link from "next/link";

import { Category } from "@/Category/types";
import { Button, Card } from "@/components";
import { twJoin } from "tailwind-merge";

type Props = Category;

export const CategoryCard = ({ type, image, href }: Props) => {
	return (
		<Link href={href} className="w-full">
			<Card
				className={twJoin([
					"relative flex cursor-pointer flex-col items-center gap-3",
					"bg-[#e7e7e7] px-6 pt-20 md:pt-28 overflow-visible",
				])}
			>
				<Image
					src={image}
					alt={type}
					width={200}
					height={200}
					className="absolute -top-12 h-full max-w-[150px] object-contain md:-top-16 md:max-w-[200px]"
				/>
				<div className="relative">
					<span className="block text-center font-bold uppercase tracking-widest">
						{type}
					</span>
					<Button
						as="button"
						variant="text"
						className="flex items-center gap-3"
					>
						<span className="font-semibold text-[#636364]">SHOP</span>
						<Image
							src="/images/shared/desktop/icon-arrow-right.svg"
							alt="arrow icon"
							width={8}
							height={8}
						/>
					</Button>
				</div>
			</Card>
		</Link>
	);
};
