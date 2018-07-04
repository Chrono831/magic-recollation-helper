import React from "react";

import { AllSets } from "./data/AllSets";
import { CardColors } from "./data/CardColors";
import { CardRarities } from "./data/CardRarities";
import { CardColorAnalysisTableRow } from "./CardColorAnalysisTableRow";

export const CardColorAnalysis = props => (
  <div>
    <p>Card Color Analysis</p>
    <table>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {CardColors.map(card => (
            <th key={"th" + card + card.length}>{card}</th>
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
    </table>
  </div>
);
