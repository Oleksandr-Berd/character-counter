import * as SC from "./ThemeToggleBtnStyled"

// import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"
const ThemeToggleBtn = ({toggleTheme}) => {
    return ( 
        <SC.ThemeToggleBtnStyled type="button" onClick={toggleTheme}>
            <img src={moonIcon} alt="moon-icon" />
        </SC.ThemeToggleBtnStyled>
     );
}
 
export default ThemeToggleBtn;