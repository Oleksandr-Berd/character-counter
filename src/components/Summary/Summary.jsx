import * as SC from "./SummaryStyled";

const Summary = ({summaryData}) => {
  const { totalCharacters, totalWords, totalSentences } = summaryData || {};

  return (
    <ul>
      <li>
        <p>{totalCharacters ? totalCharacters : "00"}</p>
        <h3>Total Characters</h3>
      </li>
      <li>
        <p>{totalWords ? totalWords : "00"}</p>
        <h3>Word Count</h3>
      </li>
      <li>
        <p>{totalSentences ? totalSentences : "00"} </p>
        <h3>Sentence Count</h3>
      </li>
    </ul>
  );
};

export default Summary;
