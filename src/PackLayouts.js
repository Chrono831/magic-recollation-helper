import React from "react";

import { CardRowsComplete } from "./CardRowsComplete";
import { CardRowsRandomized } from "./CardRowsRandomized";

export const PackLayouts = props => {
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "left" }}>Pack Layout</h2>
      <CardRowsComplete rarity="Common" {...props} />
      <CardRowsRandomized rarity="Uncommon" rows={3} {...props} />
      <CardRowsRandomized rarity="Rare" rows={1} {...props} />
    </div>
  );
};
