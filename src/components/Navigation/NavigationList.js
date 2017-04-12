import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const NavigationList = ({ id, title, children }, { cssPrefix }) => {
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (
    <div>
      <h2
        className={prefix(['text-title--caps', 'p-around--medium'])}
        id={id}
      >
        {title}
      </h2>
      <ul>
        {React.Children.map(children, child => React.cloneElement(child, { 'aria-describedby': id }))}
      </ul>
    </div>
  );
};

NavigationList.contextTypes = { cssPrefix: PropTypes.string };

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
