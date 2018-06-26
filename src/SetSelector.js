import React from "react";

const setList = [
  { name: "Unstable", code: "UST" },
  { name: "Dominaria", code: "DOM" },
  { name: "Theros", code: "THS" },
  { name: "Khans of Tarkir", code: "KTK" }
];

const SetSelector = props => (
  <div className="SetSelector">
    <span className={"SetSelector-title"}>Set</span>
    <select
      onChange={props.setSelected}
      autoFocus={true}
      required={true}
      className={"SetSelector-select"}
    >
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

export default SetSelector;
