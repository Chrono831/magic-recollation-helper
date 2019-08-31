import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HowToUseTitle } from './HowToUseTitle';

export class Title extends Component {
  state = { showHelp: false };

  helpIconClickHandler() {
    this.setState({ showHelp: !this.state.showHelp });
  }

  render() {
    return (
      <div>
        <h1>
          <span>Magic ReCollation Helper </span>
          <FontAwesomeIcon
            icon="question-circle"
            title="How To Use"
            color={'#5f9ea0'}
            onClick={this.helpIconClickHandler.bind(this)}
          />
        </h1>
        <HowToUseTitle show={this.state.showHelp} {...this.props} />
      </div>
    );
  }
}
