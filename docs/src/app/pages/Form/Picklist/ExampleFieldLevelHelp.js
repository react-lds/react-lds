import React from 'react';
import { Picklist, FieldLevelHelp } from 'react-lds';

const myFieldLevelHelp = <FieldLevelHelp onClick={() => {}} tooltip="Helpings" />;

class ExampleFieldLevelHelp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 'header1', label: 'Header 1', isHeader: true },
        { key: 'option1', label: 'Option 1', selected: false },
        { key: 'option2', label: 'Option 2', selected: false },
        { key: 'option3', label: 'Option 3', selected: false },
        { key: 'option4', label: 'Option 4', selected: false },
        { key: 'option5', label: 'Option 5', selected: false },
        { key: 'header2', label: 'Header 2', isHeader: true },
        { key: 'option6', label: 'Option 6', selected: false },
      ],
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
          height={5}
          id={'picklist-1'}
          items={this.state.items}
          labelInput={'Picklist Label'}
          labelMultiselect={'Options selected'}
          onSelect={this.onSelect}
          placeholder={'Picklist placeholder'}
          fieldLevelHelp={myFieldLevelHelp}
        />
      </div>
    );
  }
}

export default ExampleFieldLevelHelp;
