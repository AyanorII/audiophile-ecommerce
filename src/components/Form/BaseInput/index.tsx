import { twMerge } from "tailwind-merge";

import { ErrorMessage } from "../ErrorMessage";
import { Label } from "../Label";

type Props = {
	children: React.ReactNode;
	label?: string;
	error?: boolean;
	htmlFor?: string;
	errorMessage?: string;
	focused: boolean;
};

const BaseInput = ({
	children,
	label,
	error,
	errorMessage,
	focused,
	htmlFor,
}: Props) => {
	const BASE_CLASS_NAME =
		"border-[1px] py-4 px-4 text-black text-sm font-bold rounded-lg transition-colors ease-in-out";

	const FOCUSED_CLASS_NAME = "border-primary-main";

	const ERROR_CLASS_NAME = "border-error border-2 px-[15px] py-[15px]";

	const className = twMerge([
		BASE_CLASS_NAME,
		focused && FOCUSED_CLASS_NAME,
		error && ERROR_CLASS_NAME,
	]);

	return (
		<div>
			<div className="mb-2 flex justify-between">
				{label && <Label htmlFor={htmlFor}>{label}</Label>}
				{error && (
					<ErrorMessage className="justify-self-end">
						{errorMessage}
					</ErrorMessage>
				)}
			</div>
			<div className={className}>{children}</div>
		</div>
	);
};

export default BaseInput;
