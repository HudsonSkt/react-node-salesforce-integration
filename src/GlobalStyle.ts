import { createGlobalStyle } from "styled-components";
interface Props {
  theme?: {
    body: string;
    fontColor: string;
  };
}
// background-color: ${({ theme }) => theme.body};
// Color: ${({ theme }) => theme.fontColor};
export const GlobalStyle = createGlobalStyle<Props>`
 
:root {
  // --bg-black: oklch(0.145 0 0);
  // --bg-card: oklch(0.19 0 0); /* Um preto levemente mais claro para os cards */
  // --border: oklch(0.30 0 0);
  }
  
  // background-color:#0B0F19;
  html, body {
   background-color:#0D1B3E;
    color: white;

    margin: 0;
    padding: 0;
     font-family: 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    }
    
    // #root {
      //   min-height: 100vh;
      //    }
      
      `;

//   // background-color: ${({ theme }) => theme.body};
