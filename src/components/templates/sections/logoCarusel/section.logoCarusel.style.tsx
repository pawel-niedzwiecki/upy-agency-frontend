import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 10rem;
  display: flex;
  position: relative;
  align-items: center;
  background: ${({ theme }) => theme.colorGray};

  @media all and (min-width: 768px) {
    height: 15rem;
  }

  .slide {
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  white-space: nowrap;

  @media all and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media all and (min-width: 1024px) {
    font-size: 3.6rem;
  }
`;
