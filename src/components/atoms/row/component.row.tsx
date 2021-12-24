// Import plugin
import React from "react";

// Import style
import Row from "./component.row.style";

// TypeScript for Props
type RowProps = {
  children: JSX.Element | JSX.Element[] | any;
};

// create new component
const RowComponent = ({ children }: RowProps) => {
  return <Row>{children}</Row>;
};

// export new component
export default RowComponent;
