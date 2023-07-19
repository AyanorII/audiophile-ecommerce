"use client";

import { useState } from "react";

import { twMerge } from "tailwind-merge";

type Props = {
	initialValue?: number;
	onIncrement?: (value: number) => void;
	onDecrement?: (value: number) => void;
	className?: string;
	buttonsClassName?: string;
};

export const CounterControlButton = ({
	initialValue = 0,
	onIncrement,
	onDecrement,
	className,
	buttonsClassName,
}: Props) => {
	const [value, setValue] = useState(initialValue);

	const handleIncrement = () => {
		setValue((prev) => {
			const newValue = prev + 1;
			onIncrement?.(newValue);

			return newValue;
		});
	};

	const handleDecrement = () => {
		setValue((prev) => {
			const newValue = prev <= 0 ? 0 : prev - 1;
			onDecrement?.(newValue);

			return newValue;
		});
	};

	const COMMON_CLASS_NAME = "p-4 lg:px-6 font-bold bg-gray-200";
	const BUTTON_CLASS_NAME = twMerge([
		COMMON_CLASS_NAME,
		"text-gray-500 hover:text-gray-700",
		buttonsClassName,
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
