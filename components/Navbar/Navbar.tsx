import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import CategoryLinks from "../Category/CategoryLinks";
import Link from "../Link";
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

  const drawerStyles = {
    display: { lg: "none" },

    "& .MuiPaper-elevation": {
      top: "58px",
    },

    "& .MuiContainer-root": {
      paddingBottom: "4rem",
    },
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "gray.dark" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton onClick={toggleDrawer} sx={{ display: { lg: "none" } }}>
              <MenuIcon sx={{ color: "#FFF" }} />
            </IconButton>
            <Logo />
            <DesktopLinks />
            <CartButton />
          </Toolbar>
        </Container>
        <Drawer
          open={drawerOpen}
          anchor="top"
          onClose={closeDrawer}
          sx={drawerStyles}
        >
          <CategoryLinks />
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;

const DESKTOP_LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/headphones",
    label: "Headphones",
  },
  {
    href: "/earphones",
    label: "Earphones",
  },
  {
    href: "/speakers",
    label: "Speakers",
  },
];

const DesktopLinks = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) return null;

  return (
    <Stack flexDirection="row" gap={3}>
      {DESKTOP_LINKS.map((link) => {
        const { href, label } = link;

        return (
          <Link key={href} href={href}>
            {label}
          </Link>
        );
      })}
    </Stack>
  );
};
