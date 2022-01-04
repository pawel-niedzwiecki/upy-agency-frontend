import React, { useState } from "react";
import { Label, Text, TextAreaStyled } from "./index.textarea.styled";

export const TextArea = ({ id, label, pattern, error, register, required }: any) => {
  const [active, setActive] = useState(false);
  return (
    <Label htmlFor={id}>
      <Text active={active}>{label}</Text>
      <TextAreaStyled id={id} error={!!error} onFocus={() => setActive(true)} onBlur={(e) => setActive(!!e.target.value.length)} {...register(id, { pattern, required })} />
    </Label>
  );
};
