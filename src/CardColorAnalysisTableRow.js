import React from "react";

import { CardColors } from "./data/CardColors";

export const CardColorAnalysisTableRow = props => {
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

  const data = getCardInfo(props.cards, props.rarity);
  console.log(data);

  return (
    <tr>
      <td>{props.rarity}</td>
      <td>{data["Cards"]}</td>
      {CardColors.map(cardType => (
        <td key={"td" + cardType + cardType.length}>
          {Math.round((100 * data[cardType]) / data.Cards, 2)}% ({
            data[cardType]
          })
        </td>
      ))}
    </tr>
  );
};
