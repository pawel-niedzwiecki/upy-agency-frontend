// import plugin
import styled, { css } from "styled-components";

// create interface
interface SquareProps {
  typ?: string;
  height: number;
}

// create styled
export const Square = styled.div<SquareProps>`
  width: 100%;
  display: block;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
  height: ${({ height }) => `${height}rem`};

  &::after {
    width: 100%;
    content: "";
    height: 100%;
    display: block;
    position: absolute;
    animation-duration: 1.5s;
    animation-name: loadContent;
    animation-iteration-count: infinite;
    ${({ typ }) =>
      typ === "dark"
        ? css`
            background: linear-gradient(90deg, rgba(10, 18, 42, 1) 10%, rgba(4, 8, 21, 1) 50%, rgba(10, 18, 42, 1) 90%);
          `
        : css`
            background: linear-gradient(90deg, rgba(4, 8, 21, 1) 10%, rgba(10, 18, 42, 1) 50%, rgba(4, 8, 21, 1) 90%);
          `}
  }

  @keyframes loadContent {
    to {
      left: 100%;
    }

    from {
      left: -100%;
    }
  }
`;
