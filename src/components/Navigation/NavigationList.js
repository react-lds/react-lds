import React from 'react';
import PropTypes from 'prop-types';

const NavigationList = ({ id, title, children }) => (
  <div>
    <h2
      className="slds-text-title--caps slds-p-around--medium"
      id={id}
    >
      {title}
    </h2>
    <ul>
      {React.Children.map(children, child => React.cloneElement(child, { 'aria-describedby': id }))}
    </ul>
  </div>
);

NavigationList.defaultProps = {
  id: null,
  children: null,
};

NavigationList.propTypes = {
  /**
   * id of the headline element
   */
  id: PropTypes.string,
  /**
   * headline title
   */
  title: PropTypes.string.isRequired,
  /**
   * NavigationListElement items
   */
  children: PropTypes.node,
};

export default NavigationList;
