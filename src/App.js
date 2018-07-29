import React, { Component } from "react";
import "./App.css";
import { Title } from "./Title";
import { SetSelector } from "./SetSelector";
import { PackStats } from "./PackStats";
import { CardTypeAnalysis } from "./CardTypeAnalysis";
import { CardColorAnalysis } from "./CardColorAnalysis";
import { PackLayouts } from "./PackLayouts";
import { AllSets } from "./AllSets";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

library.add(faQuestionCircle);

class App extends Component {
  state = { code: AllSets.UNDEFINED };

  setSelected(event) {
    this.setState({ code: event.target.value.toString().toUpperCase() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <main>
          <SetSelector setSelected={this.setSelected.bind(this)} />

          {this.state.code !== AllSets.UNDEFINED && (
            <div>
              <CardTypeAnalysis code={this.state.code} />
              <CardColorAnalysis code={this.state.code} />
              <PackLayouts code={this.state.code} />
              <PackStats code={this.state.code} />
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
