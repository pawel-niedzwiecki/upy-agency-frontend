// import plugin
import React from "react";

// import style
import { ButtonStyled, ButtonCyrlicStyled, ButtonOutLinkStyled, ButtonInLinkStyled, ButtonSubmitStyled } from "./component.button.style";

// create interface
interface ButtonProps {
  onClick?: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
};

// create interface
interface ButtonOutLinkProps {
  href: string;
  title?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonOutLink = ({ children, href, title }: ButtonOutLinkProps, props: any) => {
  return (
    <ButtonOutLinkStyled href={href} title={title} target="_blank">
      {children}
    </ButtonOutLinkStyled>
  );
};

interface ButtonInLinkProps {
  href: string;
  style?: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

export const ButtonInLink = ({ children, href, className, style }: ButtonInLinkProps) => {
  return (
    <ButtonInLinkStyled to={href} className={className} style={style}>
      {children}
    </ButtonInLinkStyled>
  );
};

// create interface
interface ButtonSubmitProps {
  style?: any;
  onClick?: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonSubmit = ({ children, className, onClick, style }: ButtonSubmitProps) => {
  return (
    <ButtonSubmitStyled onClick={onClick} className={className} style={style} type="submit">
      {children}
    </ButtonSubmitStyled>
  );
};
