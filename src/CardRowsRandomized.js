import React from "react";

import "./cardGridContainer.css";
import {
  getCardColorIdentity,
  getDisplayedRarity,
  getFilteredCards,
  getPackCount,
  getRandomCard
} from "./cardUtilities";
import { CardCell } from "./CardCell";

export const CardRowsRandomized = props => {
  const getUnusedCards = (cards, cardSets) =>
    cards
      .filter(
        card =>
          Array.from(cardSets.used.colors).some(
            color => color === card.colorIdentity
          ) === false
      )
      .filter(
        card =>
          Array.from(cardSets.used.types).some(
            type => type === card.types[0]
          ) === false
      );

  const getCardSets = cards => ({
    complete: {
      colors: new Set(cards.map(card => card.colorIdentity)),
      types: new Set(
        cards.map(card => card.types).reduce((acc, cur) => acc.concat(cur), "")
      )
    },
    used: {
      colors: new Set(),
      types: new Set()
    }
  });

  const getCardCellAndUpdateUsedCards = (cardSets, cards, index) => {
    if (cardSets.used.types.size === cardSets.complete.types.size) {
      cardSets.used.types = new Set();
    }
    if (cardSets.used.colors.size === cardSets.complete.colors.size) {
      cardSets.used.colors = new Set();
    }

    let unusedCards = getUnusedCards(cards, cardSets);
    if (!unusedCards.length) {
      cardSets.used.types = new Set();
      cardSets.used.colors = new Set();
      unusedCards = cards;
    }

    const card = getRandomCard(unusedCards);

    cardSets.used.colors.add(getCardColorIdentity(card));
    cardSets.used.types.add(card.types.map(type => type));

    return (
      <CardCell
        key={`card-cell-row-${card.multiverseId}-${index}`}
        card={card}
        index={index + 1}
        {...props}
      />
    );
  };

  const getRandomRows = (rarity, numberOfRows) => {
    const cards = getFilteredCards(props.code, rarity);
    const rowSize = getPackCount(props.code);
    const cardSets = getCardSets(cards);
    const cardCount = rowSize * numberOfRows;

    let cardRows = [];
    for (let index = 0; index < cardCount; index++) {
      cardRows.push(getCardCellAndUpdateUsedCards(cardSets, cards, index));
    }
    return cardRows;
  };

  return (
    <div>
      <h4 style={{ textAlign: "left" }}>{getDisplayedRarity(props.rarity)}</h4>
      <div className="card-grid-container">
        {getRandomRows(props.rarity, props.rows)}
      </div>
    </div>
  );
};
