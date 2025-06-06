import * as SC from "./LetterDensityStyled";

import { alphabet } from "../utils/alphabet";
import { nanoid } from "nanoid";
import Letters from "./Letters/Letters";
const LetterDensity = () => {
  return (
    <div>
      <ul>
        {alphabet &&
          alphabet.map((el) => <Letters key={nanoid()} letter={el} />)}
      </ul>
    </div>
  );
};

export default LetterDensity;
