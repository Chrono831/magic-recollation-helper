import React from "react";

import { CardTypes } from "./CardTypes";

export const CardTypeAnalysisTableRow = props => {
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
      <td style={{ textAlign: "left" }}>{props.rarity}</td>
      <td style={{ textAlign: "left" }}>{data["Cards"]}</td>
      {CardTypes.map(cardType => (
        <td
          key={"td" + cardType + cardType.length}
          style={{ textAlign: "left" }}
        >
          <span>{Math.round((100 * data[cardType]) / data.Cards, 2)}% </span>
          <span style={{ fontSize: "smaller", color: "slategray" }}>
            ({data[cardType]})
          </span>
        </td>
      ))}
    </tr>
  );
};
