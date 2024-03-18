import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartProvider";

export const useCart = () => {
  const { cartItems, setCartItems, totalValue, setTotalValue } =
    useContext(CartContext);

  const addCoffeeToCart = (
    id: string,
    quantity: number,
    img: string,
    title: string,
    price: number
  ): void => {
    console.log("ADCIONA NO CARRINHO");
    const alreadyExist = cartItems.some((item) => item.id === id);
    let newCartItems = [...cartItems];
    if (!alreadyExist) {
      newCartItems = [...newCartItems, { id, quantity, title, img, price }];
      console.log(newCartItems);
      setCartItems(newCartItems);
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      setCartItems(newCartItems);
    }
  };

  const changeQuantityItem = (id: string, quantity: number): void => {
    let newCartItems = [...cartItems];
    newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (counter, item) => counter + item.quantity * item.price,
      0
    );
    setTotalValue(newTotal);
  }, [cartItems, setTotalValue]);

  const removeItem = (id: string) => {
    let newCartItems = [...cartItems];
    newCartItems = cartItems.filter((item) => item.id != id);
    setCartItems(newCartItems);
  };

  return {
    cartItems,
    addCoffeeToCart,
    changeQuantityItem,
    totalValue,
    removeItem,
  };
};
