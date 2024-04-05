import { CoffeeContainer, HeroBackground, HeroContainer, Info } from "./styles";

import heroImg from "/static/images/heroImg.svg";
import heroBg from "/static/images/heroBg.svg";

import { Coffee, ShoppingCart } from "@phosphor-icons/react";
import { Package, Timer } from "@phosphor-icons/react/dist/ssr";

import { defaultTheme } from "../../styles/themes/default";

import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";
import { coffees } from "../../data/coffeeData.json";

export const Home = () => {
  return (
    <main>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight='fill'
                color={defaultTheme.white}
                style={{ background: defaultTheme["yellow-dark"] }}
              ></ShoppingCart>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight='fill'
                color={defaultTheme.white}
                style={{ background: defaultTheme["base-text"] }}
              ></Package>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight='fill'
                color={defaultTheme.white}
                style={{ background: defaultTheme["yellow"] }}
              ></Timer>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight='fill'
                color={defaultTheme.white}
                style={{ background: defaultTheme["purple"] }}
              ></Coffee>
              <span>O café chega fresqueinho até você</span>
            </div>
          </Info>
        </div>
        <img src={heroImg} alt='Imagem de café' />
        <HeroBackground>
          <img src={heroBg} alt='' />
        </HeroBackground>
      </HeroContainer>

      <CoffeeContainer>
        <h1>Nossos cafés</h1>
        <section>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee}></CoffeeCard>
          ))}
        </section>
      </CoffeeContainer>
    </main>
  );
};
