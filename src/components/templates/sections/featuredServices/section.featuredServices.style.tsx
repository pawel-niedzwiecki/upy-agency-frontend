import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;

  @media all and (min-width: 768px) {
    padding: 10rem 0;
  }
`;

export const BoxServices = styled.div`
  min-height: 28rem;
  padding: 2rem 4rem;
  position: relative;
  background: linear-gradient(90deg, rgb(25, 32, 55) 20%, rgb(10, 18, 42) 100%);
`;

export const ImgBox = styled.div`
  width: 100%;
  display: block;
  position: relative;
  padding-bottom: 3rem;

  @media all and (min-width: 768px) {
    left: -5rem;
    bottom: -4rem;
    height: 25rem;
    padding-bottom: 0;
  }

  @media all and (min-width: 1280px) {
    left: -7rem;
    bottom: -6rem;
    height: 25rem;
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  width: 100%;
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const Excerpt = styled.p`
  width: 100%;
  display: block;
  padding-bottom: 2rem;
`;

export const ListOptions = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 2rem;
    white-space: nowrap;
  }
`;
