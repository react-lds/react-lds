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
    tabTitle: _,
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
  scoped: false,
  tabTitle: null,
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
   * Title in Navigation. Can be a React.Element or a string
   */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
   * Only needed when `title` is a React.Element, used as accessibility label
   */
  tabTitle: PropTypes.string,
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
