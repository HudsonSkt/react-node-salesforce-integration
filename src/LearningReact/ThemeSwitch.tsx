import { useTheme } from "../Contexts/ThemeContext";

export const ThemeSwitch = () => {
  
    const themeCtx = useTheme();

  const handleThemeToggle = () => {
    if (themeCtx) {
      themeCtx.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div onClick={handleThemeToggle}>
      {themeCtx?.theme === "dark" && "Mudar para Light"}
      {themeCtx?.theme === "light" && "Mudar para dark"}
    </div>
  );
};
