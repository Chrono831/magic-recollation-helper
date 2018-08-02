import React from "react";

import "./PackLayouts.css";
import { getCleanedCards, getPackCount, getRandomCard } from "./cardUtilities";
import { CardCell } from "./CardCell";

export const PackLayouts = props => {
  const getUnusedCards = (cards, usedColors, usedTypes) => {
    let unusedCards = cards;

    unusedCards = unusedCards.filter(
      card => usedColors.some(color => color === card.colorIdentity) === false
    );

    unusedCards = unusedCards.filter(
      card => usedTypes.some(type => type === card.types[0]) === false
    );

    return unusedCards;
  };

  const getRandomRows = (rarity, numberOfRows) => {
    const cards = getCleanedCards(props.code, rarity);
    const rowSize = getPackCount(props.code);
    const completeCardColors = new Set(cards.map(card => card.colorIdentity));
    const completeCardTypes = new Set(
      cards.map(card => card.types).reduce((acc, cur) => acc.concat(cur))
    );

    let cardRows = [];
    let usedCardColors = new Set();
    let usedCardTypes = new Set();
    const cardCount = rowSize * numberOfRows;
    for (let index = 0; index < cardCount; index++) {
      if (usedCardTypes.size === completeCardTypes.size) {
        usedCardTypes = new Set();
      }
      if (usedCardColors.size === completeCardColors.size) {
        usedCardColors = new Set();
      }

      let unusedCards = getUnusedCards(
        cards,
        Array.from(usedCardColors),
        Array.from(usedCardTypes)
      );
      if (!unusedCards.length) {
        usedCardTypes = new Set();
        usedCardColors = new Set();
        unusedCards = cards;
      }

      const card = getRandomCard(unusedCards);

      usedCardColors.add(card.colorIdentity);
      usedCardTypes.add(card.types.map(type => type));
      cardRows.push(
        <CardCell
          key={`card-cell-row-${card.multiverseid}-${index}`}
          code={props.code}
          card={card}
          index={index + 1}
        />
      );
    }
    return cardRows;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Pack Layout</h2>
      <div>
        <h4 style={{ textAlign: "left" }}>Commons</h4>
        <div className="PackLayouts-grid-container">
          {getCleanedCards(props.code, "Common").map((card, index) => (
            <CardCell
              key={`card-cell-${card.multiverseid}-${index}`}
              code={props.code}
              card={card}
              index={index + 1}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ textAlign: "left" }}>Uncommons</h4>
        <div className="PackLayouts-grid-container">
          {getRandomRows("Uncommon", 3)}
        </div>
      </div>
      <div>
        <h4 style={{ textAlign: "left" }}>Rare</h4>
        <div className="PackLayouts-grid-container">
          {getRandomRows("Rare", 1)}
        </div>
      </div>
    </div>
  );
};
