import React from "react";
import { AllSets } from "./data/AllSets";

const setList = Object.keys(AllSets).map(set => {
  return { name: AllSets[set].name, code: AllSets[set].code };
});

export const SetSelector = props => (
  <div className="SetSelector">
    <span className={"SetSelector-title"}>Set</span>
    <select
      onChange={props.setSelected}
      autoFocus={true}
      required={true}
      className={"SetSelector-select"}
    >
      <option className={"SetSelector-option"} value="">
        Select a set
      </option>
      {setList.map(set => (
        <option
          className={"SetSelector-option"}
          key={set.code}
          value={set.code}
        >
          {set.name}
        </option>
      ))}
    </select>
  </div>
);
