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
  background: ${({ theme }) => theme.colorGray};

  @media all and (min-width: 768px) {
    padding: 2rem 4rem;
  }

  &::after {
    content: "";
    top: -12rem;
    width: 20rem;
    height: 20rem;
    right: -10rem;
    display: block;
    position: absolute;
    background-position: center;
    background-size: 20rem 20rem;
    background-image: url(${({ additionalBg }) => additionalBg});

    @media all and (min-width: 768px) {
      width: 50rem;
      height: 50rem;
      top: -25rem;
      right: -20rem;
      background-size: 50rem 50rem;
    }
  }
`;

export const Description = styled.p`
  font-size: 2rem;
`;
