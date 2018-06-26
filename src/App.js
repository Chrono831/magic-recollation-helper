import React, { Component } from "react";
import "./App.css";
import Title from "./Title";
import SetSelector from "./SetSelector";
import SetBasics from "./SetBasics";

import dom from "./sets/DOM";
import ktk from "./sets/KTK";
import ths from "./sets/THS";
import ust from "./sets/UST";

class App extends Component {
  state = { selectedSet: "DOM" };

  setSelected(event) {
    console.log(`setSelected : ${event.target.value}`);
    this.setState({ setSelected: event.target.value });
  }

  getSetData() {
    const upperCode = this.state.selectedSet.toUpperCase();
    const allSets = {
      DOM: dom,
      KTK: ktk,
      THS: ths,
      UST: ust
    };
    return allSets[upperCode];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <main>
          <SetSelector setSelected={this.setSelected.bind(this)} />

          <SetBasics setData={this.getSetData.bind(this)} />
          <p>Pack Stats</p>
          <p>Stack Layout</p>
          <p>Notes</p>
        </main>
      </div>
    );
  }
}

export default App;
