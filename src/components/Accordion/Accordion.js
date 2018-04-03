import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';

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
    * which section(s) should be open by default, defaults to first
    */
  defaultOpen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /**
   * support opening multiple sections simultaneously
   */
  multiple: PropTypes.bool,
  /**
    * wraps the component in a card
    */
  styled: PropTypes.bool,
  /*
   * controlled mode: id(s) of open section(s)
   */
  open: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
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
    multiple: false,
    open: null,
    onSectionClick: null,
  }

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    const { children, defaultOpen, open } = props;
    if (open === null) { // controlled
      if (defaultOpen) {
        if (typeof defaultOpen === 'string') {
          this.state = { activeSections: [defaultOpen] };
        } else { // is array of strings
          this.state = { activeSections: defaultOpen };
        }
      } else {
        this.state = { activeSections: [children[0].props.id] };
      }
    }
  }

  handleClick = (id) => {
    const { open, onSectionClick, multiple } = this.props;
    if (open !== null) { // controlled
      onSectionClick(id); return;
    }
    // uncontrolled
    this.setState(({ activeSections }) => {
      if (!activeSections.includes(id)) {
        if (multiple) return { activeSections: [...activeSections, id] };
        return { activeSections: [id] };
      }
      return { activeSections: activeSections.filter(a => a !== id) };
    });
  }

  renderSections() {
    const { children, open } = this.props;
    let activeSections = open || this.state.activeSections;
    if (typeof activeSections === 'string') { activeSections = [activeSections]; }
    const sections = children.map(child =>
      React.cloneElement(child, {
        key: child.props.id,
        isOpen: activeSections.includes(child.props.id),
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
