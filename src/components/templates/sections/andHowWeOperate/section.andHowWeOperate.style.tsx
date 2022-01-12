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
    min-height: 62rem;
    background-size: auto 60rem;
    background-repeat: no-repeat;
    background-position: 95% 150%;
  }
`;

export const Title = styled.h1`
  display: block;
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: 3rem;

  @media all and (min-width: 768px) {
    font-size: 3.6rem;
  }
`;
