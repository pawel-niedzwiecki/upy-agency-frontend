import React, { useState } from "react";
import { Label, CheckBoxClassicText, CheckBoxStyled, CheckBoxClassicRoad, CheckBoxClassicFace, CheckBoxServiceBox, CheckBoxServiceText, CheckBoxServiceChecked } from "./component.checkbox.style";

export const CheckBox = ({ id, type, label, pattern, error, register, required }: any) => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <Label htmlFor={id} checkedInput={checkedInput} {...register(id, { pattern, required })}>
      <CheckBoxStyled id={id} name={id} type="checkbox" onChange={(e) => setCheckedInput(e.target.checked)} />
      <CheckBoxClassicRoad checkedInput={checkedInput} error={!!error}>
        <CheckBoxClassicFace checkedInput={checkedInput} error={!!error} />
      </CheckBoxClassicRoad>
      <CheckBoxClassicText>{label}</CheckBoxClassicText>
    </Label>
  );
};

export const CheckBoxService = ({ id, type, check, label, error, register, required }: any) => {
  const [checkedInput, setCheckedInput] = useState(check ? true : false);

  return (
    <Label htmlFor={id} checkedInput={checkedInput} {...register(id, { required })}>
      <CheckBoxStyled id={id} name={id} type="checkbox" onChange={(e) => setCheckedInput(e.target.checked)} />
      <CheckBoxServiceBox checkedInput={checkedInput}>
        <CheckBoxServiceText>{label}</CheckBoxServiceText>
        <CheckBoxServiceChecked checkedInput={checkedInput} error={!!error} />
      </CheckBoxServiceBox>
    </Label>
  );
};
