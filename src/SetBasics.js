import React, { Component } from "react";

import dom from "./sets/DOM";

class SetBasics extends Component {
  //pack, set, creature, instant, sorcery, artifact, enchantment, land, planeswalker
  getCards = (set, rarity) => {
    const temp = set.cards
      .filter(card => card.rarity === rarity)
      .map(card => card.types)
      .reduce(function(types, type) {
        if (type in types) {
          types[type]++;
        } else {
          types[type] = 1;
        }
        return types;
      }, {});
    console.log(temp);
    return temp;
  };

  render() {
    const booster = dom.booster.toString();
    console.log(booster);
    const commonsData = this.getCards(dom, "Common");
    console.log(commonsData);

    //<ul> {commonsData.map(type => <li>{type}</li>)}</ul>
    return (
      <div>
        <p>Set Basics</p>
        <p>{commonsData.length}</p>
      </div>
    );
  }
}

export default SetBasics;
