import { twMerge } from "tailwind-merge";

import { Container } from "../UI";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export const PageContainer = ({ children, className }: Props) => {
	return (
		<Container
			className={twMerge([
				"flex flex-col gap-32 md:my-32 lg:my-40 lg:gap-40",
				className,
			])}
		>
			{children}
		</Container>
	);
};
