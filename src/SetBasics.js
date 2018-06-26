import React from "react";

const SetBasics = props => {
  //pack, set, creature, instant, sorcery, artifact, enchantment, land, planeswalker

  const rarities = ["Common", "Uncommon", "Rare", "Mythic Rare"];
  const setData = props.setData;
  console.log(`setData.code : ${setData.code}`);
  return (
    <div>
      <p>Set Basics</p>
      <table>
        <thead>
          <tr>
            <th>Rarity</th>
            <th>Cards</th>
            <th>Creature</th>
            <th>Instant</th>
            <th>Sorcery</th>
            <th>Enchantment</th>
            <th>Artifact</th>
            <th>Land</th>
            <th>Planeswalker</th>
          </tr>
        </thead>
        <tbody>
          {rarities.map(rarity => (
            <BasicTableRow
              set={setData}
              rarity={rarity}
              key={setData.name + rarity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BasicTableRow = props => {
  const getCardInfo = (set, rarity) => {
    const cardsInRarity = set.cards.filter(card => card.rarity === rarity);
    const data = cardsInRarity
      .map(card => card.types)
      .reduce((flat, next) => flat.concat(next), [])
      .reduce(function(types, type) {
        if (type in types) {
          types[type]++;
        } else {
          types[type] = 1;
        }
        return types;
      }, {});
    data["Cards"] = cardsInRarity.length;
    data["Creature"] = "Creature" in data ? data["Creature"] : 0;
    data["Instant"] = "Instant" in data ? data["Instant"] : 0;
    data["Sorcery"] = "Sorcery" in data ? data["Sorcery"] : 0;
    data["Enchantment"] = "Enchantment" in data ? data["Enchantment"] : 0;
    data["Artifact"] = "Artifact" in data ? data["Artifact"] : 0;
    data["Land"] = "Land" in data ? data["Land"] : 0;
    data["Planeswalker"] = "Planeswalker" in data ? data["Planeswalker"] : 0;
    return data;
  };

  const data = getCardInfo(props.set, props.rarity);

  return (
    <tr>
      <td>{props.rarity}</td>
      <td>{data["Cards"]}</td>
      <td>{data["Creature"]}</td>
      <td>{data["Instant"]}</td>
      <td>{data["Sorcery"]}</td>
      <td>{data["Enchantment"]}</td>
      <td>{data["Artifact"]}</td>
      <td>{data["Land"]}</td>
      <td>{data["Planeswalker"]}</td>
    </tr>
  );
};

export default SetBasics;
