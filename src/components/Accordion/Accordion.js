import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

export default class Accordion extends Component {
  static defaultProps = {
    className: null,
    styled: false,
    defaultOpen: null,
  }

  static propTypes = {
    /**
     * sections
     */
    children: PropTypes.node.isRequired,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
      * which section should be open by default, defaults to first
      */
    defaultOpen: PropTypes.string,
    /**
      * wraps the component in a card
      */
    styled: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = { activeSection: props.defaultOpen ? props.defaultOpen : props.children[0].props.id };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ activeSection: id });
  }

  renderSections() {
    const { children } = this.props;
    const sections = children.map(child =>
      React.cloneElement(child, {
        key: child.props.id,
        open: child.props.id === this.state.activeSection,
        onClick: () => this.handleClick(child.props.id),
      }));
    return sections;
  }

  render() {
    const { className, styled } = this.props;
    const rest = omit(this.props, Object.keys(Accordion.propTypes));

    const sldsClasses = [
      'slds-accordion',
      className
    ];

    if (styled) {
      return (
        <div className="slds-card">
          <ul {...rest} className={cx(sldsClasses)}>
            {this.renderSections()}
          </ul>
        </div>
      );
    }

    return (
      <ul {...rest} className={cx(sldsClasses)}>
        {this.renderSections()}
      </ul>
    );
  }

}
