import React from "react";
import { Table } from "react-bootstrap";

import { AllSets } from "./AllSets";

export const PackStats = props => {
  const data = AllSets[props.code];

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Pack Stats</h2>
      <Table striped condensed hover>
        <thead>
          <tr>
            <th>Slot</th>
            <th>Card Types</th>
          </tr>
        </thead>
        <tbody>
          {data.booster.map((slot, index) => (
            <tr key={`data-booster-td-${slot}-${index}`}>
              <td style={{ textAlign: "left" }}>{index + 1}</td>
              <td style={{ textAlign: "left" }}>{slot.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
    </div>
  );
};
