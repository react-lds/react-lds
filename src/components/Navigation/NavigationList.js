import React from 'react';

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

NavigationList.contextTypes = { cssPrefix: React.PropTypes.string };

NavigationList.propTypes = {
  /**
   * id of the headline element
   */
  id: React.PropTypes.string,
  /**
   * headline title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * NavigationListElement items
   */
  children: React.PropTypes.node,
};

export default NavigationList;
