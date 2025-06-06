import { useEffect, useState } from "react";
import AnalyzeConsole from "../../components/AnalyzeConsole/AnalyzeConsole";
import Summary from "../../components/Summary/Summary";
import LetterDensity from "../../LetterDensity/LetterDensity";
import * as SC from "./MainLayoutStyled";
import { handleData } from "../../utils/handleData";
const MainLayout = (props) => {
  
  const {handleText, scrutinizingText} = props
const [summaryData, setSumamryData] = useState(null)


useEffect(()=>{
handleData(scrutinizingText)
}, [scrutinizingText])


  return (
    <main>
      <AnalyzeConsole handleText={handleText}/>
      <Summary />
      <LetterDensity />
    </main>
  );
};

export default MainLayout;
