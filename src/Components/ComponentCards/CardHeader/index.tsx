import * as S from "./cardHeader.style";

interface CardUserHeaderProps {
  children: React.ReactNode;
}
export const CardHeader = ({children }: CardUserHeaderProps) => {
  return (<>
  
  <S.CardHeader >
    {children}

  </S.CardHeader>

  </>
  );
};
