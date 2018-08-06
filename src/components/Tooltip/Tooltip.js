import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlledTooltip, { POSITIONS } from './ControlledTooltip';

class Tooltip extends Component {
  static defaultProps = {
    className: null,
    portalSelector: null,
    position: 'top-start',
    renderTitle: null,
  }

  static propTypes = {
    /**
     * Will be wrapped with a div referencing the tooltip
     */
    children: PropTypes.node.isRequired,
    /**
     * Optional className applied to the slds-popover element
     */
    className: PropTypes.string,
    /**
     * Id linking the popover to the reference
     */
    id: PropTypes.string.isRequired,
    /**
     * If set, use element with this selector as Portal for Popper
     */
    portalSelector: PropTypes.string,
    /**
     * Position of the popover. The popover will move if it hits a window boundary
     */
    position: PropTypes.oneOf(POSITIONS),
    /**
     * Function that renders `title` if set. Is passed the `title` prop
     */
    renderTitle: PropTypes.func,
    /**
     * Static title property
     */
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
  }

  state = { isOpen: false }

  setOpen = () => {
    this.setState({ isOpen: true });
  }

  setClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <ControlledTooltip
        {...this.props}
        isOpen={isOpen}
        onOpen={this.setOpen}
        onClose={this.setClose}
      />
    );
  }
}

export default Tooltip;
