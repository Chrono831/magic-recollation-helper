import React from "react";

import { Table } from "react-bootstrap";
import { CardAnalysisTableRow } from "./CardAnalysisTableRow";
import { AllSets } from "./AllSets";
import { CardRarities } from "./CardRarities";

export const CardAnalysisTable = ({
  dataType,
  code,
  getCardInfo,
  getCardClass
}) => {
  console.log(`CardAnalysisTable.dataType : ${dataType}`);
  return (
    <Table condensed hover responsive>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Cards</th>
          {dataType.map(cardData => {
            console.log(`cardData : ${cardData}`);
            return (
              <th key={`th-${cardData}-${cardData.length}`}>
                <i className={getCardClass(cardData)} title={cardData} />
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {CardRarities.map(rarity => (
          <CardAnalysisTableRow
            rarity={rarity}
            data={getCardInfo(AllSets[code].cards, rarity)}
            dataType={dataType}
            key={`tr-${dataType.toString().length}-${
              AllSets[code].name
            }-${rarity}`}
          />
        ))}
      </tbody>
    </Table>
  );
};
