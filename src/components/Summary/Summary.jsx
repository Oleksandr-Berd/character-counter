import * as SC from "./SummaryStyled";

const Summary = ({summaryData}) => {
  const { totalCharacters, totalWords, totalSentences } = summaryData || {};

  return (
    <SC.SummaryStyled>
      <li>
        <SC.ResultStyled>{totalCharacters ? totalCharacters : "00"}</SC.ResultStyled>
        <SC.SubTitleStyled>Total Characters</SC.SubTitleStyled>
      </li>
      <li>
        <SC.ResultStyled>{totalWords ? totalWords : "00"}</SC.ResultStyled>
        <SC.SubTitleStyled>Word Count</SC.SubTitleStyled>
      </li>
      <li>
        <SC.ResultStyled>{totalSentences ? totalSentences : "00"} </SC.ResultStyled>
        <SC.SubTitleStyled>Sentence Count</SC.SubTitleStyled>
      </li>
    </SC.SummaryStyled>
  );
};

export default Summary;
