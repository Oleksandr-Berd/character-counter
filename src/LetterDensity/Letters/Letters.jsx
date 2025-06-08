import * as SC from "./LettersStyled";

const Letters = ({ letter, repeat, ratio }) => {
  
  const stat = `${repeat} (${ratio})`
  
    return (
    <SC.LettersStyled>
      <SC.LetterTitleStyled>{letter}</SC.LetterTitleStyled>
      <SC.Scale ratio={ratio ? ratio : ""}></SC.Scale>
      <SC.StatsStyled>{stat}</SC.StatsStyled>
    </SC.LettersStyled>
  );
};

export default Letters;
