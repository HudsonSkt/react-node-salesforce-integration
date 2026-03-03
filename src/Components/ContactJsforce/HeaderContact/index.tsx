import * as S from "./CardContactHeader.style";


interface MyProps {
  children: React.ReactNode;

}

export const CardContactForcePageHeader = ({ children }: MyProps) => {
  return <S.CardContactForcePageHeader>{children}</S.CardContactForcePageHeader>;
};

