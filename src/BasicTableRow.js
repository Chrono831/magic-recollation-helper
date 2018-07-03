import React from "react";

import { CardTypes } from "./data/CardTypes";

export const BasicTableRow = props => {
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
    data["Cards"] = cardsInRarity.length;
    CardTypes.forEach(function(cardType) {
      data[cardType] = cardType in data ? data[cardType] : 0;
    });
    return data;
  };

  const data = getCardInfo(props.cards, props.rarity);

  return (
    <tr>
      <td>{props.rarity}</td>
      <td>{data["Cards"]}</td>
      {CardTypes.map(cardType => (
        <td key={"td" + cardType + cardType.length}>{data[cardType]}</td>
      ))}
    </tr>
  );
};
