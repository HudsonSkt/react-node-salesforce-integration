import styled from "styled-components";
import type { ThemeType } from "./theme";
  
export const Containers = styled.div<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.fontColor};
`;
