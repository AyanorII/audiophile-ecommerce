import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: Props) => {
	return (
		<div
			{...props}
			className={twMerge([
				"rounded-lg overflow-hidden transition-all duration-300",
				className,
			])}
		>
			{children}
		</div>
	);
};
