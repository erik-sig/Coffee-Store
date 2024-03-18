import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.375rem;
  padding: 5rem 0;

  > div {
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 2.5rem;

    h2 {
      ${mixins.fonts.titleL}
      color: ${(props) => props.theme["yellow-dark"]}
    }
    p {
      ${mixins.fonts.textL}
      color: ${(props) => props.theme["base-subtitle"]}
    }
  }
`;

export const ResumeInfoContainer = styled.div`
  border: 1px solid;
  border-radius: 0.375rem 2rem;
  width: 100%;
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(to bottom right, #dbac2c, #8047f8);
`;

export const ResumeInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 0.375rem 2rem;
  background-color: white;
  padding: 2.5rem;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 999px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  ${mixins.fonts.textM}
  color: ${(props) => props.theme["base-text"]};
`;
