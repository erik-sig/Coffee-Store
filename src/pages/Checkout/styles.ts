import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.section`
  display: flex;
  justify-items: start;
  padding: 2.5rem 0;
  gap: 2rem;

  h2 {
    margin-bottom: 0.9375rem;
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const AdressContainer = styled.section`
  > div {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
  }
`;

export const InputText = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  ${mixins.fonts.textS}
  background-color: ${(props) => props.theme["base-input"]};
  padding: 0.75rem;
  border-radius: 4px;
  transition: 0.2s;

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AdressHeader = styled.div`
  display: flex;
  justify-items: start;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AdressForm = styled.div`
  > form {
    min-width: 35rem;

    display: grid;
    grid-template-areas:
      "cep . ."
      "rua rua rua"
      "numero complemento complemento"
      "bairro cidade uf";
    grid-template-columns: 12.5rem 1fr 3.75rem;
    grid-gap: 1rem;
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const PaymentHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;

  > div {
    margin-left: 0.5rem;
    h3 {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.75rem;

  label {
    min-width: 11.125rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    transition: 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
    &[data-state="true"] {
      background-color: ${(props) => props.theme["purple-light"]};
      border-color: ${(props) => props.theme.purple};
    }

    input {
      display: none;
    }

    span {
      margin-left: 0.75rem;
      ${mixins.fonts.buttonM}
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const ErrorPaymenteMethod = styled.div`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;

  > div {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  }
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.75rem;
  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};
  }
  div:last-child {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow"]};
  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme["white"]};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
