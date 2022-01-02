import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 13rem;
  display: flex;
  position: relative;
  align-items: center;
  background: ${({ theme }) => theme.colorBlue};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
`;
