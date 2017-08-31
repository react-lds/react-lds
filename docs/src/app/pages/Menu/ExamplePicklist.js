import React from 'react';
import { Picklist } from 'react-lds';

class ExamplePicklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'picklist-1',
      items: [
        { key: 'option1', label: 'Option 1', selected: false },
        { key: 'option2', label: 'Option 2', selected: false },
        { key: 'option3', label: 'Option 3', selected: false },
        { key: 'option4', label: 'Option 4', selected: false },
        { key: 'option5', label: 'Option 5', selected: false },
        { key: 'option6', label: 'Option 6', selected: false },
      ],
      label: [],
      labelInput: 'Picklist Label',
      labelMultiselect: 'Options selected',
      placeholder: 'Picklist placeholder',
    };
  }

  callback = (key) => {
    // you are responsible for the logic of multi or single picklists
    const newItems = this.state.items.map((item) => {
      const newItem = Object.assign({}, item);
      if (item.key === key) {
        newItem.selected = !newItem.selected;
      }

      return newItem;
    });


    const newLabel = newItems.reduce((prev, current) => {
      if (current.selected) {
        prev.push(current.label);
      }

      return prev;
    }, []);

    this.setState({ items: newItems, label: newLabel });
  }

  render() {
    return (
      <div>
        <Picklist
          label={this.state.label}
          labelInput={this.state.labelInput}
          labelMultiselect={this.state.labelMultiselect}
          id={this.state.id}
          items={this.state.items}
          callback={this.callback}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default ExamplePicklist;
