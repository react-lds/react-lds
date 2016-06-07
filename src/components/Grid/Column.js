import React from 'react';
import { prefixable, sizeable, flavorable, variationable } from '../../decorators';

const Column = (props) => {
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

Column.propTypes = Object.assign({}, {
  align: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: React.PropTypes.node,
});

export default prefixable(
  sizeable(
    variationable(
      flavorable(Column, 'grid')
    )
  )
);
