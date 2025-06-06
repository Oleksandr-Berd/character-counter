import Logo from "../../components/Logo/Logo";
import ThemeToggleBtn from "../../components/ThemeToggleBtn/ThemeToggleBtn";
import * as SC from "./HeaderStyled"

const Header = ({toggleTheme}) => {
    
    
    

    return ( 
        <header>
            <Logo/>
            <ThemeToggleBtn toggleTheme={toggleTheme}/>
        </header>
     );
}
 
export default Header;