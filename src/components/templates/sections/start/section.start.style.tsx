import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  min-height: 30rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: 90% auto;
  height: calc(100vh - 30rem);
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
    background-size: 70% auto;
    height: calc(100vh - 20rem);
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
    bottom: 0;
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
  top: 10%;
  left: 35%;
  z-index: 20;
  width: 4rem;
  height: 4rem;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const SharpCircle = styled.div<SharpCircleProps>`
  bottom: 25%;
  left: 0%;
  z-index: 0;
  display: flex;
  width: 3rem;
  height: 3rem;
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
  bottom: 20%;
  right: 10%;
  z-index: 20;
  display: flex;
  width: 3rem;
  height: 3rem;
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

type PowerChatType = {
  infoChat: boolean;
  powerChat: boolean;
};

export const ChatFaceBox = styled.div<PowerChatType>`
  z-index: 99;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  display: flex;
  height: 4.5rem;
  position: fixed;
  cursor: pointer;
  border-radius: 3rem;
  align-items: center;
  transition: all 1.2s;
  animation-delay: 100ms;
  animation-duration: 1200ms;
  animation-fill-mode: forwards;
  animation-name: ChatFaceBoxAnimation;
  background: ${({ theme }) => theme.colorBlue};
  border: 0.2rem solid ${({ theme }) => theme.colorBorder};
  display: ${({ powerChat }) => (powerChat ? "flex" : "none")};
  padding: ${({ infoChat }) => (infoChat ? "0 0" : "0 0!important")};
  width: ${({ infoChat }) => (infoChat ? "4.5rem" : "4.5rem !important")};

  @keyframes ChatFaceBoxAnimation {
    from {
      padding: 0 0;
      width: 4.5rem;
    }
    to {
      width: 30rem;
      padding: 0 2.5rem;
    }
  }

  @media all and (min-width: 768px) {
    right: 2rem;
    bottom: 25rem;
  }

  .face {
    top: -0.2rem;
    width: 4.5rem;
    right: -0.1rem;
    display: block;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 100%;
    transition: all 1.2s;
    animation-delay: 1200ms;
    animation-duration: 1200ms;
    animation-fill-mode: forwards;
    position: absolute !important;
    animation-name: ChatFaceBoxfaceAnimation;
    border: 0.3rem solid ${({ theme }) => theme.colorAqua};
  }

  &:hover {
    background: ${({ theme }) => theme.colorBlueDark};

    .face {
      border: 0.3rem solid ${({ theme }) => theme.colorWhite};
    }
  }
`;

type ChatFaceBoxTextType = {
  infoChat: boolean;
  powerChat: boolean;
};

export const ChatFaceBoxText = styled.p<ChatFaceBoxTextType>`
  width: 0%;
  height: 4.5rem;
  overflow: hidden;
  line-height: 4.5rem;
  animation-delay: 800ms;
  animation-duration: 1500ms;
  animation-fill-mode: forwards;
  animation-name: ChatFaceBoxTextAnimation;
  width: ${({ infoChat }) => (infoChat ? "0%" : "0% !important")};

  @keyframes ChatFaceBoxTextAnimation {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;
