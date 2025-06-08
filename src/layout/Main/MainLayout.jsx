import { useEffect, useState } from "react";
import AnalyzeConsole from "../../components/AnalyzeConsole/AnalyzeConsole";
import Summary from "../../components/Summary/Summary";
import LetterDensity from "../../LetterDensity/LetterDensity";
import * as SC from "./MainLayoutStyled";
import { handleData } from "../../utils/handleData";
const MainLayout = (props) => {
  const { handleText, scrutinizingText } = props;
  const [summaryData, setSummaryData] = useState(null);

const {limit} = scrutinizingText || {}

const handleSummarize = () => {
  setSummaryData(handleData(scrutinizingText))
}



  useEffect(() => {
    handleSummarize()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrutinizingText]);

  return (
    <div>
      <AnalyzeConsole handleText={handleText} limit={limit}/>
      <Summary summaryData={summaryData}/>
      <LetterDensity summaryData={summaryData}/>
    </div>
  );
};

export default MainLayout;
