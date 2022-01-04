import React, { useState } from "react";
import { Label, Text, CheckBoxStyled, Road, Face } from "./component.checkbox.style";

// create new cpomponent
export const CheckBox = ({ id, type, label, pattern, error, register, required }: any) => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <Label htmlFor={id} checkedInput={checkedInput} {...register(id, { pattern, required })}>
      <CheckBoxStyled id={id} name={id} type="checkbox" onChange={(e) => setCheckedInput(e.target.checked)} />
      <Road checkedInput={checkedInput} error={!!error}>
        <Face checkedInput={checkedInput} error={!!error} />
      </Road>
      <Text>{label}</Text>
    </Label>
  );
};
