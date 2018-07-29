import React from "react";

import { AllSets } from "./AllSets";
import { CardColorKeys, CardColors } from "./CardColors";
import { CardRarities } from "./CardRarities";
import { CardColorAnalysisTableRow } from "./CardColorAnalysisTableRow";
import { Table } from "react-bootstrap";

import "./mtg-font-master/css/magic-font.css";
import "./CardColorAnalysis.css";

const getCardColorClass = cardColor => {
  const colorKey = CardColorKeys[cardColor.toString()];
  return `mi mi-${colorKey} mi-mana mi-shadow mi-lg`;
};

export const CardColorAnalysis = props => (
  <div>
    <h2 style={{ textAlign: "left" }}>Card Color Analysis</h2>
    <Table condensed hover responsive>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {CardColors.map(cardColor => (
            <th key={"th" + cardColor + cardColor.length}>
              <i className={getCardColorClass(cardColor)} title={cardColor} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {CardRarities.map(rarity => (
          <CardColorAnalysisTableRow
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
