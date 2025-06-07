import { useEffect, useState } from "react";

import * as SC from "./LetterDensityStyled";

import { handleLetters } from "../utils/handleLetters";
import LettersList from "./LettersList/LettersList";
const LetterDensity = ({ summaryData }) => {
  const [statsLetters, setStatsLetters] = useState(null);

  const { letters, totalCharacters } = summaryData || {};

  const handleStatsLetters = () => {
    setStatsLetters(handleLetters(letters));
  };

  useEffect(() => {
    handleStatsLetters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summaryData]);

  return (
    <div>
      <LettersList statsLetters={statsLetters} totalCharacters={totalCharacters}/>
      <button type="button">See more</button>
    </div>
  );
};

export default LetterDensity;
