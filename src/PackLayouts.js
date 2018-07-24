import React from "react";

import "./PackLayouts.css";
import { AllSets } from "./data/AllSets";
import { CardColorIdentities } from "./data/CardColors";
import { CardTypes, CardTypesCodes } from "./data/CardTypes";

export const PackLayouts = props => {
  const set = AllSets[props.code];

  let booster = [];
  let packData = {
    common: 0,
    uncommon: 0,
    rare: 0
  };
  if (props.code !== "UNDEFINED") {
    booster = set.booster.reduce((acc, val) => acc.concat(val), []);
    packData = {
      common: booster.filter(card => card === "common").length,
      uncommon: booster.filter(card => card === "uncommon").length,
      rare: booster.filter(card => card === "rare").length
    };
  }

  const cardSort = (a, b) => {
    const colorDiff =
      CardColorIdentities.indexOf(a.colorIdentity) -
      CardColorIdentities.indexOf(b.colorIdentity);
    const typeDiff =
      (a.types.length === b.types.length) === 1
        ? CardTypes.indexOf(a.types[0]) - CardTypes.indexOf(b.types[0])
        : CardTypes.indexOf(a.types[a.types.length - 1]) -
          CardTypes.indexOf(b.types[b.types.length - 1]);
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
    //TODO fill to end of row
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

  const getBackgroundColor = code => {
    let color;
    if (code === "W") {
      color = "whitesmoke";
    } else if (code === "U") {
      color = "lightblue";
    } else if (code === "B") {
      color = "darkgray";
    } else if (code === "R") {
      color = "tomato";
    } else if (code === "G") {
      color = "lightseagreen";
    } else if (code === "C") {
      color = "gray";
    } else if (code === "M") {
      color = "mediumorchid";
    } else if (code === "L") {
      color = "darkgoldenrod";
    }
    return color;
  };

  const getCardStyle = (card, index) => ({
    gridColumn: index % getPackCount(),
    gridRow: Math.floor((index - 1) / getPackCount()) + 1,
    background: getBackgroundColor(card.colorIdentity),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column"
  });

  const textStyle = {
    fontSize: "2rem",
    fontFamily: "monospace",
    fontStyle: "bold"
  };

  const getCardRow = (card, index) => {
    const cardStyle = getCardStyle(card, index);
    return (
      <div style={cardStyle} key={"grid" + card.multiverseid + index}>
        {card.types.map(type => (
          <div
            key={"card-types" + type + card.multiverseid + index}
            style={textStyle}
          >
            {CardTypesCodes[type]}
          </div>
        ))}
      </div>
    );
  };

  const getRareCardRow = (card, index) => {
    const cardStyle = getCardStyle(card, index);
    return (
      <div style={cardStyle} key={"grid-rare" + card.multiverseid + index}>
        {card.types.map(type => (
          <div
            key={"card-types-rare" + type + card.multiverseid + index}
            style={textStyle}
          >
            {CardTypesCodes[type]}
          </div>
        ))}
      </div>
    );
  };

  const getRandomCard = cards => {
    const calc = Math.floor(Math.random() * cards.length);
    console.log(`getRandomCard.calc = ${calc}`);
    console.log(`getRandomCard cards.length = ${cards.length}`);

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

    let cardRow = [];
    let usedCardColors = new Set();
    let usedCardTypes = new Set();
    const cardCount = rowSize * numberOfRows;
    console.log(
      `rarity : ${rarity}` +
        ` | numberOfRows : ${numberOfRows}` +
        ` | cardCount : ${cardCount}`
    );
    for (let index = 0; index < cardCount; index++) {
      //TODO reset if unusedCards.length === 0
      //if (!unusedCards.length) {
      //  console.log(`NO unusedCards `);
      //}

      if (usedCardTypes.size === completeCardTypes.size) {
        console.log("clearing usedCardTypes");
        usedCardTypes = new Set();
      }
      if (usedCardColors.size === completeCardColors.size) {
        console.log("clearing usedCardColors");
        usedCardColors = new Set();
      }

      let unusedCards = getUnusedCards(
        cards,
        Array.from(usedCardColors),
        Array.from(usedCardTypes)
      );
      console.log(
        `getUnusedCards( ${cards.length} (cards), ${Array.from(
          usedCardColors
        )} (colors), ${Array.from(usedCardTypes)} (types) ) = ${
          unusedCards.length
        } `
      );
      //TODO - issue is there is no combination of color+type that exists, so the filter size goes to zero
      if (!unusedCards.length) {
        usedCardTypes = new Set();
        usedCardColors = new Set();
        unusedCards = cards;
      }
      //TODO - cleanup all this muck

      const card = getRandomCard(unusedCards);

      usedCardColors.add(card.colorIdentity);
      usedCardTypes.add(card.types.map(type => type));
      //card.types.forEach(function(cardType) {
      //  usedCardTypes.add(cardType);
      //});
      cardRow.push(getRareCardRow(card, index + 1));
      //console.log(`cardRow.length : ${cardRow.length}`);
    }
    return cardRow;
  };
  //{getCardData("Uncommon").map((card, index) =>
  //  getCardRow(card, index + 1)
  //)}

  return (
    <div>
      <h2>Pack Layout</h2>
      <h4>Commons</h4>
      <div className="PackLayouts-grid-container">
        {getCardData("Common").map((card, index) =>
          getCardRow(card, index + 1)
        )}
      </div>
      <h4>Uncommons</h4>
      <div className="PackLayouts-grid-container">
        {getRandomRows("Uncommon", 3)}
      </div>
      <h4>Rare</h4>
      <div className="PackLayouts-grid-container">
        {getRandomRows("Rare", 1)}
      </div>
      <br />
      <h4>TODO Other??? - land, DFC, Legendary slot?</h4>
    </div>
  );
};
