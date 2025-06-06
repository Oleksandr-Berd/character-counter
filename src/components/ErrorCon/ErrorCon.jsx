
import * as SC from "./ErrorConStyled";

import errorIcon from "../../assets/images/icon-info.svg";

const ErrorCon = () => {
  return (
    <SC.ErrorConStyled>
      <div>
        <img src={errorIcon} alt="errorIcon" />
      </div>
      <p>
        Limit reached! Your text exceeds 300 characters.
      </p>
    </SC.ErrorConStyled>
  );
};

export default ErrorCon;
