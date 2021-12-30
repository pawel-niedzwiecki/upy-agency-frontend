import styled from "styled-components";
import { SelectStyleType } from "./component.input.select.type";

export const SelectBox = styled.div<SelectStyleType>`
  flex: 100%;
  height: 2.5em;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;

  @media all and (min-width: 768px) {
    height: 3em;
  }

  &::after {
    top: 1.6rem;
    right: 1rem;
    content: "";
    height: 1rem;
    width: 1.5rem;
    display: block;
    position: absolute;
    mask-repeat: no-repeat;
    mask-image: ${({ mask }) => `url(${mask})`};
    background-color: ${({ theme }) => theme.colorWhite};

    @media all and (min-width: 768px) {
      top: 2rem;
    }
  }
`;

export const Select = styled.select`
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;

  flex: 1;
  padding: 0 1em;
  color: #fff;
  background-color: ${({ theme }) => theme.colorBlue};
  background-image: none;
  cursor: pointer;
  font-size: 1.6rem;
  position: relative;
  z-index: 0;

  @media all and (min-width: 768px) {
    font-size: 2rem;
  }

  &::-ms-expand {
    display: none;
  }
`;

export const Option = styled.option``;
