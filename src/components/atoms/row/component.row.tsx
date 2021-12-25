import React from "react";
import Row from "./component.row.style";

type RowProps = {
  children: JSX.Element | JSX.Element[] | any;
};

const RowComponent = ({ children }: RowProps) => {
  return <Row>{children}</Row>;
};

export default RowComponent;
