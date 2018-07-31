import React from "react";

export const CardAnalysisTableRow = ({ rarity, data, dataType }) => {
  return (
    <tr>
      <td style={{ textAlign: "left" }}>{rarity}</td>
      <td style={{ textAlign: "left" }}>{data["Cards"]}</td>
      {dataType.map(cardType => (
        <td
          key={"td" + cardType + cardType.length}
          style={{ textAlign: "left" }}
        >
          <span>{Math.round((100 * data[cardType]) / data["Cards"], 2)}% </span>
          <span style={{ fontSize: "smaller", color: "slategray" }}>
            ({data[cardType]})
          </span>
        </td>
      ))}
    </tr>
  );
};
