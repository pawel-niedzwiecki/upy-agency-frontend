import React from "react";

// import component
import Header from "components/templates/header/index.header";

// create interface
interface LayoutComponentProps {
  children: JSX.Element | JSX.Element[];
}

// create new component
const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

// export component
export default LayoutComponent;
