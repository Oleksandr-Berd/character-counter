import { useEffect, useState } from "react";

import * as SC from "./LetterDensityStyled";

import { handleLetters } from "../utils/handleLetters";
import LettersList from "./LettersList/LettersList";
import { cutMode } from "../utils/vars";
const LetterDensity = ({ summaryData }) => {
  const [statsLetters, setStatsLetters] = useState(null);
  const [isCutList, setIsCutList] = useState(true);
  const [cutList, setCutList] = useState([]);

  const { on, off, zeroOption } = cutMode;

  const handleCutList = (arr) => {
    return arr?.filter((el, idx) => idx <= 4);
  };

  const toggleCut = () => {
    setIsCutList(!isCutList);
  };

  const { letters, totalCharacters } = summaryData || {};

  const handleStatsLetters = () => {
    setStatsLetters(handleLetters(letters));
  };

  useEffect(() => {
    handleStatsLetters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summaryData]);

  useEffect(() => {
    setCutList(handleCutList(statsLetters));
  }, [statsLetters]);

  return (
    <div>
      {totalCharacters ? (
        <>
          <LettersList
            statsLetters={isCutList ? cutList : statsLetters}
            totalCharacters={totalCharacters}
          />
          <button type="button" onClick={toggleCut}>
            {isCutList ?  on  :  off }
          </button>
        </>
      ) : (
        <p>{zeroOption}</p>
      )}
    </div>
  );
};

export default LetterDensity;
