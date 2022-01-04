import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  display: flex;
  padding-top: 3rem;
  position: relative;
  flex-direction: column;
`;

interface TextPtops {
  active: boolean;
}

export const Text = styled.p<TextPtops>`
  font-size: 1.2rem;
  position: absolute;
  transition: all 0.3s;
  left: ${({ active }) => (active ? "0.2rem" : "1rem")};
  top: ${({ active }) => (active ? "1rem" : "3.8rem")};
`;

interface TextAreaStyledPtops {
  error: boolean;
}

export const TextAreaStyled = styled.textarea<TextAreaStyledPtops>`
  width: 100%;
  height: 8rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.break.main};
  background-color: ${({ error, theme }) => (error ? "rgb(255 0 0 / 10%)" : `transparent`)};
  border: ${({ error, theme }) => (error ? "0.1rem solid red" : `0.1rem solid ${theme.colorRiverBed}`)};

  &:focus {
    outline: none;
  }
`;
