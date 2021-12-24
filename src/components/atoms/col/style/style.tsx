// import plugin
import styled, { css } from "styled-components";

//creata interface

interface ColProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

// create new style
const Col = styled.div<ColProps>`
  width: 100%;
  position: relative;
  padding-left: ${({ theme }) => theme.break.main};
  padding-right: ${({ theme }) => theme.break.main};

  ${({ theme, xs }) =>
    xs &&
    css`
      flex: ${(100 * xs) / theme.gridCol}%;
      max-width: ${(100 * xs) / theme.gridCol}%;
    `}

  ${({ theme, sm }) =>
    sm &&
    css`
      @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "sm")]
          .break}) {
        flex: ${(100 * sm) / theme.gridCol}%;
        max-width: ${(100 * sm) / theme.gridCol}%;
      }
    `}

    ${({ theme, md }) =>
    md &&
    css`
      @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "md")]
          .break}) {
        flex: ${(100 * md) / theme.gridCol}%;
        max-width: ${(100 * md) / theme.gridCol}%;
      }
    `}
  

  ${({ theme, lg }) =>
    lg &&
    css`
      @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "lg")]
          .break}) {
        flex: ${(100 * lg) / theme.gridCol}%;
        max-width: ${(100 * lg) / theme.gridCol}%;
      }
    `}

  ${({ theme, xl }) =>
    xl &&
    css`
      @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "xl")]
          .break}) {
        flex: ${(100 * xl) / theme.gridCol}%;
        max-width: ${(100 * xl) / theme.gridCol}%;
      }
    `}

    ${({ theme, xxl }) =>
    xxl &&
    css`
      @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "xxl")]
          .break}) {
        flex: ${(100 * xxl) / theme.gridCol}%;
        max-width: ${(100 * xxl) / theme.gridCol}%;
      }
    `}
`;

// Export new style
export default Col;
