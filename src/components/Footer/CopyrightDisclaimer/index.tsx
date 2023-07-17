import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export const CopyrightDisclaimer = ({ className, ...props }: Props) => {
	const today = new Date();
	const currentYear = today.getFullYear();

	return (
		<span
			{...props}
			className={twMerge(["text-gray-400", className])}
		>{`Copyright ${currentYear}. All Rights Reserved`}</span>
	);
};
