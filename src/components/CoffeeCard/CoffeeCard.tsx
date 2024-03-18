import { CheckFat, Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCardStyle,
  CoffeeInfo,
  CoffeePrice,
  CoffeeQuantity,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export const CoffeeCard = ({ data }: Props) => {
  const { addCoffeeToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddCoffee = (id: string) => {
    addCoffeeToCart(id, quantity, data.image, data.title, data.price);
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 1000);

    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <CoffeeCardStyle>
      <CoffeeInfo>
        <img src={data.image} alt={data.title} />
        <div>
          {data.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </CoffeeInfo>
      <CoffeeActions>
        <CoffeePrice>
          <span>R$</span>
          <span>{data.price}0</span>
        </CoffeePrice>
        <CoffeeBuy $itemAdded={isItemAdded}>
          <CoffeeQuantity>
            <Minus
              size={14}
              onClick={() => {
                decreaseQuantity();
              }}
            />
            <span>{quantity}</span>
            <Plus
              size={14}
              onClick={() => {
                increaseQuantity();
              }}
            />
          </CoffeeQuantity>
          <button
            disabled={isItemAdded}
            onClick={() => handleAddCoffee(data.id)}
          >
            {isItemAdded ? (
              <CheckFat
                weight='fill'
                size={22}
                color={defaultTheme["base-card"]}
              />
            ) : (
              <ShoppingCart size={22} color={defaultTheme["base-card"]} />
            )}
          </button>
        </CoffeeBuy>
      </CoffeeActions>
    </CoffeeCardStyle>
  );
};
