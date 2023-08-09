"use client";

import {
	FieldPath,
	FieldValues,
	UseControllerProps,
	useController,
} from "react-hook-form";

import BaseInput from "../../BaseInput";
import { RadioInputOption } from "../types";

type Props<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
> = { option: RadioInputOption } & UseControllerProps<TFieldValues, TName> &
	React.HTMLAttributes<HTMLInputElement>;

export const RadioInput = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
>({
	control,
	name,
	rules,
	option,
	id,
	...props
}: Props<TFieldValues, TName>) => {
	const {
		field,
		fieldState: { error },
	} = useController({ control, name, rules });

	const { value, label } = option;

	return (
		<BaseInput
			error={Boolean(error)}
			errorMessage={error?.message}
			className="relative p-0"
			checked={field.value === value}
		>
			<div className="relative flex items-center p-4">
				<input
					{...props}
					type="radio"
					id={id}
					value={value}
					checked={field.value === value}
					onChange={(e) => {
						field.onChange(e);
					}}
					className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-main accent-primary-main"
				/>
				<label htmlFor={id} className="absolute inset-0"></label>
				<span className="ml-2 text-sm font-medium text-gray-900">{label}</span>
			</div>
		</BaseInput>
	);
};
