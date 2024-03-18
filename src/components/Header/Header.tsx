import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeeLogo from "../../assets/coffeeLogo.svg";
import { HeaderContainer, Location } from "./styles";
import { NavLink } from "react-router-dom";
import { defaultTheme } from "../../styles/themes/default";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { cartItems } = useCart();

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={coffeeLogo} alt='' />
      </NavLink>

      <nav>
        <Location>
          <NavLink to='#'>
            <MapPin color={defaultTheme["purple"]} weight='fill' size={22} />
          </NavLink>
          <span>Porto Alegre, RS</span>
        </Location>
        <NavLink aria-disabled={cartItems.length === 0} to='/checkout'>
          <ShoppingCart
            color={defaultTheme["yellow-dark"]}
            weight='fill'
            size={22}
          ></ShoppingCart>
          {cartItems.length > 0 ? <span>{cartItems.length}</span> : null}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
