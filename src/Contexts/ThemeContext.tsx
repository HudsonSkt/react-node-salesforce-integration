// import {
//   createContext,
//   useState,
//   useContext,
//   type ReactNode,
//   useEffect,
// } from "react";
// import { ThemeProvider } from "styled-components";
//  import { GlobalStyle } from "../GlobalStyle";
// import { darkTheme, lightTheme } from "./theme";

// type ThemeType = "light" | "dark";
                                                                                    
// type ThemeContextType = {
//   toggleTheme: () => void;
//   theme: string;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used inside AppThemeProvider");
//   }
//   return context;
// }

// export function AppThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<ThemeType>(() =>  );

//   useEffect(() => {
//     setItem(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, theme }}>
//       <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// }
