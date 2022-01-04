import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 5rem 0;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  a {
    margin: 0 auto;
  }

  @media all and (max-width: 959px) {
    background-image: none !important;
  }

  @media all and (min-width: 960px) {
    height: 50vh;
    padding: 10rem 0;
    min-height: 80rem;
    background-size: auto 60rem;
    background-repeat: no-repeat;
    background-position: 95% 150%;

    a {
      margin: 0;
    }
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: 3rem;

  @media all and (min-width: 960px) {
    text-align: left;
    font-size: 3.6rem;
  }
`;

export const MovingElementBox = styled.div`
  display: none;

  @media all and (min-width: 1024px) {
    right: 5%;
    bottom: 5rem;
    z-index: 0;
    width: 60rem;
    height: 60rem;
    display: block;
    position: absolute;
  }
`;

interface SharpCircleProps {
  bg: any;
}

export const AnimationLogo = styled.div`
  bottom: 14rem;
  left: 3rem;
  z-index: 20;
  width: 30rem;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }
`;

export const SharpSquare = styled.div<SharpCircleProps>`
  bottom: 35rem;
  right: 25rem;
  z-index: 0;
  display: flex;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;

  .square-shadow {
    height: 100%;
    filter: contrast(200%) brightness(500%);
    background: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0), #f5e663), url(${({ bg }) => bg});
  }

  .square-light {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: multiply;
    background: radial-gradient(circle at 67% 30%, #f5e663, #fdfae2);
  }

  .isolate {
    top: 0;
    width: 100%;
    height: 100%;
    isolation: isolate;
    position: absolute;
  }
`;

export const SharpCircle = styled.div<SharpCircleProps>`
  bottom: 0%;
  left: 0%;
  z-index: 0;
  display: flex;
  width: 4rem;
  height: 4rem;
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
