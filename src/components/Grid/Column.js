import React from 'react';
import classNames from 'classnames';
import { prefix, flavorPropTypes, getFlavorClasses, getClassesFromProps } from '../../util';

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

const Column = (props, context) => {
  const baseClass = 'col';
  const classes = [
    baseClass,
    getFlavorClasses(baseClass, props, Column.validFlavors),
    getClassesFromProps(props, customModifiers),
    { [`align-${props.align}`]: !!props.align },
  ];

  return (
    <div className={prefix(classNames(classes), context.cssPrefix)}>
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

Column.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

Column.propTypes = Object.assign(
  flavorPropTypes(Column),
  customModifiersValidations,
  {
    align: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
    children: React.PropTypes.node,
  }
);

export default Column;
