import React from "react";

import { AllSets } from "./data/AllSets";
import { CardTypes } from "./data/CardTypes";
import { CardRarities } from "./data/CardRarities";
import { CardTypeAnalysisTableRow } from "./CardTypeAnalysisTableRow";
import { Table } from "react-bootstrap";

const getCardTypeClass = cardType => {
  return `mi mi-${cardType.toString().toLocaleLowerCase()} mi-shadow mi-lg`;
};

export const CardTypeAnalysis = props => (
  <div>
    <h2 style={{ textAlign: "left" }}>Card Type Analysis</h2>
    <Table condensed hover responsive>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {CardTypes.map(cardType => (
            <th key={"th" + cardType + cardType.length}>
              <i className={getCardTypeClass(cardType)} />
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
    <hr />
  </div>
);
