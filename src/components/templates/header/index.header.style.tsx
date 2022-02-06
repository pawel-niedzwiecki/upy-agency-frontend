import styled from "styled-components";
import { Link } from "gatsby";

type HeaderType = {
  activemenu?: boolean;
};

export const Header = styled.header<HeaderType>`
  padding: 0;
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  background: ${({ theme, activemenu }) => (activemenu ? theme.colorGray : theme.colorBlack)};
`;

type BoxType = {
  activemenu?: boolean;
  mobileMenuSwitch: boolean;
};

export const Box = styled.div<BoxType>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  transition: all 0.3s;
  padding: ${({ theme, activemenu }) => (activemenu ? `${theme.break.main} 0` : `4rem 0`)};
  height: ${({ mobileMenuSwitch, activemenu }) => (mobileMenuSwitch ? "35rem" : activemenu ? "6rem" : "12rem")};

  .logo {
    font-size: ${({ activemenu }) => (activemenu ? `2.4rem !important` : `5rem !important`)};

    svg {
      width: ${({ activemenu }) => (activemenu ? `4rem` : `6rem`)};
      height: ${({ activemenu }) => (activemenu ? `4rem` : `6rem`)};
    }
  }

  a {
    text-align: center;

    @media all and (min-width: 1140px) {
      font-size: ${({ activemenu }) => (activemenu ? `1.6rem` : `2.4rem`)};
    }
  }

  .onlineValuationLink {
    width: 100%;
    margin-left: auto;
    padding: ${({ theme }) => theme.break.big};

    @media all and (min-width: 1140px) {
      width: auto;
      padding: 0 ${({ theme }) => theme.break.main};
    }
  }
`;

export const Logo = styled(Link)`
  border: none;
  display: flex;
  font-weight: bold;
  width: max-content;
  position: relative;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colorWhite};
  padding: 0 ${({ theme }) => theme.break.main};

  svg {
    fill: ${({ theme }) => theme.colorWhite};
    margin-right: ${({ theme }) => theme.break.main};
  }

  &:hover {
    color: ${({ theme }) => theme.colorAqua};

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

  @media all and (min-width: 1140px) {
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

  .active {
    color: ${({ theme }) => theme.colorAqua};
  }

  @media all and (min-width: 1140px) {
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
  mobileMenuSwitch: boolean;
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
      top: ${({ mobileMenuSwitch }) => (mobileMenuSwitch ? "2rem" : `1rem`)};
      transform: ${({ mobileMenuSwitch }) => (mobileMenuSwitch ? "rotate(45deg)" : `rotate(0)`)};
    }
    &:nth-child(2) {
      top: 2rem;
      left: ${({ mobileMenuSwitch }) => (mobileMenuSwitch ? "-4rem" : 0)};
    }
    &:nth-child(3) {
      top: ${({ mobileMenuSwitch }) => (mobileMenuSwitch ? "2rem" : `3rem`)};
      transform: ${({ mobileMenuSwitch }) => (mobileMenuSwitch ? "rotate(-45deg)" : `rotate(0)`)};
    }
  }

  @media all and (min-width: 1140px) {
    display: none;
  }
`;

export const BreakBoxHeader = styled.div`
  width: 100%;
  height: 12rem;
  display: block;
  position: relative;
`;
