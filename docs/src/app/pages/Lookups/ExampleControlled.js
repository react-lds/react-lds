import React from 'react';
import { Button, ButtonGroup, Lookup } from 'react-lds';
import exampleData from './exampleData';

class ExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [exampleData[5]],
    };
  }

  onLookupChange = (items) => {
    this.setState({ items });
  }

  onClear = () => {
    this.setState({ items: [], });
  }

  onPopulate = () => {
    this.setState({ items: exampleData });
  }

  loadItems = (searchTerm) => {
    return exampleData.filter(data => data.label.startsWith(searchTerm));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Lookup
          allowCreate
          id="lookup"
          inputLabel="Accounts"
          listLabel="Recent Accounts"
          load={this.loadItems}
          multi
          onChange={this.onLookupChange}
          placeholder="Controlled Lookup"
          selection={items}
        />
        <ButtonGroup className="slds-p-top--medium">
          <Button disabled={items.length < 1} neutral onClick={this.onClear}>Remove Items</Button>
          <Button neutral onClick={this.onPopulate}>Add all items</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ExampleControlled;
