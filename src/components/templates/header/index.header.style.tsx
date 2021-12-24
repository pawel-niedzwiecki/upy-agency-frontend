import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  padding: ${(p) => {
      console.log(p.theme.break.main);
      return "1rem";
    }}
    0;
  background: ${(p) => p.theme.colorBlue};
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
  padding: 0 ${(p) => p.theme.break.main};

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
