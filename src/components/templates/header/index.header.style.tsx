import styled from "styled-components";
import { Link } from "gatsby";

type HeaderTypes = {
  theme: {
    brak: {
      main: string;
    };
    colorBlue: string;
  };
};

export const Header = styled.header<HeaderTypes>`
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  padding: ${({ theme }) => theme.brak.main};
  background: ${({ theme }) => theme.colorBlue};
`;

export const Box = styled.div`
  display: flex;
`;

export const Logo = styled(Link)`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background: transparent;
  padding: 0 -1rem;

  svg {
    height: 4rem;
    fill: ${(p) => p.theme.colorWhite};
  }

  &:hover {
    svg {
      fill: ${(p) => p.theme.colorPurple};
    }
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;
