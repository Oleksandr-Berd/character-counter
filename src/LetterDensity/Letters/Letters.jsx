import * as SC from "./LettersStyled";

const Letters = ({ letter, repeat, ratio }) => {
  
  const stat = `${repeat} (${ratio})`
  
    return (
    <li>
      <p>{letter}</p>
      <div></div>
      <p>{stat}</p>
    </li>
  );
};

export default Letters;
