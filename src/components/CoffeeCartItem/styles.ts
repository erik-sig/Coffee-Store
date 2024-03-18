import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const StyledCoffeeCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  > span:last-child {
    height: 4rem;
    display: flex;
    align-items: start;
    justify-content: start;
    ${mixins.fonts.textM}
    font-weight:bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  > span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.button`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  span {
    width: 55px;
    height: 19px;
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme["base-text"]};
  }
`;
