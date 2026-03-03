import styled from "styled-components";

interface Props {
  isOpen?: boolean;
}
export const Content = styled.div<Props>`
  margin-left: ${(props) => (props.isOpen ? "220px" : "0px")};
  transition: margin-left 0.3s ease;
  // padding: 30px;
`;

// export const ToggleButton = styled.div<Props>`
//   left: ${(props) => (props.isOpen ? "200px" : "60px")};

//   width: 60px;
//       // padding: 5px;
//   align-self: flex-start;
//   margin-left: 0px;
//   cursor: pointer;

// `;
export const ToggleButton = styled.div<Props>`
  position: fixed;

  left: ${(props) => (props.isOpen ? "200px" : "17px")};

  transform: translateX(-50%);
  transition: left 0.3s ease;

  // margin: 10px;
  padding: 8px;

  cursor: pointer;
  z-index: 1100;
`;
export const MainDiv = styled.aside<Props>`
  width: ${(props) => (props.isOpen ? "220px" : "0px")};
  border-right: 1px solid white;
  box-shadow: white 0px 0px 1px 0.1px;
  position: fixed;
  height: 100vh;
  transition: width 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #010c27;
`;

// export const MainDiv = styled.aside<Props>`
//   width: ${(props) => (props.isOpen ? "220px" : "60px")};

//   position: fixed;
//   align-items: center;
//   height: 100vh;

//   transition: width 0.3s ease;

//   overflow: hidden;
//   // flex-shrink: 0;
//   white-space: nowrap;

//   display: flex;
//   flex-direction: column;
//   background: oklch(0.145 0 0);
//   box-shadow: 0 0 5px 3px oklch(0.145 0 0);
//   background: oklch(0.145 0 0);
//   border-radius: 10px;
// `;
export const Header = styled.header`
  justify-content: center;
  display: flex;
  gap: 10px;
  text-align: center;
  font-size: 30px;
  padding: 40px;
`;

export const DivItems = styled.div`
  gap: 10px;
  text-align: left;
  margin: 30px;
`;

// interface PropSide {
//   color: string;
//   title?: string;

//   onClick?: () => void;
// }
// export const ButtonSide = styled.div<PropSide>`
//   width: 0px;
//   border: 10px;
//   font-size: 24px;
//   cursor: pointer;
//   float: right;
//   bottom: 30px;
//   left: 20px;
//   aling-items: center;
//   font-size: 1rem;
//   ${(PropSide) =>
//     PropSide.color === "firtColor" &&
//     `
//       ${() =>
//         (PropSide.color =
//           " background-color: oklch(0.145 0 0);  color: white; margin: 10px; border: 0px solid black; ")} &:hover {
//         background-color: white;
//         color: black;

//       }
//     `}
// `;
