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
	containerClassName?: string;
	required?: boolean;
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
	containerClassName,
	required,
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

	const BASE_CLASS_NAME =
		"caret-primary-main outline-none w-full placeholder-gray-300 placeholder:italic";

	return (
		<div className={twMerge([containerClassName])}>
			<BaseInput
				label={label}
				error={Boolean(error)}
				focused={isFocused}
				errorMessage={error?.message}
				htmlFor={id || name}
				required={required}
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
		</div>
	);
};

export default TextField;
