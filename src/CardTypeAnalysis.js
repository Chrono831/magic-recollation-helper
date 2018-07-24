import React from "react";

import { AllSets } from "./data/AllSets";
import { CardTypes } from "./data/CardTypes";
import { CardRarities } from "./data/CardRarities";
import { CardTypeAnalysisTableRow } from "./CardTypeAnalysisTableRow";
import { Table } from "react-bootstrap";

export const CardTypeAnalysis = props => (
  <div>
    <h2 style={{ textAlign: "left" }}>Card Type Analysis</h2>
    <Table condensed hover responsive>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {CardTypes.map(cardType => (
            <th key={"th" + cardType + cardType.length}>{cardType}</th>
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
