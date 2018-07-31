import React from "react";

import { AllSets } from "./AllSets";
import { CardTypes } from "./CardTypes";
import { CardRarities } from "./CardRarities";
import { Table } from "react-bootstrap";
import { CardAnalysisTableRow } from "./CardAnalysisTableRow";

const getCardTypeClass = cardType => {
  return `mi mi-${cardType.toString().toLocaleLowerCase()} mi-shadow mi-lg`;
};

export const CardTypeAnalysis = props => {
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

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Card Type Analysis</h2>
      <Table condensed hover responsive>
        <thead>
          <tr>
            <th>Rarity</th>
            <th>Cards</th>
            {CardTypes.map(cardType => (
              <th key={"th" + cardType + cardType.length}>
                <i className={getCardTypeClass(cardType)} title={cardType} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CardRarities.map(rarity => (
            <CardAnalysisTableRow
              rarity={rarity}
              data={getCardInfo(AllSets[props.code].cards, rarity)}
              dataType={CardTypes}
              key={`tr-type-${AllSets[props.code].name}-${rarity}`}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
