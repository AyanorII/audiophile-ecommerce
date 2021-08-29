import Badge from "@material-ui/core/Badge";

export default function CartIcon(props) {
    return (
        <Badge badgeContent={props.numberOfItems} color="primary">
            <button className="cart" onClick={props.openModal}>
                <img src={props.icon} alt="cart" />
            </button>
        </Badge>
    );
}
