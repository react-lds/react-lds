import React from 'react';
import { flavorPropTypes, getFlavorClasses, getClassesFromProps } from '../../util';
import { prefixable, sizeable } from '../../decorators';

const customModifiers = [
  'has-flexi-truncate',
  'no-flex',
  'no-space',
  'grow',
  'grow-none',
  'shrink',
  'shrink-none',
];

const customModifiersValidations = {};

customModifiers.forEach(propType => {
  customModifiersValidations[propType] = React.PropTypes.bool;
});

const Column = (props) => {
  const baseClass = 'col';
  const sldsClasses = [
    baseClass,
    getFlavorClasses(baseClass, props, Column.validFlavors),
    getClassesFromProps(props, customModifiers),
    { [`align-${props.align}`]: !!props.align },
  ];

  return (
    <div className={props.prefix(sldsClasses, props)}>
      {props.children}
    </div>
  );
};

Column.validFlavors = [
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

Column.propTypes = Object.assign(
  flavorPropTypes(Column),
  customModifiersValidations,
  {
    align: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
    children: React.PropTypes.node,
  }
);

export default prefixable(sizeable(Column));
