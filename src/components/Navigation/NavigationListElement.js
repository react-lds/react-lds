import React from 'react';
import PropTypes from 'prop-types';

const NavigationListElement = ({ children, active, ...rest }) => {
  const activeClass = active ? 'slds-is-active' : undefined;

  return (
    <li className={activeClass}>
      {React.cloneElement(children, {
        className: 'slds-navigation-list--vertical__action slds-text-link--reset',
        ...rest
      })}
    </li>
  );
};


NavigationListElement.defaultProps = {
  active: false,
  'aria-describedby': null,
};

NavigationListElement.propTypes = {
  /**
   * typically an a tag
   */
  children: PropTypes.node.isRequired,
  /**
   * renders navigation element as active
   */
  active: PropTypes.bool,
  /**
   * aria describedby, set by NavigationList into props
   */
  'aria-describedby': PropTypes.string,
};

export default NavigationListElement;
