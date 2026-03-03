import * as S from "./cardFoorter.style";
interface PropsCardFooter {
  children: React.ReactNode;
  button: {
    option: string;
  };
}

export const CardFooter = ({ button, children }: PropsCardFooter) => {
  return (
    <S.CardFooter>
      {button.option}
      {children}
    </S.CardFooter>
  );
};
