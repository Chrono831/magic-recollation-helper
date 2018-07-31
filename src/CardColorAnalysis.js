import React from "react";

import { CardColorKeys, CardColors } from "./CardColors";

import "./mtg-font-master/css/magic-font.css";
import "./CardColorAnalysis.css";
import { CardAnalysisTable } from "./CardAnalysisTable";

const getCardClass = cardColor => {
  const colorKey = CardColorKeys[cardColor.toString()];
  return `mi mi-${colorKey} mi-mana mi-shadow mi-lg`;
};

export const CardColorAnalysis = props => {
  const getCardInfo = (cards, rarity) => {
    const cardsInRarity = cards.filter(card => card.rarity === rarity);
    const data = {
      White: 0,
      Blue: 0,
      Black: 0,
      Red: 0,
      Green: 0,
      Multicolor: 0,
      Colorless: 0
    };
    cardsInRarity.forEach(function(card) {
      if (Object.keys(card).includes("colors")) {
        if (card.colors.length === 1) {
          data[card.colors]++;
        } else {
          data["Multicolor"]++;
        }
      } else {
        data["Colorless"]++;
      }
    });
    data["Cards"] = cardsInRarity.length;
    CardColors.forEach(function(cardType) {
      data[cardType] = cardType in data ? data[cardType] : 0;
    });
    return data;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Card Color Analysis</h2>
      <CardAnalysisTable
        dataType={CardColors}
        code={props.code}
        getCardInfo={getCardInfo.bind(this)}
        getCardClass={getCardClass.bind(this)}
      />
    </div>
  );
};
