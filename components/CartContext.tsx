import React, { createContext } from "react";
import cart from "../lib/stores/Cart";

type Props = {
  children: React.ReactNode;
};
export const CartContext = createContext(cart);

const CartProvider = ({ children }: Props) => {
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;
