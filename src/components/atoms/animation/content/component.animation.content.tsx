import React from "react";
import { Square } from "./component.animation.content.style";
import { SquareProps } from "./component.animation.content.type";

export const SquareConent = ({ height, typ }: SquareProps) => <Square typ={typ} height={height} />;
