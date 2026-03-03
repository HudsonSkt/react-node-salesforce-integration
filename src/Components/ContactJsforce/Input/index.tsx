import type React from "react";
import * as S from "./InputContactHeader.style";

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({placeholder, onChange}:InputProps) => {

  return <S.StyledInput onChange={onChange} placeholder={placeholder} />
}

