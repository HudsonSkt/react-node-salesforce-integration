import * as S from "./cardBody.style";
 
interface CardBodyProps {
  children: React.ReactNode;

  user: {
    description: string;
  };
}

export const CardBody = ({ user }: CardBodyProps) => {
  return <S.CardBody>{user.description} </S.CardBody>;
};
