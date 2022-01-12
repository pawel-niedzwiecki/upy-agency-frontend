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
  font-weight: bold;
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
