import * as SC from "./LettersStyled";

const Letters = ({ letter }) => {
  return (
    <li>
      <p>{letter}</p>
      <div></div>
      <p></p>
      <button type="button">See more</button>
    </li>
  );
};

export default Letters;
