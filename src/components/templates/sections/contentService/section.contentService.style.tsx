import styled from "styled-components";

type Sitetype = {
  site: boolean;
};

export const Section = styled.section<Sitetype>`
  width: 100%;
  display: flex;
  padding: 5rem 0;
  position: relative;

  .description {
    order: 1;
    display: flex;
    align-items: center;
  }
  .img {
    order: 0;
    padding-bottom: 4rem;

    img {
      display: block;
      max-width: 100%;
    }
  }

  @media all and (min-width: 768px) {
    .description {
      order: ${({ site }) => (site ? "1" : "0")};
    }

    .img {
      order: ${({ site }) => (site ? "0" : "1")};
    }
  }
`;

export const Title = styled.h1`
  line-height: 1;
  font-weight: bold;
  font-size: 3.6rem;
  padding-bottom: 2rem;
`;

export const BoxContent = styled.div`
  position: relative;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  padding-bottom: 3rem;
`;

export const ListOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

type OptionType = {
  checkedIcon: string;
};

export const Option = styled.li<OptionType>`
  flex: 100%;
  width: 100%;
  font-weight: bold;
  position: relative;
  padding-left: 3rem;
  padding-right: 1rem;
  padding-bottom: 2rem;

  @media all and (min-width: 768px) {
    flex: 50%;
    width: 50%;
  }

  &::before {
    left: 0;
    top: 0rem;
    content: "";
    width: 2rem;
    height: 2rem;
    opacity: 0.4;
    position: absolute;
    display: inline-block;
    mask-image: url(${({ checkedIcon }) => checkedIcon});
    background-color: ${({ theme }) => theme.colorWhite};
  }
`;

export const BoxImg = styled.div`
  width: 100%;
  display: flex;
  height: 30rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colorGray};

  @media all and (min-width: 768px) {
    height: 40rem;
  }
`;
