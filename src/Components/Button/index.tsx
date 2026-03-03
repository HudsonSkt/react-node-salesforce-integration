import type { ReactNode } from "react";
import type { ButtonColor, ButtonSize } from "./button.style";
import * as S from "./button.style";


interface PropsBut {
  color: ButtonColor;
  size: ButtonSize;
  title?: string;
  children?: ReactNode;
  onClick?: () => void;
  onSubmit?: () => void;
  iconLeft?: ReactNode;
}

export function Button({ size, color, title, onClick, iconLeft, children, onSubmit}: PropsBut) {
  return (
    <S.StyledButton color={color} size={size} onClick={onClick} onSubmit={onSubmit}>
      {iconLeft} {' '}
      {title}{children}
    </S.StyledButton>
  );
}
