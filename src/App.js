import React, { Component } from "react";
import "./App.css";
import { Title } from "./Title";
import { SetSelector } from "./SetSelector";
import { SetBasics } from "./SetBasics";

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

          <SetBasics code={this.state.code} />
          <p>Pack Stats</p>
          <p>Stack Layout</p>
          <p>Notes</p>
        </main>
      </div>
    );
  }
}

export default App;
