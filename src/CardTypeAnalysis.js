import React from "react";

import { CardTypes } from "./CardTypes";
import { CardAnalysisTable } from "./CardAnalysisTable";

export const CardTypeAnalysis = props => {
  const getCardClass = cardType =>
    `mi ${CardTypes[cardType].mtgFont} mi-shadow mi-lg`;

  const cardTypesList = Object.keys(CardTypes);

  const getCardInfo = (cards, rarity) => {
    const cardsInRarity = cards.filter(card => card.rarity === rarity);
    const data = cardsInRarity
      .map(card => card.types)
      .reduce((flat, next) => flat.concat(next), [])
      .reduce(function(types, type) {
        if (type in types) {
          types[type]++;
        } else {
          types[type] = 1;
        }
        return types;
      }, {});
    data.Cards = cardsInRarity.length;
    cardTypesList.forEach(function(cardType) {
      data[cardType] = cardType in data ? data[cardType] : 0;
    });
    return data;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Card Type Analysis</h2>
      <CardAnalysisTable
        dataType={cardTypesList}
        getCardInfo={getCardInfo.bind(this)}
        getCardClass={getCardClass.bind(this)}
        {...props}
      />
    </div>
  );
};
