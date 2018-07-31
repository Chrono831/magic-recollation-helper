import React from "react";
import { AllSets } from "./AllSets";
import "./SetSelector.css";

const MIN_DATE = 19900101;

const getDateFormatted = date =>
  date ? parseInt(date.replace(/-/g, ""), 10) : MIN_DATE;

const sortSetByReleaseDateDesc = (a, b) =>
  getDateFormatted(b.releaseDate) - getDateFormatted(a.releaseDate);

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
      style={{ padding: "5px" }}
      defaultValue={"placeholder"}
    >
      <option value="placeholder" disabled>
        Select a set
      </option>
      {setList.map(set => (
        <option key={set.code} value={set.code}>
          {set.name} ({set.code})
        </option>
      ))}
    </select>
  </div>
);
