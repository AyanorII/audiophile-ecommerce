import { IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type Props = {}

const CartButton = (props: Props) => {
  return (
    <IconButton aria-label="cart">
      <ShoppingCartOutlinedIcon sx={{color: "#FFF"}}/>
    </IconButton>
  )
}

export default CartButton
