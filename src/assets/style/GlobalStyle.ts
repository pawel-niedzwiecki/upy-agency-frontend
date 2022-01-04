import * as styled from "styled-components";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

interface GlobalStyleProps {
  theme: {
    colorAqua: string;
    colorBlue: string;
    colorWhite: string;
    colorBlack: string;
    colorBlueDark: string;
  };
}

const GlobalStyle = styled.createGlobalStyle<GlobalStyleProps>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: ${({ theme }) => theme.colorWhite};
    background-color: ${({ theme }) => theme.colorBlueDark};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
  }

  p,
  b,
  a,
  span,
  strong {
    font-family: "Open Sans", sans-serif;
  }

  b,
  strong {
    font-weight: bold;
  }

  a {
    opacity: 1;
    transition: all 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.colorAqua};

    &:hover {
      color: ${({ theme }) => theme.colorWhite};
    }
  }

  svg {
    transition: all 0.3s;
    fill: ${({ theme }) => theme.colorWhite};
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  section {
    width: 100%;
    position: relative;
  }
`;

export default GlobalStyle;
