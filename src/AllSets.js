/*
import dom from "./sets/DOM";
import ktk from "./sets/KTK";
import ths from "./sets/THS";
import ust from "./sets/UST";
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
*/
import rna from "./sets/RNA";

import { cardSort, getCardColorIdentity } from "./cardUtilities";
import { BasicLands } from "./BasicLands";

const getCleanedSet = (code) => {
  const cardSet = AllSetsInternal[code];
  const cards = cardSet.cards.filter(card => BasicLands.indexOf(card.name) === -1);

  const cardsSlimSet = new Set();
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
    cardsSlimSet.add(newCard);
  }
  const cardSlimArr = [...cardsSlimSet ];
  cardSet.cards = cardSlimArr.sort(cardSort);

  return cardSet;
};

export const AllSetsInternal = {
  RNA: rna, //gonna have to migrate all of the parsing to the new json format and update every thing...
  /*
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
  UST: ust,
  */

  UNDEFINED: { code: "", cards: [] }
};

export const AllSets = {
  RNA: getCleanedSet('RNA'),
  UNDEFINED: { code: "", cards: [] }
}
