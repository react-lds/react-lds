import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ControlledSplitView } from './ControlledSplitView';

export class SplitView extends Component {
  static propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    onOpen: Function.prototype,
    onClose: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: props.initialIsOpen };
  }

  setIsOpen = (isOpen) => {
    this.setState({ isOpen });
  }

  onOpen = () => {
    this.setIsOpen(true);
    this.props.onOpen();
  }

  onClose = () => {
    this.setIsOpen(false);
    this.props.onClose();
  }

  render() {
    const { isOpen } = this.state;

    return (
      <ControlledSplitView
        { ...this.props }
        isOpen={isOpen}
        onClose={this.onClose}
        onOpen={this.onOpen}
      />
    );
  }
}
