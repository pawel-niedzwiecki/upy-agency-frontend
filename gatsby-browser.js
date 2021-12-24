import React from "react";
import theme from "./src/assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/assets/style/GlobalStyle";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
