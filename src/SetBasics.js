import React from "react";

import { AllSets } from "./data/AllSets";
import { CardTypes } from "./data/CardTypes";
import { CardRarities } from "./data/CardRarities";
import { BasicTableRow } from "./BasicTableRow";

export const SetBasics = props => (
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
          <BasicTableRow
            cards={AllSets[props.code].cards}
            rarity={rarity}
            key={"tr" + AllSets[props.code].name + rarity}
          />
        ))}
      </tbody>
    </table>
  </div>
);
