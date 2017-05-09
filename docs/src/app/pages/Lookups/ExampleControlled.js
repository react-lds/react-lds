import React from 'react';
import { Button, Lookup } from 'react-lds';

const exampleData = [
  {
    id: '1',
    label: 'Something',
    meta: 'Very meta',
    objectType: 'contact',
  },
  {
    id: '2',
    label: 'Really',
    objectType: 'contact',
  },
  {
    id: '3',
    label: 'Not so',
    objectType: 'contact',
  },
  {
    id: '4',
    label: 'Much useful',
    objectType: 'contact',
  },
  {
    id: '5',
    label: 'Of any type',
    objectType: 'contact',
  },
  {
    id: '6',
    label: 'Of some type',
    objectType: 'account',
  },
  {
    id: '7',
    label: 'Of some record type',
    objectType: 'record',
  },
];

class ExampleControlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: [],
    };
  }
  onResetClick = () => {
    this.setState({ selection: [] });
  }

  onChange = (selection) => {
    this.setState({ selection });
  }

  loadFunction = () => {
    // eslint-disable-next-line no-console
    console.log('load called');
    return exampleData;
  }

  render() {
    const { selection } = this.state;

    return (
      <div>
        <Lookup
          id="lookup"
          inputLabel="Accounts"
          listLabel="Recent Accounts"
          load={this.loadFunction}
          placeholder="Search Accounts"
          onChange={this.onChange}
          selection={selection}
        />
        <Button onClick={this.onResetClick}>
          Reset selection
        </Button>
      </div>
    );
  }
}

export default ExampleControlled;
