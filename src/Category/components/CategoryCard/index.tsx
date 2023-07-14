import Image from "next/image";
import Link from "next/link";

import { Category } from "@/Category/types";
import { Button } from "@/components";

type Props = Category;

export const CategoryCard = ({ type, image, href }: Props) => {
	return (
		<Link href={href} className="w-full">
			<div className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg bg-gray-100 px-6 pt-20 transition-all duration-300 hover:shadow-md">
				<Image
					src={image}
					alt={type}
					width={200}
					height={200}
					className="absolute -top-12 h-full max-w-[150px] object-contain"
				/>
				<div className="relative">
					<h3 className="text-center font-bold uppercase tracking-widest">
						{type}
					</h3>
					<Button
						as="button"
						variant="text"
						className="flex items-center gap-3"
					>
						<span>SHOP</span>
						<Image
							src="/images/shared/desktop/icon-arrow-right.svg"
							alt="arrow icon"
							width={8}
							height={8}
						/>
					</Button>
				</div>
			</div>
		</Link>
	);
};
