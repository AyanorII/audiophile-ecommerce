import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	error?: boolean;
} & React.HTMLProps<HTMLLabelElement>;

export const Label = ({ children, error, ...props }: Props) => {
	const className = "font-bold text-xs text-black";

	return (
		<label
			{...props}
			className={twMerge(className, props.className, error && "text-red-500")}
		>
			{children}
		</label>
	);
};
