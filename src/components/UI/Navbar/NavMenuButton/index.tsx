import Image, { ImageProps } from "next/image";

type Props = {
	ImageProps?: Omit<ImageProps, "src" | "alt">;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavMenuButton = ({ ImageProps, ...props }: Props) => {
	return (
		<button {...props}>
			<Image
				src="/images/shared/tablet/icon-hamburger.svg"
				alt="nav menu button"
				width={16}
				height={16}
				{...ImageProps}
			/>
		</button>
	);
};
