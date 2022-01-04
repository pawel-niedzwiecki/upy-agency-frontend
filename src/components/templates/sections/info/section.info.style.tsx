import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  padding: 5rem 0;
  overflow: hidden;
  min-height: 30rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: 30rem auto;
  background-position: center;
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
    height: 50vh;
    padding: 10rem 0;
    min-height: 70rem;
    background-size: auto 60rem;
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: 3rem;

  @media all and (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const Description = styled.p`
  text-align: center;

  @media all and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const MovingElementBox = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    right: calc(50% - 30rem);
    bottom: calc(50% - 30rem);
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
