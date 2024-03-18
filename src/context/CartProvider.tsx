import { ReactNode, createContext, useState } from "react";
import IItem from "../Interfaces/IItem";

interface CartContextType {
  cartItems: IItem[];
  setCartItems: React.Dispatch<React.SetStateAction<IItem[]>>;
  totalValue: number;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IItem[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, totalValue, setTotalValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
