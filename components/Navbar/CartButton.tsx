import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Badge,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useContext, useState } from "react";
import { getPrice } from "../../lib/helpers";
import QuantityButton from "../Cart/QuantityButton";
import { CartContext } from "../CartContext";

const CartButton = observer(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const cart = useContext(CartContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <button
        style={{ border: "none", background: "transparent", cursor: "pointer" }}
        onClick={handleClick}
      >
        <Badge badgeContent={cart.items.length} color="primary">
          <ShoppingCartOutlinedIcon sx={{ color: "#FFF" }} />
        </Badge>
      </button>
      <CartMenu anchorEl={anchorEl} handleClose={handleClose} open={open} />
    </>
  );
});

export default CartButton;

type MenuProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
};

const CartMenu = observer(({ anchorEl, handleClose, open }: MenuProps) => {
  const cart = useContext(CartContext);

  return (
    <Menu
      id="cart-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: "90%",
          maxWidth: "377px",
          top: "75px !important",
          padding: "1rem 0",
        },
      }}
    >
      <Container>
        <>
          {/* ----------------------------- Top ------------------------------ */}
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={cart.isEmpty ? 0 : 2}
          >
            <Typography variant="h6" textTransform="uppercase" fontWeight={600}>
              Cart ({cart.items.length})
            </Typography>
            <Button
              variant="text"
              onClick={() => cart.resetCart()}
              sx={{
                textTransform: "capitalize",
                textDecoration: "underline",
                padding: 0,
                color: "primary.light",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.dark",
                  textDecoration: "underline",
                },
              }}
            >
              Remove all
            </Button>
          </Stack>
          {/* ---------------------------- Top ------------------------------- */}
          {cart.items.map((item) => {
            const { id, name, price, image } = item.item;
            const { quantity } = item;

            return (
              <MenuItem key={id} sx={{ padding: 0 }}>
                <Grid container alignItems="center" gap={2}>
                  <Grid item>
                    <Image
                      src={image.mobile.slice(1)}
                      width="64px"
                      height="64px"
                      alt={name}
                      style={{ borderRadius: 8 }}
                    />
                  </Grid>
                  <Grid item>
                    <Stack justifyContent="space-between" gap={0.5}>
                      <Typography
                        variant="body2"
                        display="block"
                        fontWeight={600}
                      >
                        {name
                          .replace(
                            /(headphones?)|(earphones?)|(speakers?)/i,
                            " "
                          )
                          .toUpperCase()}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="GrayText"
                        display="block"
                        fontWeight={600}
                      >
                        {getPrice(price)}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={3.5}>
                    <QuantityButton product={item.item} quantity={quantity} />
                  </Grid>
                </Grid>
              </MenuItem>
            );
          })}
          {/* ---------------------------- Bottom ---------------------------- */}
          {cart.isEmpty && <Typography variant="h6">Empty Cart :(</Typography>}
          {!cart.isEmpty && (
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  color="GrayText"
                  textTransform="uppercase"
                >
                  Total
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontWeight={600} textAlign="right">
                  {getPrice(cart.total)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" href="/checkout" fullWidth>
                  checkout
                </Button>
              </Grid>
            </Grid>
          )}
          {/* ---------------------------- Bottom ---------------------------- */}
        </>
      </Container>
    </Menu>
  );
});
