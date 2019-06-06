import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EntityCombobox, ComboboxGroupedListbox } from '../Combobox';

class GroupedCombobox extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    onExpand: PropTypes.func.isRequired,
    renderListbox: PropTypes.func,
  }

  static defaultProps = {
    renderListbox: null,
  }

  renderListbox = (listboxProps, opts) => {
    const { isExpanded, onExpand, renderListbox } = this.props;

    const sharedProps = {
      ...listboxProps,
      isExpanded,
      onExpand
    };

    if (renderListbox) return renderListbox(sharedProps, opts);
    return <ComboboxGroupedListbox {...sharedProps} />;
  }

  render() {
    const { isExpanded, onExpand, ...rest } = this.props;
    return (
      <EntityCombobox
        {...rest}
        renderListbox={this.renderListbox}
      />
    );
  }
}

export default GroupedCombobox;
