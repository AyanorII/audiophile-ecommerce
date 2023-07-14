import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export const ErrorMessage = ({ children, className, ...props }: Props) => {
	const BASE_CLASS_NAME = "text-xs font-medium text-error";

	return (
		<span className={twMerge([BASE_CLASS_NAME, className])} {...props}>
			{children}
		</span>
	);
};
