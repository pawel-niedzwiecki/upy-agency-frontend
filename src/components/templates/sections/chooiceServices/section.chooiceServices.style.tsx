import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding-bottom: 5rem;
  min-height: calc(100vh - 24rem);

  .nav {
    display: flex;
    padding-top: ${({ theme }) => theme.break.main};

    button {
      margin-left: auto;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
  padding-bottom: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
