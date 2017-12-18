import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
const propTypes = {
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
  /*
   * controlled mode: id of open section
   */
  open: PropTypes.string,
  /*
   * controlled mode: section click handler
   */
  onSectionClick: PropTypes.func,
};

class Accordion extends Component {
  static defaultProps = {
    className: null,
    styled: false,
    defaultOpen: null,
    open: null,
    onSectionClick: null,
  }

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    const { open } = props;
    if (open === null) {
      this.state = { activeSection: props.defaultOpen ? props.defaultOpen : props.children[0].props.id };
    }
  }

  handleClick = (id) => {
    const { open, onSectionClick } = this.props;
    if (open === null) {
      this.setState({ activeSection: id });
    } else {
      onSectionClick(id);
    }
  }

  renderSections() {
    const { children, open } = this.props;
    const activeSection = (open === null) ? this.state.activeSection : open;
    const sections = children.map(child =>
      React.cloneElement(child, {
        key: child.props.id,
        isOpen: child.props.id === activeSection,
        onClick: () => this.handleClick(child.props.id),
      }));
    return sections;
  }

  render() {
    const { className, styled } = this.props;
    const rest = omit(this.props, Object.keys(propTypes));

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

export default Accordion;
