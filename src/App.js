import React, {Component} from "react";
import "./App.css";
import Title from "./Title";
import SetSelector from "./SetSelector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <main>
            <SetSelector/>

            <p>Set Basics</p>
            <p>Pack Stats</p>
            <p>Stack Layout</p>
            <p>Notes</p>
        </main>
      </div>
    );
  }
}

export default App;
