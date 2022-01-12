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
  top: 0rem;
  width: 100%;
  z-index: 10;
  display: flex;
  position: sticky;
  align-items: center;

  @media all and (min-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;

  @media all and (min-width: 768px) {
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
  position: relative;

  padding-right: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
  }

  a {
    display: block;
    font-size: 1.4rem;
    white-space: nowrap;
    border-radius: 0.3rem;
    padding: ${({ theme }) => theme.break.main};

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
      padding: ${({ theme }) => theme.break.main} 0;
    }
  }
`;
