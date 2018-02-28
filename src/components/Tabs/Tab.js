import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getAriaLabel, getTabsClass } from './utils';

const Tab = (props) => {
  const {
    children,
    className,
    id,
    isActive,
    scoped,
    renderTitle: _,
    title: __,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      aria-labelledby={getAriaLabel(id)}
      className={cx(
        getTabsClass('__content', scoped),
        isActive ? 'slds-show' : 'slds-hide'
      )}
      id={id}
      role="tabpanel"
    >
      {isActive === null ? null : children}
    </div>
  );
};

Tab.defaultProps = {
  className: null,
  isActive: false,
  renderTitle: null,
  scoped: false,
};

Tab.propTypes = {
  /**
   * Tab content
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Unique id, used to reference navigation
   */
  id: PropTypes.string.isRequired,
  /**
   * Function to render `title`. Called with ({ id, isActive, isFocused, title})
   */
  renderTitle: PropTypes.func,
  /**
   * Title in Navigation
   */
  title: PropTypes.string.isRequired,
  /**
   * (PRIVATE) Set by parent Tabs
   */
  isActive: PropTypes.bool,
  /**
   * (PRIVATE) Set by parent Tabs
   */
  scoped: PropTypes.bool,
};

export default Tab;
