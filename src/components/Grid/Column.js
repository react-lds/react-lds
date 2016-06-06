import React from 'react';
import classNames from 'classnames';
import { prefix, flavorPropTypes, getFlavorClasses } from '../../util';

const Column = (props, context) => {
  const baseClass = 'col';
  const classes = [
    baseClass,
    getFlavorClasses(baseClass, props, Column.validFlavors),
  ];

  return (
    <div className={prefix(classNames(classes), context.cssPrefix)}>
      {props.children}
    </div>
  );
};

Column.validFlavors = [
  'padded',
];

Column.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

Column.propTypes = Object.assign(
  flavorPropTypes(Column),
  {
    children: React.PropTypes.node,
  }
);

export default Column;
