import Image from "next/image";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CartButton = (props: Props) => {
	return (
		<button {...props}>
			<Image
				src="/images/shared/desktop/icon-cart.svg"
				alt="cart button"
				width={23}
				height={20}
			/>
		</button>
	);
};
