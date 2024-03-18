import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 5.75rem 0;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 4.125rem;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 9999px;
    }

    span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
export const HeroBackground = styled.article`
  position: absolute;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const CoffeeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }

  section {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, 16rem);
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`;
