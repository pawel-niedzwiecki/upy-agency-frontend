import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Button = styled.button``;

const buttonwholestyle = css`
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.colorBlack};
  background-color: ${({ theme }) => theme.colorAqua};

  svg {
    height: 1.4rem;
    padding-left: 1rem;
    margin-top: 0.3rem;
    padding-right: 0.6rem;
    display: inline-block;
    fill: ${({ theme }) => theme.colorBlack};

    @media all and (min-width: 768px) {
      height: 1.8rem;
      margin-top: 0.1rem;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colorBlack};
    background-color: ${({ theme }) => theme.colorWhite};
    svg {
      padding-right: 0rem;
      padding-left: 1.6rem;
    }
  }

  @media all and (min-width: 768px) {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;

export const ButtonStyled = styled.button`
  ${buttonwholestyle}
`;

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

export const ButtonInLinkStyled = styled(Link)`
  ${buttonwholestyle}
`;

export const ButtonSubmitStyled = styled.button`
  ${buttonwholestyle}
`;
