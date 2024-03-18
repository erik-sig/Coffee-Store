import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  img {
    width: 5, 3125rem;
    height: 2, 5rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;

      > span {
        ${mixins.fonts.textS};
        font-weight: bold;
        color: ${(props) => props.theme["white"]};
        background-color: ${(props) => props.theme["yellow-dark"]};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);
      }
    }
  }

  a:last-child {
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 4px;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
  }
`;
