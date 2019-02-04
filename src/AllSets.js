import dom from "./sets/DOM";
import ktk from "./sets/KTK";
import ths from "./sets/THS";
import m19 from "./sets/M19";
import aer from "./sets/AER";
import emn from "./sets/EMN";
import frf from "./sets/FRF";
import kld from "./sets/KLD";
import soi from "./sets/SOI";
import rix from "./sets/RIX";
import akh from "./sets/AKH";
import bfz from "./sets/BFZ";
import dtk from "./sets/DTK";
import hou from "./sets/HOU";
import ogw from "./sets/OGW";
import ori from "./sets/ORI";
import xln from "./sets/XLN";
import zen from "./sets/ZEN";
import grn from "./sets/GRN";
import rna from "./sets/RNA";

import { cardSort, getCardColorIdentity } from "./cardUtilities";
import { BasicLands } from "./BasicLands";

const getCleanedSet = (code) => {
  const cardSet = AllSetsInternal[code];
  const cards = cardSet.cards.filter(card => BasicLands.indexOf(card.name) === -1);

  const cardsSlimSet = new Set();
  const cardsSlimArr = [];
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const newCard = {
      rarity: card.rarity,
      name: card.name,
      colorIdentity: getCardColorIdentity(card),
      types: card.types,
      sortIndex: i + 1,
      nameHash: card.name.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0)
    };

    if (!cardsSlimSet.has(newCard.nameHash)) {
      cardsSlimSet.add(newCard.nameHash);
      cardsSlimArr.push(newCard);
    }
  }
  cardSet.cards = cardsSlimArr.sort(cardSort);
  return cardSet;
};

export const AllSetsInternal = {
  RNA: rna, //gonna have to migrate all of the parsing to the new json format and update every thing...
  GRN: grn,
  M19: m19,
  DOM: dom,
  RIX: rix,
  XLN: xln,
  HOU: hou,
  AKH: akh,
  AER: aer,
  KLD: kld,
  EMN: emn,
  SOI: soi,
  OGW: ogw,
  BFZ: bfz,
  ORI: ori,
  DTK: dtk,
  FRF: frf,
  KTK: ktk,
  THS: ths,
  ZEN: zen,

  UNDEFINED: { code: "", cards: [] }
};

export const AllSets = {
  RNA: getCleanedSet('RNA'),
  GRN: getCleanedSet('GRN'),
  M19: getCleanedSet('M19'),
  DOM: getCleanedSet('DOM'),
  RIX: getCleanedSet('RIX'),
  XLN: getCleanedSet('XLN'),
  HOU: getCleanedSet('HOU'),
  AKH: getCleanedSet('AKH'),
  AER: getCleanedSet('AER'),
  KLD: getCleanedSet('KLD'),
  EMN: getCleanedSet('EMN'),
  SOI: getCleanedSet('SOI'),
  OGW: getCleanedSet('OGW'),
  BFZ: getCleanedSet('BFZ'),
  ORI: getCleanedSet('ORI'),
  DTK: getCleanedSet('DTK'),
  FRF: getCleanedSet('FRF'),
  KTK: getCleanedSet('KTK'),
  THS: getCleanedSet('THS'),
  ZEN: getCleanedSet('ZEN'),
  UNDEFINED: { code: "", cards: [] }
}
