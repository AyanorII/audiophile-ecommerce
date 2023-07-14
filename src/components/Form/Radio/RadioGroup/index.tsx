import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

import { RadioInput } from "../RadioInput";
import { RadioInputOption } from "../types";

type Props<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
> = { options: RadioInputOption[] } & UseControllerProps<TFieldValues, TName> &
	React.HTMLAttributes<HTMLInputElement>;

export const RadioGroup = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
>({
	control,
	options,
	name,
}: Props<TFieldValues, TName>) => {
	return (
		<div>
			{options.map((option) => (
				<RadioInput
					key={option.value}
					id={option.value}
					option={option}
					name={name}
					control={control}
				/>
			))}
		</div>
	);
};
