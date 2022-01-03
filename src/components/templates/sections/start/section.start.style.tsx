import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 30rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: 90% auto;
  height: calc(100vh - 21rem);
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
    background-size: 70% auto;
    height: calc(100vh - 21rem);
  }

  .Typewriter {
    span {
      font-size: 2.4rem;

      @media all and (min-width: 768px) {
        font-size: 3.6rem;
      }
    }
  }
`;

export const BoxContent = styled.div`
  z-index: 20;
  width: 25rem;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;

  @media all and (min-width: 768px) {
    width: 36rem;
  }
`;

export const Form = styled.form`
  opacity: 0;
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10rem;
  position: absolute;
  animation-delay: 1500ms;
  justify-content: center;
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-name: SectionStartFormAnimation;

  @keyframes SectionStartFormAnimation {
    from {
      opacity: 0;
      margin-top: 10rem;
    }
    to {
      opacity: 1;
      margin-top: 4rem;
    }
  }

  @media all and (min-width: 768px) {
    @keyframes SectionStartFormAnimation {
      from {
        opacity: 0;
        margin-top: 20rem;
      }
      to {
        opacity: 1;
        margin-top: 6rem;
      }
    }
  }

  button {
    width: 100%;
    display: block;
    margin: ${({ theme }) => theme.break.main} 0;
  }
`;

export const MovingElementBox = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    right: 0;
    bottom: 5vh;
    z-index: 0;
    width: 30rem;
    height: 30rem;
    display: block;
    position: absolute;
  }
`;

interface SharpCircleProps {
  bg: any;
}

export const AnimationLogo = styled.div`
  top: 0%;
  left: 25%;
  z-index: 20;
  width: 6rem;
  height: 6rem;
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
  width: 5rem;
  height: 5rem;
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
  width: 5rem;
  height: 5rem;
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
