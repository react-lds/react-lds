import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const GlobalHeaderItem = ({ children, isSearch }) => (
  <div className={cx('slds-global-header__item', { 'slds-global-header__item_search': isSearch })}>
    {children}
  </div>
);

GlobalHeaderItem.defaultProps = {
  children: null,
  isSearch: false,
};

GlobalHeaderItem.propTypes = {
  children: PropTypes.node,
  isSearch: PropTypes.bool,
};

export default GlobalHeaderItem;
