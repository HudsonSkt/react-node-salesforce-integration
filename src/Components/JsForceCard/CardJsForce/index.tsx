import * as S from "./cardJsForce.style";

interface MyProps {
  children: React.ReactNode;
  variant: "default" | "compact";
}

export const CardJsForce = ({ children, variant }: MyProps) => {
  return <S.CardJsForce_ variant={variant}>{children}</S.CardJsForce_>;
};
