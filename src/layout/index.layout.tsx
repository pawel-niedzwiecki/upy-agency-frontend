import React from "react";

import Header from "components/templates/header/index.header";

interface LayoutComponentProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutComponent;
