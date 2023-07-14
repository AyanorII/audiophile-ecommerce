import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	error?: boolean;
} & React.HTMLProps<HTMLLabelElement>;

export const Label = ({ children, error, ...props }: Props) => {
	const className = "font-bold text-sm text-black";

	return (
		<label className={twMerge(className, error && "text-red-500")} {...props}>
			{children}
		</label>
	);
};
