import { nanoid } from "nanoid";

import * as SC from "./LettersListStyled"

import Letters from "../Letters/Letters";
import { handleRatio } from "../../utils/handleRatio";


const LettersList = ({statsLetters, totalCharacters}) => {
        
    return ( 
        <SC.LettersListStyled>
        {statsLetters && statsLetters.map(({letter, count}) => <Letters key={nanoid()} letter={letter} repeat={count} ratio={handleRatio(count, totalCharacters)}/>)}
      </SC.LettersListStyled>
     );
}
 
export default LettersList;