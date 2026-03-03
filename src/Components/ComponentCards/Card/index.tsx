import * as S from "./card.style";

interface MyProps {
  children: React.ReactNode;
  variant: "default" | "compact";
}

export const Card = ({ children, variant }: MyProps) => {
  return <S.Card variant={variant}>{children}</S.Card>;
};
