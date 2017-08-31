import React from 'react';
import { Picklist } from 'react-lds';

class ExamplePicklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 5,
      id: 'picklist-1',
      items: [
        { key: 'option1', label: 'Option 1', selected: false },
        { key: 'option2', label: 'Option 2', selected: false },
        { key: 'option3', label: 'Option 3', selected: false },
        { key: 'option4', label: 'Option 4', selected: false },
        { key: 'option5', label: 'Option 5', selected: false },
        { key: 'option6', label: 'Option 6', selected: false },
      ],
      labelInput: 'Picklist Label',
      labelMultiselect: 'Options selected',
      placeholder: 'Picklist placeholder',
    };
  }

  onSelect = (key) => {
    // you are responsible for the logic of multi or single picklists
    const newItems = this.state.items.map((item) => {
      const newItem = Object.assign({}, item);
      if (item.key === key) {
        newItem.selected = !newItem.selected;
      }

      return newItem;
    });

    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <Picklist
          height={this.state.height}
          id={this.state.id}
          items={this.state.items}
          labelInput={this.state.labelInput}
          labelMultiselect={this.state.labelMultiselect}
          onSelect={this.onSelect}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default ExamplePicklist;
