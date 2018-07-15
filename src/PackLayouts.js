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
  console.log(`pack count : ${getPackCount()}`);

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

  const getCardRow = (card, index) => {
    const cardStyle = {
      gridColumn: index % getPackCount(),
      gridRow: Math.floor((index - 1) / getPackCount()) + 1,
      background: getBackgroundColor(card.colorIdentity),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column"
    };
    const textStyle = {
      fontSize: "2rem",
      fontFamily: "monospace",
      fontStyle: "bold"
    };
    console.log(card.types.toString());
    return (
      <div style={cardStyle} key={"grid" + card.multiverseid + index}>
        {card.types.map(type => (
          <div style={textStyle}>{CardTypesCodes[type]}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Pack Layout</h2>
      <h4>Commons</h4>
      <div className="PackLayouts-grid-container">
        {getCardData("Common").map((card, index) =>
          getCardRow(card, index + 1)
        )}
      </div>
      <h4>Uncommons - TODO Give Probability for top-3</h4>
      <div className="PackLayouts-grid-container">
        {getCardData("Uncommon").map((card, index) =>
          getCardRow(card, index + 1)
        )}
      </div>
      <h4>Rare - TODO Give Probability for top-1</h4>
      <div className="PackLayouts-grid-container">
        {getCardData("Rare").map((card, index) => getCardRow(card, index + 1))}
      </div>
      <h4>TODO Other??? - land, DFC, Legendary slot?</h4>
    </div>
  );
};
