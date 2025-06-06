import Logo from "../../components/Logo/Logo";
import ThemeToggleBtn from "../../components/ThemeToggleBtn/ThemeToggleBtn";
import * as SC from "./HeaderStyled"

const Header = () => {
    return ( 
        <header>
            <Logo/>
            <ThemeToggleBtn/>
        </header>
     );
}
 
export default Header;