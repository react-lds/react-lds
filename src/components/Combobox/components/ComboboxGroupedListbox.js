import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { Listbox, Pill } from '../../Pill';

export class ComboboxGroupedListbox extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    makeSelectHandler: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.listboxRef = React.createRef();
  }

  render() {
    const {
      label,
      makeSelectHandler,
      selectedItems,
    } = this.props;

    return (
      <Listbox label={label} ref={this.listboxRef}>
        {selectedItems.map(({ icon, id, label: itemLabel }) => (
          <Pill
            key={id}
            icon={icon ? <Icon icon={icon.icon} sprite={icon.sprite} /> : null}
            label={itemLabel}
            title={itemLabel}
            onClose={makeSelectHandler(id)}
          />
        ))}
      </Listbox>
    );
  }
}
