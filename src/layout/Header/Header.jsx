import * as SC from "./HeaderStyled";

import Logo from "../../components/Logo/Logo";
import ThemeToggleBtn from "../../components/ThemeToggleBtn/ThemeToggleBtn";

const Header = ({ toggleTheme }) => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <ThemeToggleBtn toggleTheme={toggleTheme} />
    </SC.HeaderStyled>
  );
};

export default Header;
