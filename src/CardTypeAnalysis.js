import React from "react";

import { AllSets } from "./data/AllSets";
import { CardTypes } from "./data/CardTypes";
import { CardRarities } from "./data/CardRarities";
import { CardTypeAnalysisTableRow } from "./CardTypeAnalysisTableRow";

export const CardTypeAnalysis = props => (
  <div>
    <p>Set Basics</p>
    <table>
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
    </table>
  </div>
);
