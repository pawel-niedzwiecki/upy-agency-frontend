import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  padding: ${({ theme }) => theme.breakMain}};
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
    fill: ${({ theme }) => theme.colorWhite};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colorPurple};
    }
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;
