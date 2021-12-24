import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: unset;
  overflow: hidden;
  position: relative;

  .bg {
    background-size: 30rem;
    background-repeat: no-repeat;
    background-position: right bottom;

    @media all and (min-width: 768px) {
      background-size: 35rem;
    }

    @media all and (min-width: 1024px) {
      background-size: 50rem;
    }

    @media all and (min-width: 1170px) {
      background-size: 60rem;
    }
  }

  .col {
    padding: 0;
    display: flex;
    height: 100vh;
    min-height: 40rem;
    flex-direction: column;
    justify-content: center;

    @media all and (min-width: 768px) {
      padding: 0 1rem;
      min-height: 62rem;
    }
  }

  .btn {
    font-size: 1.4rem;
    animation-duration: 500ms;
    margin: 3rem auto 0rem auto;
    animation-fill-mode: forwards;
    animation-name: startAnimation4;

    @media all and (min-width: 768px) {
      margin: 3rem auto 0rem 0;
      font-size: 1.6rem;
    }

    @media all and (min-width: 1170px) {
      font-size: 2rem;
    }
  }

  @keyframes startAnimation4 {
    from {
      opacity: 0;
      top: 0rem;
    }
    to {
      opacity: 1;
      top: 3rem;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--uxu-pl-text);
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: startAnimation1;

  @media all and (min-width: 768px) {
    text-align: left;
    font-size: 3.9rem;
  }

  @media all and (min-width: 1024px) {
    font-size: 5rem;
  }

  @media all and (min-width: 1170px) {
    font-size: 6.1rem;
  }

  @keyframes startAnimation1 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 0rem;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  animation-duration: 500ms;
  color: var(--uxu-pl-text-off);
  animation-fill-mode: forwards;
  animation-name: startAnimation2;

  @media all and (min-width: 768px) {
    text-align: left;
    font-size: 2.3rem;
  }

  @media all and (min-width: 1024px) {
    font-size: 2.6rem;
  }

  @media all and (min-width: 1170px) {
    font-size: 3.1rem;
  }

  @keyframes startAnimation2 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 0rem;
    }
  }
`;

export const List = styled.ul`
  left: 0;
  width: 100%;
  bottom: 3rem;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  justify-content: center;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: startAnimation3;

  @keyframes startAnimation3 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 2rem;
    }
  }

  @media all and (min-width: 768px) {
    left: 1rem;
    bottom: 6rem;
    flex-wrap: nowrap;
    width: max-content;

    @keyframes startAnimation3 {
      from {
        bottom: 0rem;
        padding-top: auto;
      }
      to {
        bottom: 6rem;
        padding-top: auto;
      }
    }
  }
`;

export const Item = styled.li`
  width: max-content;
  position: relative;
  padding: 0.5rem 1rem;

  @media all and (min-width: 768px) {
    padding: 0 4rem;
    width: max-content;
  }

  &::after {
    top: 1.4rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    content: "";
    display: block;
    right: -0.3rem;
    position: absolute;
    background: var(--uxu-pl-text-off);

    @media all and (min-width: 768px) {
      top: 2rem;
      width: 3rem;
      right: -1.5rem;
      height: 0.1rem;
    }

    @media all and (min-width: 768px) {
      top: 1.3rem;
      width: 3rem;
      right: -1.5rem;
    }

    @media all and (min-width: 1024px) {
      top: 1.5rem;
    }

    @media all and (min-width: 1170px) {
      top: 2rem;
    }
  }

  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;

    &::after {
      display: none;
    }
  }

  button,
  a {
    padding: 0;
    border: none;
    border-radius: 0;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;

    @media all and (min-width: 768px) {
      font-size: 2.3rem;
    }

    @media all and (min-width: 1024px) {
      font-size: 2.6rem;
    }

    @media all and (min-width: 1170px) {
      font-size: 3.2rem;
    }

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.aqua};
    }
  }

  @media all and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
`;

export const ModalContent = styled.div`
  width: 100%;
  display: block;
  max-width: 55rem;
  position: relative;
  padding-top: 12rem;
`;

export const ModdalTitle = styled.h1`
  width: 100%;
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;

  @media all and (min-width: 1024px) {
    font-size: 3rem;
  }

  @media all and (min-width: 1170px) {
    font-size: 4rem;
  }
`;

export const ModdalDescription = styled.p`
  width: 100%;
  display: block;
  font-size: 1.6rem;
  text-align: center;

  @media all and (min-width: 1024px) {
    font-size: 1.8rem;
  }

  @media all and (min-width: 1170px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
