import React from "react";

import { AllSets } from "./AllSets";
import { CardColorKeys, CardColors } from "./CardColors";
import { CardRarities } from "./CardRarities";
import { Table } from "react-bootstrap";
import { CardAnalysisTableRow } from "./CardAnalysisTableRow";

import "./mtg-font-master/css/magic-font.css";
import "./CardColorAnalysis.css";

const getCardColorClass = cardColor => {
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
      <Table condensed hover responsive>
        <thead>
          <tr>
            <th>Rarity</th>
            <th>Cards</th>
            {CardColors.map(cardColor => (
              <th key={"th" + cardColor + cardColor.length}>
                <i className={getCardColorClass(cardColor)} title={cardColor} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CardRarities.map(rarity => (
            <CardAnalysisTableRow
              rarity={rarity}
              data={getCardInfo(AllSets[props.code].cards, rarity)}
              dataType={CardColors}
              key={`tr-color-${AllSets[props.code].name}-${rarity}`}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
