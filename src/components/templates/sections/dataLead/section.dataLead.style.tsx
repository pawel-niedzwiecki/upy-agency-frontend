import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 5rem 0;
  position: relative;

  .description {
    display: flex;
    align-items: center;
  }

  @media all and (max-width: 960px) {
    .description {
      padding-bottom: 4rem;
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
  padding: 0.5rem 0;

  @media all and (min-width: 768px) {
    flex: 50%;
    width: 50%;
  }

  &::before {
    top: 0.6rem;
    content: "";
    width: 2rem;
    height: 2rem;
    opacity: 0.4;
    position: relative;
    margin-right: 1rem;
    display: inline-block;
    background-color: ${({ theme }) => theme.colorWhite};
    mask-image: url(${({ checkedIcon }) => checkedIcon});
  }
`;

export const TitleForm = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
