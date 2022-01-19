import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SelectType } from "./component.input.select.type";
import { SelectBox, Select, Option } from "./component.input.select.style";

export const InputSelect = ({ id, name, options }: SelectType) => {
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

  return (
    <SelectBox mask={arrow.publicURL}>
      <Select id={id} name={name}>
        {options.map((option, i) => {
          return (
            <Option value={option.value} key={i}>
              {option.name}
            </Option>
          );
        })}
      </Select>
    </SelectBox>
  );
};
