import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	count: number;
};

export const Badge = ({ className, count }: Props) => {
	return (
		<div
			className={twMerge([
				"flex items-center justify-center rounded-[50%] bg-primary-main px-2 py-1",
				className,
			])}
		>
			<span className="text-[10px] text-white">{count}</span>
		</div>
	);
};
