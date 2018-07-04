import React, { Component } from "react";
import "./App.css";
import { Title } from "./Title";
import { SetSelector } from "./SetSelector";
import { PackStats } from "./PackStats";
import { CardTypeAnalysis } from "./CardTypeAnalysis";
import { CardColorAnalysis } from "./CardColorAnalysis";

class App extends Component {
  state = { code: "UNDEFINED" };

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

          <CardTypeAnalysis code={this.state.code} />
          <CardColorAnalysis code={this.state.code} />
          <PackStats code={this.state.code} />
          <p>Stack Layout</p>
          <p>Notes</p>
        </main>
      </div>
    );
  }
}

export default App;
