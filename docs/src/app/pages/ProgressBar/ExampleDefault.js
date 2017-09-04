import React, { Component } from 'react';
import { Input, ProgressBar } from 'react-lds';

class ExampleDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  onProgressChange = (evt) => {
    const value = evt.target.value;
    const nextVal = value ? Number.parseInt(value, 10) : 0;

    this.setState({ progress: nextVal });
  }

  render() {
    const { progress } = this.state;

    return (
      <div>
        <div className="slds-p-bottom--small">
          <Input
            id="progressbar-input"
            label="ProgressBar Value"
            value={`${progress}`}
            onChange={this.onProgressChange}
            min="0"
            max="100"
            type="number"
          />
        </div>
        <ProgressBar circular progress={progress} />
      </div>
    );
  }
}

export default ExampleDefault;
