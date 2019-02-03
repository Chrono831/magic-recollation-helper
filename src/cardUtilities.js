import { AllSets } from "./AllSets";
import { CardColors } from "./CardColors";
import { CardTypes } from "./CardTypes";

export const cardSort = (a, b) => {
  const colorDiff =
    CardColors[getCardColorIdentity(a)].order -
    CardColors[getCardColorIdentity(b)].order;
  const typeDiff =
    (a.types.length === b.types.length) === 1
      ? CardTypes[a.types[0]].order - CardTypes[b.types[0]].order
      : CardTypes[a.types[a.types.length - 1]].order -
        CardTypes[b.types[b.types.length - 1]].order;
  const multiverseIdDiff = a.multiverseId - b.multiverseId;

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

export const getFilteredCards = (code, rarity) =>
  AllSets[code].cards.filter(card => card.rarity === rarity);

export const getCardColorIdentity = card => {
  return card.types.includes("Land")
    ? "L"
    : card.colorIdentity === undefined
    ? "C"
    : card.colorIdentity.length > 1
    ? "M"
    : card.colorIdentity[0];
};

export const getDisplayedRarity = rarity => {
  return rarity === "mythic"
    ? "Mythic Rare"
    : rarity.charAt(0).toUpperCase() + rarity.slice(1);
};

export const getPackCount = code => {
  const set = AllSets[code];
  const commonsCount = set.cards.filter(card => card["rarity"] === "common")
    .length;
  const boosterCommonCount = set.boosterV3.filter(card => card === "common")
    .length;

  return Math.ceil(commonsCount / boosterCommonCount);
};

export const getRandomCard = cards => {
  const calc = Math.floor(Math.random() * cards.length);
  return cards[calc];
};
