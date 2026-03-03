// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "../../Contexts/theme";
import { Containers } from "../../Contexts/Container";
import { DivHomePage } from "./styled";
// import { useTheme } from "../../Contexts/ThemeContext";

export default function HomePage() {
  // const [theme, setTheme] = useState("light");
  // const { toggleTheme, theme } = useTheme();

  return (
    <>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
      <Containers>
        <DivHomePage
          style={{
           
          }}
        >
          Welcome 
        </DivHomePage>
        {/* <button  onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button> */}
      </Containers>
      {/* </ThemeProvider> */}
    </>
  );
}
