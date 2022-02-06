import styled, { css } from "styled-components";

export const Section = styled.section`
  padding-bottom: 10rem;
  background-size: 60% auto;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 49rem);

  @media all and (max-width: 767px) {
    .client {
      order: 0;
      p,
      h1 {
        text-align: left;
      }

      ul {
        justify-content: flex-start;
        li {
          padding-left: 0;
          padding-right: ${({ theme }) => theme.break.main};
        }
      }
    }

    .description {
      order: 1;
    }
  }

  @media all and (max-width: 959px) {
    .menu {
      bottom: 0;
      width: 100%;
      z-index: 999;
      display: flex;
      position: fixed;
      transition: all 0.3s;
      background: ${({ theme }) => theme.colorGray};

      h2 {
        padding: 0;
        font-size: 1.4em;
        font-weight: bold;
      }

      div {
        display: flex;
        overflow: hidden;
        align-items: center;
      }

      ul {
        width: 100%;
        display: flex;
        overflow: scroll;
        flex-wrap: nowrap;
        margin-left: 2rem;

        ::-webkit-scrollbar {
          display: none;
        }

        li {
          position: relative;
          p {
            padding: 1rem 2rem;
            white-space: nowrap;
            border-radius: 0.3rem;
          }
          .active {
            background: ${({ theme }) => theme.colorBlack};
          }
        }
      }
    }
  }
`;

type BoxStickyType = {
  background?: boolean;
};

export const BoxSticky = styled.div<BoxStickyType>`
  left: 0;
  top: 8rem;
  z-index: 10;
  position: sticky;
  border-radius: 0.3rem;

  ${({ background, theme }) =>
    background &&
    css`
      background: ${theme.colorGray};
    `}

  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
`;

export const Header = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.break.big};
`;

export const List = styled.ul`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Item = styled.li`
  flex: 100%;
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
`;

export const ScrolTo = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.colorAqua};

  &.active {
    cursor: no-drop;
    color: ${({ theme }) => theme.colorWhite};
  }

  &:hover {
    color: ${({ theme }) => theme.colorWhite};
  }
`;

export const Description = styled.div`
  overflow: hidden;
  position: relative;

  p {
    padding-bottom: ${({ theme }) => theme.break.big};
  }
`;

export const ClientBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.break.big};
`;
export const ClientBoxHeader = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  font-weight: bold;
  text-align: right;
  font-size: 1.2rem;
`;
export const ClientBoxHeaderName = styled.h1`
  flex: 100%;
  width: 100%;
  font-weight: bold;
  text-align: right;
  font-size: 3.6rem;
  text-transform: uppercase;
  padding-bottom: ${({ theme }) => theme.break.big};
`;

export const ListTechnology = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.break.main};
`;

export const TechnologyItem = styled.li`
  font-size: 1.2rem;
  padding-left: ${({ theme }) => theme.break.main};
  span {
    opacity: 0.4;
  }
`;
