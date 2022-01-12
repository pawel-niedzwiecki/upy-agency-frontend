import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 80rem;
  position: relative;
  padding: 4rem 0;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    padding: 6rem 0 10rem 0;
    height: calc(100vh - 24rem);
  }

  .col {
    padding: 1rem;
  }
`;

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  align-items: center;
  border-radius: 0.3em;
  justify-content: center;
  padding: ${({ theme }) => theme.break.big};
  background-color: ${({ theme }) => theme.colorGray};

  button {
    border: none;
    padding: 1rem 0;
    font-weight: normal;
    border-radius: inherit;

    &.active {
      color: ${({ theme }) => theme.colorWhite};
    }

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colorWhite};
    }
  }
`;

interface ListProps {
  typ?: string;
}

export const List = styled.ul<ListProps>`
  flex: 100%;
  ${({ typ }) =>
    typ === "level" &&
    css`
      display: flex;

      li {
        padding-right: ${({ theme }) => theme.break.main};
      }
    `}

  li {
    font-size: 1.4rem;
    padding-top: ${({ theme }) => theme.break.main};
  }

  a {
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: 1.6rem;
    font-weight: normal;

    svg {
      width: 2rem;
      height: 2rem;
      display: block;
      fill: ${({ theme }) => theme.colorWhite};
    }

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colorWhite};
      svg {
        fill: ${({ theme }) => theme.colorAqua};
      }
    }
  }
`;

export const Header = styled.h1`
  flex: 100%;
  font-size: 3rem;
  font-weight: bold;
`;

export const BoxContact = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    padding: ${({ theme }) => theme.break.big};
  }
`;
export const Title = styled.h1`
  display: block;
  font-size: 3.6rem;
  padding-bottom: ${({ theme }) => theme.break.main};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
