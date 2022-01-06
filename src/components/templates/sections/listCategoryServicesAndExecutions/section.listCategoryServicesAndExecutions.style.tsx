import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  overflow: hidden;
  position: relative;
  height: calc(100vh - 12rem);
  background-size: 50vh auto;
  background-position: 5vw 60vh;
  background-repeat: no-repeat;
  padding: ${({ theme }) => theme.break.big} 0;

  .col {
    padding-bottom: 2rem;
  }
`;

export const SelectBox = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;

  padding: ${({ theme }) => theme.break.big};
  background: ${({ theme }) => theme.colorBlue};

  @media all and (min-width: 768px) {
    position: relative;
    display: inline-block;
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
  active: boolean;
};

export const Item = styled.li<ItemType>`
  position: relative;

  a {
    display: block;
    white-space: nowrap;
    padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};

    @media all and (min-width: 768px) {
      margin: ${({ theme }) => theme.break.main} 0;
      padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};
    }

    &:hover {
      background: ${({ theme }) => theme.colorBlueDark};
    }
  }

  ${({ active, theme }) =>
    active &&
    css`
      a {
        color: ${theme.colorWhite};
        background: ${theme.colorBlueDark};

        &:hover {
          color: ${theme.colorAqua};
        }
      }
    `}
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;

  @media all and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const FlipBoxInner = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipBox = styled.div`
  width: 100%;
  height: 20rem;
  perspective: 1000px;
  background-color: transparent;

  &:hover ${FlipBoxInner} {
    transform: rotateY(180deg);
  }
`;

const commonFrontBack = css`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  position: absolute;
  border-radius: 0.3rem;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const FlipBoxFront = styled.div`
  ${commonFrontBack}
  align-items: center;
  color: ${({ theme }) => theme.colorWhite};
  background-color: ${({ theme }) => theme.colorBlue};
`;

export const FlipBoxFrontHeader = styled.h2`
  size: 3rem;
  text-align: center;
`;

export const FlipBoxBack = styled.div`
  color: white;
  display: flex;
  ${commonFrontBack}
  flex-direction: column;
  justify-content: center;
  transform: rotateY(180deg);
  background-color: ${({ theme }) => theme.colorBlue};
`;

export const FlipBoxHeader = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 2rem;
  padding-bottom: ${({ theme }) => theme.break.main};
`;

export const FlipBoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const FlipBoxListItem = styled.li`
  font-size: 1.2rem;
  padding-top: ${({ theme }) => theme.break.small};
  padding-right: ${({ theme }) => theme.break.main};

  span {
    opacity: 0.3;
    color: ${({ theme }) => theme.colorPurple};
  }

  &:after {
    content: ",";
    padding-right: 0.3rem;
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }
`;

export const FlipBoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.break.main};
`;
