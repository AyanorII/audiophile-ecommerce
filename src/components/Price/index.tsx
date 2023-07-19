import { getFormattedPrice } from "@/lib/helpers";
import { twMerge } from "tailwind-merge";

type Props = {
	price: number;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Price = ({ price, className, ...props }: Props) => {
	const formattedPrice = getFormattedPrice(price);

	return (
		<span className={twMerge(["font-bold text-lg", className])} {...props}>
			{formattedPrice}
		</span>
	);
};
