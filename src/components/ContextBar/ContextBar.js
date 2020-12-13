import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ContextBar = ({ children, isTabBar }) => (
  <div className={cx('slds-context-bar', { 'slds-context-bar_tabs': isTabBar })}>
    {children}
  </div>
);

ContextBar.defaultProps = {
  children: null,
  isTabBar: false,
};

ContextBar.propTypes = {
  /**
   * Menu items
   */
  children: PropTypes.node,
  /**
   * Whether the menu items are displayed as tabs
   */
  isTabBar: PropTypes.bool,
};

export default ContextBar;
