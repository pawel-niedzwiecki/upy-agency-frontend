// import plugin
import React from "react";

// import style
import Col from "./component.col.style";

// create interface
interface ColComponentProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  style?: any;
  className?: string;
  ref?: JSX.Element | JSX.Element[] | any;
  children?: JSX.Element | JSX.Element[] | any;
}

// create new component
const ColComponent = ({ children, style, className, ref, xs, sm, md, lg, xl, xxl }: ColComponentProps, props: any) => {
  return (
    <>
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} style={style} className={className} ref={ref} {...props}>
        {children}
      </Col>
    </>
  );
};

// export new component
export default ColComponent;
