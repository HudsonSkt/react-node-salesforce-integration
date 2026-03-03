import * as S from "./cardFoorterJsForce.style";
interface PropsCardFooter {
  children: React.ReactNode;
  button: {
    option: string;
  };
}

export const CardFooterJsForce = ({ button, children }: PropsCardFooter) => {
  return (
    <S.CardFooter>
      {button.option}
      {children}
    </S.CardFooter>
  );
};
