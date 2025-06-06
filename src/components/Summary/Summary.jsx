import * as SC from "./SummaryStyled";

import { dbSummary } from "../../db/dbSummary/js";

import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = () => {
  return (
    <ul>
      {dbSummary &&
        dbSummary.map((el) => (
          <SummaryItem key={el.id} title={el.title} amount={el.amount} />
        ))}
    </ul>
  );
};

export default Summary;
