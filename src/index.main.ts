import styled from "styled-components";

interface PropsMain {
  children: React.ReactNode;
}

export const Main = styled.div<PropsMain>`
 

  // font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  // line-height: 1.5;
  // font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;


  // display: flex;
 `; 
// background: linear-gradient(
  //   42deg,
  //   #2a2a2a 0%,
  //   #181616 70%,
  //   #090a0c 100%
  // );