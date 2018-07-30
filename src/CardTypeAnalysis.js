import React from "react";

import { AllSets } from "./AllSets";
import { CardTypes } from "./CardTypes";
import { CardRarities } from "./CardRarities";
import { CardTypeAnalysisTableRow } from "./CardTypeAnalysisTableRow";
import { Table } from "react-bootstrap";

const getCardTypeClass = cardType => {
  return `mi mi-${cardType.toString().toLocaleLowerCase()} mi-shadow mi-lg`;
};

export const CardTypeAnalysis = props => (
  <div style={{ width: "100%" }}>
    <h2 style={{ textAlign: "left" }}>Card Type Analysis</h2>
    <Table condensed hover responsive>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {CardTypes.map(cardType => (
            <th key={"th" + cardType + cardType.length}>
              <i className={getCardTypeClass(cardType)} title={cardType} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {CardRarities.map(rarity => (
          <CardTypeAnalysisTableRow
            cards={AllSets[props.code].cards}
            rarity={rarity}
            key={"tr" + AllSets[props.code].name + rarity}
          />
        ))}
      </tbody>
    </Table>
  </div>
);
