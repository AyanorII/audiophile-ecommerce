"use client";

import { useState } from "react";
import {
	FieldPath,
	FieldValues,
	UseControllerProps,
	useController,
} from "react-hook-form";

import { twMerge } from "tailwind-merge";

import BaseInput from "../BaseInput";

type Props<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
> = {
	label?: string;
	type?: "text" | "password" | "email" | "number";
} & UseControllerProps<TFieldValues, TName> &
	React.HTMLAttributes<HTMLInputElement>;

const TextField = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
>({
	className,
	label,
	control,
	name,
	type = "text",
	rules,
	id,
	...props
}: Props<TFieldValues, TName>) => {
	const {
		field,
		fieldState: { error },
	} = useController({ control, name, rules });

	const [isFocused, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus(true);
	};

	const handleBlur = () => {
		setFocus(false);
	};

	const BASE_CLASS_NAME = "caret-primary-main outline-none";

	return (
		<BaseInput
			label={label}
			error={Boolean(error)}
			focused={isFocused}
			errorMessage={error?.message}
			htmlFor={id || name}
		>
			<input
				type={type}
				{...field}
				{...props}
				id={id || name}
				onFocus={() => {
					handleFocus();
				}}
				onBlur={() => {
					handleBlur();
					field.onBlur();
				}}
				className={twMerge([BASE_CLASS_NAME, className])}
			/>
		</BaseInput>
	);
};

export default TextField;
