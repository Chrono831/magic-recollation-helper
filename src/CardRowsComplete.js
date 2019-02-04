import React from "react";

import "./cardGridContainer.css";
import {
  getDisplayedRarity,
  getFilteredCards,
  getPackCount
} from "./cardUtilities";
import { CardCell } from "./CardCell";

export const CardRowsComplete = props => (
  <div>
    <h4 style={{ textAlign: "left" }}>
      {getDisplayedRarity(props.rarity)} -- {getPackCount(props.code)} packs
    </h4>
    <div className="card-grid-container">
      {getFilteredCards(props.code, props.rarity).map((card, index) => (
        <CardCell
          key={`card-cell-${card.nameHash}-${index}`}
          card={card}
          index={index + 1}
          {...props}
        />
      ))}
    </div>
  </div>
);
