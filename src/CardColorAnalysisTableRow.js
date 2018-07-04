import React from "react";

import { CardColors } from "./data/CardColors";

export const CardColorAnalysisTableRow = props => {
  const getCardInfo = (cards, rarity) => {
    const cardsInRarity = cards.filter(card => card.rarity === rarity);
    const data = cardsInRarity;
    //if has color(s)
    //if single, add to that colors element
    //else add to multiple
    //else add to colorless
    data
      .map(card => card.colors)
      .reduce((flat, next) => flat.concat(next), [])
      .reduce(function(types, type) {
        if (type in types) {
          types[type]++;
        } else {
          types[type] = 1;
        }
        return types;
      }, {});
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
