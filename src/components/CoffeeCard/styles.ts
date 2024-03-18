import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CoffeeCardStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.125rem 1.25rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2rem 0.375rem 2rem;
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1rem;

    span {
      ${mixins.fonts.tag}
      text-transform: uppercase;
      color: ${(props) => props.theme["yellow-dark"]};
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
      background-color: ${(props) => props.theme["yellow-light"]};
    }
  }

  h3 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme["base-text"]};
  }

  span:first-child {
    ${mixins.fonts.textS}
  }

  span:last-child {
    ${mixins.fonts.titleM}
  }
`;

export const CoffeeBuy = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme["yellow-dark"] : theme["purple-dark"]};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.yellow : theme.purple};
    }
  }
`;

export const CoffeeQuantity = styled.div`
  height: 2.375rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  gap: 0.25rem;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-title"]};
  }
`;
