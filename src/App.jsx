import * as SC from "./AppStyled"

import { ThemeContext, ThemeProvider } from "@emotion/react";
import { useContext } from "react";

import { darkTheme } from "./styled/darkTheme";
import { lightTheme } from "./styled/lightTheme";

import Header from "./layout/Header/Header";

function App() {
  const { theme } = useContext(ThemeContext);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={commonTheme}>
      <div>
        <Header/>
      </div>
    </ThemeProvider>
  );
}

export default App;
