import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getAriaLabel, getTabsClass } from './utils';

class TabLink extends Component {
  constructor(props) {
    super(props);
    this.link = null;
  }

  setRef = (c) => {
    this.link = c;
  }

  render() {
    const {
      children,
      id,
      isActive,
      isFocused,
      scoped,
      title,
      ...rest
    } = this.props;

    return (
      <li
        className={cx(
          getTabsClass('__item', scoped),
          isActive && 'slds-is-active',
          isFocused && 'slds-has-focus'
        )}
        key={id}
        role="presentation"
        title={title}
      >
        <a
          {...rest}
          aria-controls={id}
          aria-selected={isActive}
          className={getTabsClass('__link', scoped)}
          id={getAriaLabel(id)}
          role="tab"
          ref={this.setRef}
          tabIndex={isActive ? 0 : -1}
        >
          {children}
        </a>
      </li>
    );
  }
}

TabLink.defaultProps = {
  isActive: false,
  isFocused: false,
  scoped: false,
};

TabLink.propTypes = {
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  scoped: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default TabLink;
