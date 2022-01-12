import styled from "styled-components";
import { Link } from "gatsby";

export const Footer = styled.header`
  width: 100%;
  display: block;
  position: relative;
  background: ${({ theme }) => theme.colorGray};
`;

type PowerMenuType = {
  powerMenu: boolean;
};

export const List = styled.ul`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;

  @media all and (min-width: 767px) {
    flex: none;
  }
`;

export const Item = styled.li`
  flex: 100%;
  width: 100%;
  display: flex;
  padding: 1rem 0;
  position: relative;
  justify-content: center;

  @media all and (min-width: 767px) {
    flex: none;
    width: max-content;
    padding-right: 4rem;
  }

  a {
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    color: ${({ theme }) => theme.colorWhite};

    &:hover {
      a {
        color: ${({ theme }) => theme.colorAqua};
      }
    }

    svg {
      height: 2rem;
      margin-right: 1rem;
      fill: ${({ theme }) => theme.colorAqua};
    }
  }
`;
