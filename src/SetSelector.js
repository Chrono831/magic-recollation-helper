import React from "react";
import { AllSets } from "./AllSets";
import "./SetSelector.css";

const sortSetByReleaseDateDesc = (a, b) => {
  const aConverted = a.releaseDate
    ? parseInt(a.releaseDate.replace(/-/g, ""), 10)
    : 19900101;
  const bConverted = b.releaseDate
    ? parseInt(b.releaseDate.replace(/-/g, ""), 10)
    : 19900101;
  return bConverted - aConverted;
};

const setList = Object.keys(AllSets)
  .map(set => {
    return {
      name: AllSets[set].name,
      code: AllSets[set].code,
      releaseDate: AllSets[set].releaseDate
    };
  })
  .sort(sortSetByReleaseDateDesc)
  .filter(set => set.code !== "");

export const SetSelector = props => (
  <div className="SetSelector">
    <span className={"SetSelector-title"}>Set</span>
    <select
      onChange={props.setSelected}
      autoFocus={true}
      required={true}
      className={"SetSelector-select"}
      defaultValue={"placeholder"}
    >
      <option value="placeholder" disabled>
        Select a set
      </option>
      {setList.map(set => (
        <option key={set.code} value={set.code}>
          {set.name}
        </option>
      ))}
    </select>
  </div>
);
