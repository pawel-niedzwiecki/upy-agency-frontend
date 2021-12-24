import React, { useState } from "react";
import { Label, Text, InputStyled } from "./index.input.style";

export const Input = ({ id, type, label, pattern, error, register, required }: any) => {
  const [active, setActive] = useState(false);

  return (
    <Label htmlFor={id}>
      <Text active={active}>{label}</Text>
      <InputStyled
        id={id}
        type={type}
        error={!!error}
        onFocus={() => setActive(true)}
        onBlur={(e) => setActive(!!e.target.value.length)}
        {...register(id, { pattern, required })}
      />
    </Label>
  );
};
