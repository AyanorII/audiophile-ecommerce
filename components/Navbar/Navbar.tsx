import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';
import CartButton from './CartButton';

type Props = {}

const Navbar = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

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
      </AppBar>
      <Drawer open={drawerOpen} anchor="top" onClose={closeDrawer}>
        adasdfsafdsf
      </Drawer>
    </>
  );
}

export default Navbar
