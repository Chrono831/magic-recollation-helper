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

export const AllSets = {
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
