import Badge from "@material-ui/core/Badge";
import styled from "styled-components";

export default function CartIcon(props) {
    const handleClick = () => {
        props.openModal()
        props.openCart()
    }

    const CartButton = styled.button`
    img {
        width: 100%;
    }
        @media (min-width: 1200px) {
            cursor: pointer;
        }
    `

    return (
        <Badge badgeContent={props.numberOfItems} color="primary">
            <CartButton className="cart" aria-label="cart dropdown" aria-expanded={props.isCartExpanded} aria-controls="cart" onClick={handleClick}>
                <img src={props.icon} alt="" />
            </CartButton>
        </Badge>
    );
}
