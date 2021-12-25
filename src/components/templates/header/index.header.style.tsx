import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  padding: 0;
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  background: ${({ theme }) => theme.colorBlue};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colorBorder};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  .onlineValuationLink {
    margin-left: auto;
    padding: 0 ${({ theme }) => theme.break.main};
  }
`;

export const Logo = styled(Link)`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background: transparent;
  padding: 0 ${({ theme }) => theme.break.main};

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
  padding-left: ${({ theme }) => theme.break.big};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 1rem;
    display: inline-block;
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
  }

  padding: ${({ theme }) => theme.break.big};
  a {
    color: ${({ theme }) => theme.colorWhite};

    &:hover {
      color: ${({ theme }) => theme.colorAqua};
    }
  }
  a:hover svg {
    fill: ${({ theme }) => theme.colorAqua};
  }
`;
