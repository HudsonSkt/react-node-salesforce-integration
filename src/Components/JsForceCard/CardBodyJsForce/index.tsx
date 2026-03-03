import * as S from "./cardBodyJsforce.style";
 
interface CardBodyProps {
  children: React.ReactNode;

  // user: {
  //   description: string;
  // };
}

export const CardBodyJsForce = ({  children}: CardBodyProps) => {
  return <S.CardBody>{children}</S.CardBody>;
};
