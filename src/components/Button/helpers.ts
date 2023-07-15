import {
	CONTAINED_CLASS_NAME,
	DARK_CLASS_NAME,
	OUTLINED_CLASS_NAME,
	TEXT_CLASS_NAME,
} from "./constants";

import { ButtonVariant } from "./types";

export const getButtonClassName = (variant: ButtonVariant) => {
	const classNameObj: Record<typeof variant, string> = {
		contained: CONTAINED_CLASS_NAME,
		outlined: OUTLINED_CLASS_NAME,
		text: TEXT_CLASS_NAME,
		dark: DARK_CLASS_NAME,
	};

	return classNameObj[variant];
};
