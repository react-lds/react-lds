import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ControlledSplitView } from './ControlledSplitView';

export class SplitView extends Component {
  static propTypes = {
    initialIsOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    initialIsOpen: false,
    onOpen: Function.prototype,
    onClose: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: props.initialIsOpen };
  }

  onOpen = () => {
    const { onOpen } = this.props;
    this.setIsOpen(true);
    onOpen();
  }

  onClose = () => {
    const { onClose } = this.props;
    this.setIsOpen(false);
    onClose();
  }

  setIsOpen = (isOpen) => {
    this.setState({ isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <ControlledSplitView
        {...this.props}
        isOpen={isOpen}
        onClose={this.onClose}
        onOpen={this.onOpen}
      />
    );
  }
}
