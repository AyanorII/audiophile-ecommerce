"use client";

import { useRouter } from "next/navigation";

import { Button } from "../UI";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	fallbackPath?: string;
};

export const GoBack = ({ fallbackPath, ...props }: Props) => {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		// TODO: Fix this
		document.referrer && document.referrer.includes("localhost")
			? router.back()
			: router.push(fallbackPath ?? "/");
	};

	return (
		<Button as="button" {...props} variant="text" onClick={handleClick}>
			Go Back
		</Button>
	);
};
