import styled from "styled-components";

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
    bottom: 40rem;
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
