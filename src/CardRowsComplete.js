import React from "react";

import "./cardGridContainer.css";
import { getCleanedCards, getPackCount } from "./cardUtilities";
import { CardCell } from "./CardCell";

export const CardRowsComplete = props => (
  <div>
    <h4 style={{ textAlign: "left" }}>
      {props.rarity} -- {getPackCount(props.code)} packs
    </h4>
    <div className="card-grid-container">
      {getCleanedCards(props.code, props.rarity).map((card, index) => (
        <CardCell
          key={`card-cell-${card.multiverseid}-${index}`}
          card={card}
          index={index + 1}
          {...props}
        />
      ))}
    </div>
  </div>
);
