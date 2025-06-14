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
    <SC.LetterDensityStyled>
        <h3>Letter Density</h3>
      {totalCharacters ? (
        <>
          <LettersList
            statsLetters={isCutList ? cutList : statsLetters}
            totalCharacters={totalCharacters}
          />
          <SC.ToggleCutBtnStyled type="button" onClick={toggleCut} isCutList={isCutList}>
            {isCutList ?  on  :  off }
          </SC.ToggleCutBtnStyled>
        </>
      ) : (
        <SC.ZeroOption>{zeroOption}</SC.ZeroOption>
      )}
    </SC.LetterDensityStyled>
  );
};

export default LetterDensity;
