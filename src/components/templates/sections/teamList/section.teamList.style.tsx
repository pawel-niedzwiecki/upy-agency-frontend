import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 5rem 0;
  position: relative;

  @media all and (max-width: 768px) {
    .menu {
      bottom: 0;
      width: 100%;
      z-index: 999;
      display: flex;
      position: fixed;
      transition: all 0.3s;
      background: ${({ theme }) => theme.colorGray};

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

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const Description = styled.p``;

type BoxStickyType = {
  background?: boolean;
};

export const BoxSticky = styled.div<BoxStickyType>`
  left: 0;
  top: 2rem;
  z-index: 10;
  position: sticky;
  padding: 2rem 1rem;
  border-radius: 0.3rem;

  @media all and (min-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Header = styled.h2`
  font-weight: bold;
  font-size: 3.6rem;
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
  text-transform: capitalize;
  color: ${({ theme }) => theme.colorAqua};

  &.active {
    cursor: no-drop;
    color: ${({ theme }) => theme.colorWhite};
  }

  &:hover {
    color: ${({ theme }) => theme.colorWhite};
  }
`;

export const Worker = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 2rem 1rem;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 100%;
  height: 20rem;
  display: block;
  overflow: hidden;
  position: relative;
`;

export const WorkerName = styled.h3`
  width: 100%;
  line-height: 1;
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;
`;

export const WorkerCompentention = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
`;
