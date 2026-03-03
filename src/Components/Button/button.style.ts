import styled from "styled-components";

export type ButtonColor = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

interface StyledButtonProps {
  color: ButtonColor;
  size: ButtonSize;
}
const colors: Record<
  ButtonColor,
  { background: string; text: string; hover: string; border: string }
> = {
  primary: {
    text: "#FFFFFF",

    background: "linear-gradient(135deg, #14142B, #6C63FF)",
    hover: "linear-gradient(135deg, #5B53F0, #4338CA)",
    border: "rgba(108, 99, 255, 0.4)",
  },
  secondary: {
    background: "#151a2d",
    text: "#FFFFFF",
    hover: "#1e2540",
    border: "rgba(255, 255, 255, 0.15)",
  },
  danger: {
    background: "#dc2626",
    text: "#FFFFFF",
    hover: "#b91c1c",
    border: "rgba(220, 38, 38, 0.4)",
  },
};
const sizes: Record<
  ButtonSize,
  { padding: string; fontSize: string; width?: string; margin?: string }
> = {
  small: {
    padding: "8px 12px",
    fontSize: "12px",
    margin: "4px",
  },
  medium: {
    padding: "12px 20px",
    fontSize: "14px",
  },
  large: {
    padding: "14px 24px",
    fontSize: "14px",
    width: "150px",
  },
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid white;
  cursor: pointer;
  margin-top: 10px;
  transition:
    background 0.2s ease;
    opacity 0.2s ease;
  justify-content: flex-start;
  gradient: linear-gradient(135deg, #7c3aed, #9333ea);

  border: "rgba(37, 99, 235, 0.4)";

  align-items: center;
  background: ${({ color }) => colors[color].background};
  color: ${({ color }) => colors[color].text};

  padding: ${({ size }) => sizes[size].padding};
  font-size: ${({ size }) => sizes[size].fontSize};
  margin: ${({ size }) => sizes[size].margin};
  width: ${({ size }) => sizes[size].width};

  &:hover {
    background: ${({ color }) => colors[color].hover};
    color: black;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
