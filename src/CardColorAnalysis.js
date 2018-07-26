import React from "react";

import { AllSets } from "./data/AllSets";
import { CardColors } from "./data/CardColors";
import { CardRarities } from "./data/CardRarities";
import { CardColorAnalysisTableRow } from "./CardColorAnalysisTableRow";
import { Table } from "react-bootstrap";

import "./mtg-font-master/css/magic-font.css";

export const CardColorAnalysis = props => (
  <div>
    <h2 style={{ textAlign: "left" }}>Card Color Analysis</h2>
    <Table condensed hover responsive>
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
    </Table>
    <hr />
  </div>
);
