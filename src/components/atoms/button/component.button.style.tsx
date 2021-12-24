import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Button = styled.button`
  margin-right: auto;
  margin: 3rem auto 0rem 0;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5rem;
  border: 0.5rem solid ${({ theme }) => theme.aqua};
  background-color: transparent;
  color: ${({ theme }) => theme.aqua};
  transition: all 0.3s;
  cursor: pointer;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: startAnimation4;

  @media all and (min-width: 768px) {
    font-size: 2rem;
    padding: 2rem 4rem;
  }

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.aqua};
  }
`;

const buttonwholestyle = css`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5rem;
  transition: all 0.3s;
  background-color: transparent;
  color: ${({ theme }) => theme.aqua};
  border: 0.3rem solid ${({ theme }) => theme.aqua};

  @media all and (min-width: 768px) {
    padding: 1.5rem 3rem;
    border: 0.5rem solid ${({ theme }) => theme.aqua};
  }

  @media all and (min-width: 1024px) {
    font-size: 2rem;
    padding: 2rem 4rem;
  }

  &:focus {
    outline: none;
  }

  svg {
    height: 2rem;
  }

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.aqua};

    svg {
      fill: ${({ theme }) => theme.blueDark};
    }
  }
`;

// create style
export const ButtonStyled = styled.button`
  ${buttonwholestyle}
`;

// create style
export const ButtonCyrlicStyled = styled.button`
  ${buttonwholestyle}
  width: 3rem;
  height: 3rem;
  padding: 0.2rem;
  border-radius: 100%;

  svg {
    width: 1rem;
  }

  @media all and (min-width: 768px) {
    width: 5rem;
    height: 5rem;
    padding: 1rem 0.5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const ButtonOutLinkStyled = styled.a`
  ${buttonwholestyle}
`;

export const ButtonInLinkStyled = styled(Link)``;

export const ButtonSubmitStyled = styled.button`
  ${buttonwholestyle}

  @media all and (min-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 4rem;
  }
`;
