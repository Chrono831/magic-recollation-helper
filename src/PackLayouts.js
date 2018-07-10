import React from "react";

import "./PackLayouts.css";
import { AllSets } from "./data/AllSets";
import { CardColorIdentities } from "./data/CardColors";

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

  const sortByMultiverseId = (a, b) => a.multiverseid - b.multiverseid;
  const sortByColor = (a, b) => {
    if (a.colorIdentity === b.colorIdentity) {
      return a.multiverseid - b.multiverseid;
    } else {
      return (
        CardColorIdentities.indexOf(a.colorIdentity) -
        CardColorIdentities.indexOf(b.colorIdentity)
      );
    }
  };

  const getCardData = rarity => {
    const cards = AllSets[props.code].cards.filter(
      card => card.rarity === rarity
    );
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.sortIndex = i + 1;
      card.colorIdentity =
        card.colorIdentity === undefined
          ? "C"
          : card.colorIdentity.length > 1
            ? "M"
            : card.colorIdentity[0];
    }
    return cards.sort(sortByColor);
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
    }
    return color;
  };

  const getCardRow = (card, index) => {
    const cardStyle = {
      gridColumn: index % getPackCount(),
      gridRow: Math.floor((index - 1) / getPackCount()) + 1,
      background: getBackgroundColor(card.colorIdentity)
    };
    console.log(cardStyle);
    return (
      <div style={cardStyle} key={"grid" + card.multiverseid + index}>
        <div>{card.name}</div>
        <div>{card.manaCost}</div>
        <div>{card.types.toString()}</div>
      </div>
    );
  };

  return (
    <div>
      <p>Pack Stats</p>
      <div className="PackLayouts-grid-container">
        {getCardData("Common").map((card, index) =>
          getCardRow(card, index + 1)
        )}
      </div>
    </div>
  );
};
