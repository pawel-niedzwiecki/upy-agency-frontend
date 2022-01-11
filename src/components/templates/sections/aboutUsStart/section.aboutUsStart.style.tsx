import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  padding-bottom: 5rem;
`;

export const Title = styled.h1`
  padding: 2rem 0;
  font-size: 3.6rem;
`;

type BoxContentType = {
  additionalBg: string;
};

export const BoxContent = styled.div<BoxContentType>`
  padding: 2rem;
  display: flex;
  overflow: hidden;
  min-height: 30rem;
  position: relative;
  align-items: center;
  background: linear-gradient(90deg, rgb(25, 32, 55) 20%, rgb(10, 18, 42) 100%);

  @media all and (min-width: 768px) {
    padding: 2rem 4rem;
  }

  &::after {
    top: -10rem;
    width: 20rem;
    right: -10rem;
    display: block;
    position: absolute;
    content: url(${({ additionalBg }) => additionalBg});

    @media all and (min-width: 768px) {
      top: -20rem;
      width: 50rem;
      right: -20rem;
    }
  }
`;

export const Description = styled.p`
  font-size: 2rem;
`;
