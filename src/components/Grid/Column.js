import React from 'react';
import { prefixable, sizeable, flavorable, variationable } from '../../decorators';

export const Column = (props) => {
  const sldsClasses = [
    'col',
    { [`align-${props.align}`]: !!props.align },
  ];

  return (
    <div className={props.prefix(sldsClasses, props)}>
      {props.children}
    </div>
  );
};

Column.flavors = [
  'padded',
  'padded-medium',
  'padded-large',
  'bump-left',
  'bump-right',
  'bump-top',
  'bump-bottom',
  'rule-right',
  'rule-left',
  'rule-top',
  'rule-bottom',
];

Column.variations = [
  'has-flexi-truncate',
  'no-flex',
  'no-space',
  'grow',
  'grow-none',
  'shrink',
  'shrink-none',
];

Column.propTypes = {
  /**
   * Columns align on the main axis
   */
  align: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * main content
   */
  children: React.PropTypes.node,
};

export default prefixable(
  sizeable(
    variationable(
      flavorable(Column, 'col')
    )
  )
);
