import React from 'react';
import { Picklist } from 'react-lds';

class ExamplePicklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 'item1', label: 'Entry 1', isSelected: false },
        { key: 'item2', label: 'Entry 2', isSelected: false },
        { key: 'item3', label: 'Entry 3', isSelected: false },
        { key: 'item4', label: 'Entry 4', isSelected: false },
        { key: 'item5', label: 'Entry 5', isSelected: false },
        { key: 'item6', label: 'Entry 6', isSelected: false },
      ],
      label: 'Select something!',
    };
    this.callback = this.callback.bind(this);
  }

  callback(key) {
    // you are responsible for the logic of multi or single picklists
    const newItems = this.state.items.map(item => {
      const newItem = Object.assign({}, item);
      if (item.key === key) {
        newItem.isSelected = !newItem.isSelected;
      }

      return newItem;
    });


    const newLabel = newItems.reduce((prev, current) => {
      if (current.isSelected) {
        prev.push(current.label);
      }

      return prev;
    }, []);

    if (newLabel.length === 0) {
      newLabel.push('Select something!');
    }

    this.setState({ items: newItems, label: newLabel.join(', ') });
  }

  render() {
    return (
      <div>
        <Picklist label={this.state.label} items={this.state.items} callback={this.callback} />
      </div>
    );
  }
}

export default ExamplePicklist;
