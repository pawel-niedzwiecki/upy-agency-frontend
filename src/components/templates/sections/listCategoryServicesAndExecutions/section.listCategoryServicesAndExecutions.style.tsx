import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  overflow: hidden;
  padding-top: 2rem;
  position: relative;
  padding-bottom: 20rem;
  min-height: calc(100vh - 24rem);

  .col {
    padding-bottom: 2rem;

    a {
      width: 100%;
      height: 20rem;
      display: flex;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colorWhite};
      padding: ${({ theme }) => theme.break.main};
      background: ${({ theme }) => theme.colorGray};

      &:hover {
        color: ${({ theme }) => theme.colorBlack};
        background: ${({ theme }) => theme.colorAqua};
      }
    }
  }
`;

export const SelectBox = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  position: fixed;
  padding: ${({ theme }) => theme.break.big} 0;
  background: ${({ theme }) => theme.colorGray};

  @media all and (min-width: 768px) {
    top: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    align-items: center;
    background: transparent;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
  padding: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    padding: 0;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  margin-left: 2rem;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  @media all and (min-width: 768px) {
    width: 100%;
    display: block;
    overflow: auto;
    margin-left: 0;
  }
`;

type ItemType = {
  active?: boolean;
};

export const Item = styled.li<ItemType>`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 0.3rem;
  margin-right: ${({ theme }) => theme.break.main};
  background-color: ${({ theme }) => theme.colorBlack};
  padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};

  @media all and (min-width: 768px) {
    padding: 0;
  }

  a {
    font-size: 1.6rem;
    white-space: nowrap;
    border-radius: 0.3rem;

    ${({ active, theme }) =>
      active
        ? css`
            cursor: no-drop;
            color: ${theme.colorWhite};
            background: ${theme.colorBlack};
          `
        : null}

    span {
      opacity: 0.4;
    }

    @media all and (min-width: 768px) {
      font-size: 1.4rem;
      padding: ${({ theme }) => theme.break.main} 0;
    }
  }
`;
