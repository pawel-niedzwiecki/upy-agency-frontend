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
  height: calc(100vh - 12rem);
  background-position: center;
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
    background-size: 70% auto;
    height: calc(100vh - 6rem);
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
  width: 26rem;
  height: 15rem;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;

  @media all and (min-width: 768px) {
    width: 40rem;
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
