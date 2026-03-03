import styled from "styled-components";

export type VariantProps = "default" | "compact";

interface PropsCardMain {
  variant: "default" | "compact";
}

const variants: Record<
  VariantProps,
  {
    max_width: string;
    min_width: string;
  }
> = {
  default: {
    max_width: "300px",
    min_width: "300px",
  },
  compact: {
    max_width: "290px",
    min_width: "290px",
  },
};

export const Card = styled.div<PropsCardMain>`
  align-content: center;
  justify-content: center;
  justify-items: stretch;
  flex: 1 1 150px;
  max-width: ${({ variant }) => variants[variant].max_width};
  min-width: ${({ variant }) => variants[variant].min_width};
`;
