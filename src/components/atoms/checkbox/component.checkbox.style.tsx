// import plugin
import styled, { css } from "styled-components";

interface LabelProps {
  checkedInput: boolean;
}

export const Label = styled.label<LabelProps>`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  padding-top: 3rem;
  position: relative;
  align-items: center;
`;

interface RoadProps {
  error: boolean;
  checkedInput: boolean;
}

export const Road = styled.div<RoadProps>`
  flex: 0 60px;
  width: 60px;
  height: 36px;
  display: block;
  transition: 0.5s;
  position: relative;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.colorRiverBed};

  ${({ checkedInput, error }) =>
    checkedInput
      ? css`
          border: ${({ theme }) => `1px solid ${theme.colorAqua}`};
        `
      : error && !checkedInput
      ? css`
          border: ${({ theme }) => `1px solid red`}};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colorRiverBed};
        `}
`;

interface FaceProps {
  error: boolean;
  checkedInput: boolean;
}

export const Face = styled.i<FaceProps>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  transition: 0.5s;
  border-radius: 50%;
  background: ${({ theme }) => theme.colorWhite};

  ${({ checkedInput, error }) =>
    checkedInput
      ? css`
          left: 28px;
          background: ${({ theme }) => theme.colorAqua};
        `
      : error && !checkedInput
      ? css`
          left: 4px;
          background: ${({ theme }) => "red"};
        `
      : null}

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colorBlueDark};
    box-shadow: 12px 0 0 ${({ theme }) => theme.colorBlueDark};
    transition: 0.5s;
  }

  &::after {
    content: "";
    bottom: 6px;
    width: 12px;
    height: 4px;
    transition: 0.5s;
    position: absolute;
    left: calc(50% - 6px);
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.colorBlueDark};

    ${({ checkedInput }) =>
      !!checkedInput &&
      css`
        bottom: 2px;
        height: 8px;
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      `}
  }
`;

export const Text = styled.p`
  display: block;
  font-size: 1.2rem;
  position: relative;
  transition: all 0.3s;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  padding-left: ${({ theme }) => theme.break.main};
`;

export const CheckBoxStyled = styled.input`
  display: none;
`;
