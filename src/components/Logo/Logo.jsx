import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/Logo mark.svg"
const Logo = () => {
    return ( 
        <SC.LogoStyled>
            <img src={logoIcon} alt="logo" />
            <h2>Character Counter</h2>
        </SC.LogoStyled>
     );
}
 
export default Logo;