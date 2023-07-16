import { twMerge } from "tailwind-merge";

type Props = {
	isOpen: boolean;
	onClickAway: () => void;
	position?: "fixed" | "absolute";
};

export const Overlay = ({
	isOpen,
	onClickAway,
	position = "absolute",
}: Props) => {
	return (
		<div
			onClick={onClickAway}
			className={twMerge([
				position,
				"inset-0 bg-black transition duration-500",
				isOpen ? "z-50 opacity-50" : "-z-10 opacity-0",
			])}
		/>
	);
};