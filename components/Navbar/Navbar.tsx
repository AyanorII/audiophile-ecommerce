import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import CategoryLinks from "../Category/CategoryLinks";
import Logo from "../Logo";
import CartButton from "./CartButton";

type Props = {};

const Navbar = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "gray.dark" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "#FFF" }} />
          </IconButton>
          <Logo />
          <CartButton />
        </Toolbar>
        <Drawer
          open={drawerOpen}
          anchor="top"
          onClose={closeDrawer}
          sx={{
            "& .MuiPaper-elevation": {
              top: "58px",
            },

            "& .MuiContainer-root": {
              paddingBottom: "4rem",
            },
          }}
        >
          <CategoryLinks />
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
