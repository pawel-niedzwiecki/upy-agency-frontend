// Import plugin
import React from "react";

// Import style
import Container from "./style/style";

// TypeScript for Props
type ContainerComponentProps = {
  size?: string;
  style?: {};
  className?: string;
  children: JSX.Element | JSX.Element[];
};

// create new component
const ContainerComponent = ({ size, style, className, children }: ContainerComponentProps, props: any) => {
  return (
    <>
      <Container size={size} style={style} className={className}>
        {children}
      </Container>
    </>
  );
};

// export new component
export default ContainerComponent;
