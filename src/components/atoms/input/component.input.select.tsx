import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SelectType } from "./component.input.select.type";
import { SelectBox, Select, Option } from "./component.input.select.style";

export const InputSelect = ({ options }: SelectType) => {
  const { arrow } = useStaticQuery(
    graphql`
      query {
        arrow: file(name: { eq: "arrow" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  console.log(arrow);

  return (
    <SelectBox mask={arrow.publicURL}>
      <Select>
        {options.map((option, i) => {
          return (
            <Option value={option} key={i}>
              {option}
            </Option>
          );
        })}
      </Select>
    </SelectBox>
  );
};
