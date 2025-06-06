import * as SC from "./ThemeToggleBtnStyled"

// import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"
const ThemeToggleBtn = () => {
    return ( 
        <button type="button">
            <img src={moonIcon} alt="moon-icon" />
        </button>
     );
}
 
export default ThemeToggleBtn;