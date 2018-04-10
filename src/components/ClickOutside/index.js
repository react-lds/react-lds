import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ClickOutside extends Component {
  static propTypes = {
    /**
     * Nodes that will not trigger the click handler to trigger
     * @type {Node}
     */
    children: PropTypes.node.isRequired,
    /**
    * If true (default) the outside click is registered.
    * Otherwise only the children are rendered
    * @type {Bool}
    */
    condition: PropTypes.bool,
    /**
     * Handler which is being triggered when a click event outside of the
     * children prop is fired
     * @type {Function}
     */
    onClickOutside: PropTypes.func.isRequired,
    /**
     * Will be passed to window.addEventListener,
     * See: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @type {Bool}
     */
    useCapture: PropTypes.bool,
  }

  static defaultProps = {
    condition: true,
    useCapture: false,
  }

  componentDidMount() {
    const { condition } = this.props;

    if (condition) {
      this.registerEventListener();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { condition } = this.props;
    const { condition: nextCondition } = nextProps;

    if (condition !== nextCondition) {
      if (nextCondition) {
        this.registerEventListener();
      } else {
        this.unregisterEventListener();
      }
    }
  }

  componentWillUnmount() {
    this.unregisterEventListener();
  }

  getContainer = (ref) => {
    this.container = ref;
  }

  registerEventListener() {
    const { useCapture } = this.props;

    document.addEventListener('click', this.handle, useCapture);
  }

  unregisterEventListener() {
    const { useCapture } = this.props;

    document.removeEventListener('click', this.handle, useCapture);
  }

  handle = (e) => {
    const { onClickOutside } = this.props;
    const $el = this.container;
    if (!$el.contains(e.target)) { onClickOutside(e); }
  }

  render() {
    const {
      children, condition: _, onClickOutside, useCapture, ...rest
    } = this.props;

    return <div {...rest} ref={this.getContainer}>{children}</div>;
  }
}
