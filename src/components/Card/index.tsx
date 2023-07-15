import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: Props) => {
	return (
		<div
			{...props}
			className={twMerge([
				"rounded-lg hover:shadow-md transition-all duration-300",
				className,
			])}
		>
			{children}
		</div>
	);
};
