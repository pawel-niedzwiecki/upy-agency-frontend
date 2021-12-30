import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  min-height: 20rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: 70% auto;
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
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
