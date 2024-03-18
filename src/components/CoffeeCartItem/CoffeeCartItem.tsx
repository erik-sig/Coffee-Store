import { useState } from "react";
import IItem from "../../Interfaces/IItem";

import {
  Buttons,
  InfoContainer,
  RemoveButton,
  StyledCoffeeCartItem,
} from "./styles";
import { CoffeeActions, CoffeeBuy, CoffeeQuantity } from "../CoffeeCard/styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { defaultTheme } from "../../styles/themes/default";
export const CoffeeCartItem = ({ item }: { item: IItem }) => {
  const { changeQuantityItem, removeItem } = useCart();

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <StyledCoffeeCartItem>
      <>
        <div>
          <img src={item.img} alt='' />
          <InfoContainer>
            <span>{item.title}</span>
            <Buttons>
              <CoffeeActions>
                <CoffeeBuy>
                  <CoffeeQuantity>
                    <Minus
                      size={16}
                      onClick={() => {
                        if (quantity === 1) return;
                        setQuantity((prev) => prev - 1);
                        changeQuantityItem(item.id, quantity);
                      }}
                    />
                    <span>{item.quantity}</span>
                    <Plus
                      size={16}
                      onClick={() => {
                        setQuantity((prev) => prev + 1);
                        changeQuantityItem(item.id, quantity);
                      }}
                    />
                  </CoffeeQuantity>
                </CoffeeBuy>
              </CoffeeActions>

              <RemoveButton onClick={() => removeItem(item.id)}>
                <Trash size={16} color={defaultTheme.purple}></Trash>
                <span>REMOVER</span>
              </RemoveButton>
            </Buttons>
          </InfoContainer>
        </div>
        <span>R$ {item.price}</span>
      </>
    </StyledCoffeeCartItem>
  );
};
