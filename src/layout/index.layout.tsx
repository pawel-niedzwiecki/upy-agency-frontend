import React from "react";
import { Helmet } from "react-helmet";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/style/GlobalStyle";
import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/index.footer";

interface LayoutComponentProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={settings}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default LayoutComponent;
