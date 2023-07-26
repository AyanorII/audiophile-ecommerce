"use client";

import { twMerge } from "tailwind-merge";

type Props = {
	value: number;
	onIncrement: (value: number) => void;
	onDecrement: (value: number) => void;
	className?: string;
	buttonsClassName?: string;
};

export const CounterControlButton = ({
	value = 0,
	onIncrement,
	onDecrement,
	className,
	buttonsClassName,
}: Props) => {
	const handleIncrement = () => {
		const newValue = value + 1;
		onIncrement(newValue);
	};

	const handleDecrement = () => {
		const newValue = value <= 0 ? 0 : value - 1;
		onDecrement(newValue);
	};

	const COMMON_CLASS_NAME = twMerge([
		"p-4 lg:px-6 font-bold bg-gray-200",
		buttonsClassName,
	]);
	const BUTTON_CLASS_NAME = twMerge([
		COMMON_CLASS_NAME,
		"text-gray-500 hover:text-gray-700",
	]);

	return (
		<div className={twMerge(["flex", className])}>
			<button className={BUTTON_CLASS_NAME} onClick={handleDecrement}>
				-
			</button>
			<span className={twMerge([COMMON_CLASS_NAME, "grid place-items-center"])}>
				{value}
			</span>
			<button className={BUTTON_CLASS_NAME} onClick={handleIncrement}>
				+
			</button>
		</div>
	);
};
