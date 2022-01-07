import styled, { css } from "styled-components";

export const Section = styled.section`
  min-height: 60rem;
  background-size: 60% auto;
  height: calc(100vh - 18rem);
  background-position: center;
  background-repeat: no-repeat;
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
      background: ${theme.colorBlue};
    `}

  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
`;

export const Header = styled.h2`
  font-size: 3rem;
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
    font-size: 1.4rem;
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
  text-align: right;
  font-size: 1.2rem;
`;
export const ClientBoxHeaderName = styled.h1`
  flex: 100%;
  width: 100%;
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
    color: ${({ theme }) => theme.colorPurple};
  }
`;

export const MovingElementBox = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    right: 10%;
    top: 10rem;
    z-index: 0;
    opacity: 0.5;
    width: 50rem;
    height: 50rem;
    display: block;
    position: absolute;
  }
`;

interface SharpCircleProps {
  bg: any;
}

export const AnimationLogo = styled.div`
  top: 10%;
  right: 5%;
  z-index: 20;
  width: 8rem;
  height: 8rem;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const SharpCircle = styled.div<SharpCircleProps>`
  bottom: 20%;
  left: 0%;
  z-index: 0;
  display: flex;
  width: 7rem;
  height: 7rem;
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

export const SharpTriangle = styled.div<SharpCircleProps>`
  bottom: 10%;
  right: 10%;
  z-index: 20;
  display: flex;
  width: 9rem;
  height: 9rem;
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
