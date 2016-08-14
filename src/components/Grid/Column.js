import React from 'react';
import { prefixable, flavorable, variationable } from '../../decorators';
import sizeable from './sizeable';

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
   * alignment of columns on the main axis
   */
  align: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * column content
   */
  children: React.PropTypes.node,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  sizeable(
    variationable(
      flavorable(Column, 'col')
    )
  )
);
