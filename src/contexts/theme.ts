import { createContext } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  setIsDarkTheme: (prev: boolean) => void,
}
const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

export default ThemeContext;