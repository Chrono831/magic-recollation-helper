import React from "react";

import "./PackLayouts.css";
import { AllSets } from "./AllSets";
import { CardColors } from "./CardColors";
import { CardTypes } from "./CardTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PackLayouts = props => {
  const set = AllSets[props.code];

  const cardSort = (a, b) => {
    const colorDiff =
      CardColors[a.colorIdentity].order - CardColors[b.colorIdentity].order;
    const typeDiff =
      (a.types.length === b.types.length) === 1
        ? CardTypes[a.types[0]].order - CardTypes[b.types[0]].order
        : CardTypes[a.types[a.types.length - 1]].order -
          CardTypes[b.types[b.types.length - 1]].order;
    const multiverseIdDiff = a.multiverseid - b.multiverseid;

    if (colorDiff === 0) {
      if (typeDiff === 0) {
        return multiverseIdDiff;
      } else {
        return typeDiff;
      }
    } else {
      return colorDiff;
    }
  };

  const getCardData = rarity => {
    const cards = AllSets[props.code].cards.filter(card =>
      card.rarity.includes(rarity)
    );
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.sortIndex = i + 1;
      card.colorIdentity = card.types.includes("Land")
        ? "L"
        : card.colorIdentity === undefined
          ? "C"
          : card.colorIdentity.length > 1
            ? "M"
            : card.colorIdentity[0];
    }
    return cards.sort(cardSort);
  };

  const getPackCount = () => {
    const commonsCount = set.cards.filter(card => card["rarity"] === "Common")
      .length;
    const boosterCommonCount = set.booster.filter(card => card === "common")
      .length;

    return Math.ceil(commonsCount / boosterCommonCount);
  };

  const getCardStyle = (card, index) => ({
    gridColumn: index % getPackCount(),
    gridRow: Math.floor((index - 1) / getPackCount()) + 1,
    background: CardColors[card.colorIdentity].background,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column"
  });

  const getCardIconClass = type => {
    if (!CardTypes.hasOwnProperty(type)) {
      return <FontAwesomeIcon icon="question-circle" title={type} />;
    }

    const className = `mi ${CardTypes[type].mtgFont} mi-lg`;
    return <i className={className} title={type} />;
  };

  const getCardRow = (card, index) => {
    const cardStyle = getCardStyle(card, index);
    return (
      <div style={cardStyle} key={`grid-${card.multiverseid}-${index}`}>
        {card.types.map(type => (
          <div
            key={`card-types-${type}-${card.multiverseid}-${index}`}
            style={{ fontSize: "3rem" }}
          >
            {getCardIconClass(type)}
          </div>
        ))}
      </div>
    );
  };

  const getRandomCard = cards => {
    const calc = Math.floor(Math.random() * cards.length);
    return cards[calc];
  };

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
    const cards = getCardData(rarity);
    const rowSize = getPackCount();
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
      cardRows.push(getCardRow(card, index + 1));
    }
    return cardRows;
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Pack Layout</h2>
      <div>
        <h4 style={{ textAlign: "left" }}>Commons</h4>
        <div className="PackLayouts-grid-container">
          {getCardData("Common").map((card, index) =>
            getCardRow(card, index + 1)
          )}
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
