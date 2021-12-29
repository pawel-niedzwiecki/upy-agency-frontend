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

type PowerMenuType = {
  powerMenu: boolean;
};

export const Box = styled.div<PowerMenuType>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  transition: all 0.3s;
  padding: ${({ theme }) => theme.break.main} 0;
  height: ${({ powerMenu }) => (powerMenu ? "35rem" : "6rem")};

  a {
    text-align: center;
  }

  .onlineValuationLink {
    width: 100%;
    margin-left: auto;
    padding: ${({ theme }) => theme.break.big};
    @media all and (min-width: 767px) {
      width: auto;
      padding: 0 ${({ theme }) => theme.break.main};
    }
  }
`;

export const Logo = styled(Link)`
  border: none;
  display: flex;
  width: max-content;
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
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.break.big};

  @media all and (min-width: 767px) {
    flex: none;
  }
`;

export const Item = styled.li`
  flex: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  padding: ${({ theme }) => theme.break.big};

  @media all and (min-width: 767px) {
    flex: none;
    width: max-content;
    padding: 0 ${({ theme }) => theme.break.big};
  }

  svg {
    width: 1rem;
    display: inline-block;
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
  }

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

type MobileMenuButtonType = {
  powerMenu: boolean;
};

export const MobileMenuButton = styled.div<MobileMenuButtonType>`
  width: 3rem;
  height: 4rem;
  display: block;
  overflow: hidden;
  margin-left: auto;
  position: relative;

  span {
    left: 0;
    width: 100%;
    height: 0.3rem;
    display: block;
    position: absolute;
    transition: all 0.3s;
    background: ${({ theme }) => theme.colorAqua};

    &:nth-child(1) {
      top: ${({ powerMenu }) => (powerMenu ? "2rem" : `1rem`)};
      transform: ${({ powerMenu }) => (powerMenu ? "rotate(45deg)" : `rotate(0)`)};
    }
    &:nth-child(2) {
      top: 2rem;
      left: ${({ powerMenu }) => (powerMenu ? "-4rem" : 0)};
    }
    &:nth-child(3) {
      top: ${({ powerMenu }) => (powerMenu ? "2rem" : `3rem`)};
      transform: ${({ powerMenu }) => (powerMenu ? "rotate(-45deg)" : `rotate(0)`)};
    }
  }

  @media all and (min-width: 767px) {
    display: none;
  }
`;
