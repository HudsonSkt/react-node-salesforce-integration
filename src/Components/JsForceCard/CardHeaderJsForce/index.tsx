import * as S from "./cardHeaderJsForce.style";

interface CardUserHeaderProps {
  children: React.ReactNode;
}
export const CardHeaderJsforce = ({children }: CardUserHeaderProps) => {
  return (<>
  
  <S.CardHeaderJsforce >
    {children}

  </S.CardHeaderJsforce>

  </>
  );
};
 
export const CardProfileJsforce = ({children }: CardUserHeaderProps) => {
  return (<>
  
  <S.Profile >
    {children}

  </S.Profile>

  </>
  );
};
