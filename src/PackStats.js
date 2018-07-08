import React from "react";

import { AllSets } from "./data/AllSets";

export const PackStats = props => {
  const data = AllSets[props.code];

  let booster = [];
  let packData = {
    common: 0,
    uncommon: 0,
    rare: 0
  };
  if (props.code !== "UNDEFINED") {
    booster = data.booster.reduce((acc, val) => acc.concat(val), []);
    packData = {
      common: booster.filter(card => card === "common").length,
      uncommon: booster.filter(card => card === "uncommon").length,
      rare: booster.filter(card => card === "rare").length
    };
  }

  const getArray = count => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      //arr.push(<td key={"td" + i + displayText}>{displayText}</td>);
      arr.push(i);
    }
    return arr;
  };

  return (
    <div>
      <p>Pack Stats</p>
      <table>
        <thead>
          <tr>
            <th>Rarity</th>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(slot => (
              <th key={"th" + slot}>{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Common</td>
            {getArray(packData.common).map(slot => (
              <td key={"td" + slot + "c"}>C</td>
            ))}
          </tr>
          <tr>
            <td>Uncommon</td>
            {getArray(packData.uncommon).map(slot => (
              <td key={"td" + slot + "u"}>U</td>
            ))}
          </tr>
          <tr>
            <td>Rare</td>
            {getArray(packData.rare).map(slot => (
              <td key={"td" + slot + "r"}>R</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
