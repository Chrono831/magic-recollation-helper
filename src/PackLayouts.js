import React, { Component } from "react";

import { CardRowsComplete } from "./CardRowsComplete";
import { CardRowsRandomized } from "./CardRowsRandomized";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HowToUsePackLayouts } from "./HowToUsePackLayouts";

export class PackLayouts extends Component {
  state = { showHelp: false };

  helpIconClickHandler() {
    this.setState({ showHelp: !this.state.showHelp });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "left" }}>
          <span>Pack Layout </span>
          <FontAwesomeIcon
            icon="question-circle"
            title="How To Layout Packs"
            color={"#5f9ea0"}
            onClick={this.helpIconClickHandler.bind(this)}
          />
        </h2>
        <HowToUsePackLayouts show={this.state.showHelp} {...this.props} />
        <CardRowsComplete rarity="Common" {...this.props} />
        <CardRowsRandomized rarity="Uncommon" rows={3} {...this.props} />
        <CardRowsRandomized rarity="Rare" rows={1} {...this.props} />
      </div>
    );
  }
}
