import React from "react";

import { CardColors } from "./CardColors";

import "./mtg-font-master/css/magic-font.css";
import "./CardColorAnalysis.css";
import { CardAnalysisTable } from "./CardAnalysisTable";

const getCardClass = colorIdentity => {
  const colorKey = CardColors[colorIdentity].mtgFont;
  console.log(`getCardClass.colorKey : ${colorKey}`);
  return `mi ${colorKey} mi-mana mi-shadow mi-lg`;
};

const getCardColorsList = Object.keys(CardColors).filter(key => key !== "L");
console.log(`getCardColorsList : ${getCardColorsList}`);

export const CardColorAnalysis = props => {
  const getCardInfo = (cards, rarity) => {
    const cardsInRarity = cards.filter(card => card.rarity === rarity);
    const data = {
      W: 0,
      U: 0,
      B: 0,
      R: 0,
      G: 0,
      M: 0,
      C: 0,
      Cards: 0
    };
    cardsInRarity.forEach(function(card) {
      if (Object.keys(card).includes("colors")) {
        //intentionally excludes lands
        if (card.colorIdentity.length === 1) {
          data[card.colorIdentity]++;
        } else {
          data["M"]++;
        }
      } else {
        data["C"]++;
      }
    });
    data.Cards = cardsInRarity.length;
    return data;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Card Color Analysis</h2>
      <CardAnalysisTable
        dataType={getCardColorsList}
        code={props.code}
        getCardInfo={getCardInfo.bind(this)}
        getCardClass={getCardClass.bind(this)}
      />
    </div>
  );
};
