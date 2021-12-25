import React from "react";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/style/GlobalStyle";
import Header from "components/templates/header/index.header";

interface LayoutComponentProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <ThemeProvider theme={settings}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default LayoutComponent;
