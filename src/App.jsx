import * as SC from "./AppStyled";

import { ThemeProvider } from "@emotion/react";
import { useContext, useState } from "react";

import { darkTheme } from "./styled/darkTheme";
import { lightTheme } from "./styled/lightTheme";

import Header from "./layout/Header/Header";
import ThemeContext from "./context/styled/themeContext";
import MainLayout from "./layout/Main/MainLayout";

function App() {
  const [scrutinizingText, setScrutinizingText] = useState(null);

  const { theme, toggle } = useContext(ThemeContext);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    if (theme === "light") {
      toggle("dark");
    } else {
      toggle("light");
    }
  };

  const handleText = (currentText) => {

    const {text, excludeSpaces, limit} = currentText
    
    console.log(text);
    
    setScrutinizingText({text, excludeSpaces, limit})
  };

  return (
    <ThemeProvider theme={commonTheme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <MainLayout handleText={handleText} scrutinizingText={scrutinizingText}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
