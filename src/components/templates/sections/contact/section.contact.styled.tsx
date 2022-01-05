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
    height: calc(100vh - 12rem);
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
  background-color: ${({ theme }) => theme.colorBlue};

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

export const BoxAnimation = styled.div`
  display: none;

  @media all and (min-width: 1024px) {
    top: 0;
    right: 0;
    width: 40rem;
    display: flex;
    position: absolute;
    flex-direction: column;
  }
`;

interface SharpCircleProps {
  bg: any;
}

export const SharpCircle = styled.div<SharpCircleProps>`
  top: 50%;
  left: 50%;
  z-index: 20;
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  overflow: hidden;
  position: absolute;
  align-items: center;
  border-radius: 100%;

  justify-content: center;

  .ball-shadow {
    height: 100%;
    filter: contrast(200%) brightness(500%);
    background: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0), rgba(70, 50, 100, 1)), url(${({ bg }) => bg});
  }

  .ball-light {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    background: radial-gradient(circle at 67% 30%, #efd5ff, #e0aeff);
  }

  .isolate {
    top: 0;
    width: 100%;
    height: 100%;
    isolation: isolate;
    position: absolute;
  }
`;

export const SharpSquare = styled.div<SharpCircleProps>`
  top: 30%;
  left: 20%;
  z-index: 20;
  display: flex;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  position: absolute;
  align-items: center;

  justify-content: center;

  .ball-shadow {
    height: 100%;
    filter: contrast(200%) brightness(500%);
    background: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0), #616432), url(${({ bg }) => bg});
  }

  .ball-light {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    background: radial-gradient(circle at 67% 30%, #feffd5, #fff7ae);
  }

  .isolate {
    top: 0;
    width: 100%;
    height: 100%;
    isolation: isolate;
    position: absolute;
  }
`;

export const SharpTriangle = styled.div<SharpCircleProps>`
  top: 60%;
  left: 10%;
  z-index: 20;
  display: flex;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  .ball-shadow {
    height: 100%;
    filter: contrast(200%) brightness(500%);
    background: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0), #32645c), url(${({ bg }) => bg});
  }

  .ball-light {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    background: radial-gradient(circle at 67% 30%, #d5ffff, #aeffe7);
  }

  .isolate {
    top: 0;
    width: 100%;
    height: 100%;
    isolation: isolate;
    position: absolute;
  }
`;
