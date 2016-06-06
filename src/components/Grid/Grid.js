import React from 'react';
import classNames from 'classnames';
import { prefix, flavorPropTypes, getFlavorClasses } from '../../util';

const Grid = (props, context) => {
  const baseClass = 'grid';
  const classes = [
    baseClass,
    getFlavorClasses(baseClass, props, Grid.validFlavors),
  ];

  return (
    <div className={prefix(classNames(classes), context.cssPrefix)}>
      {props.children}
    </div>
  );
};

Grid.validFlavors = [
  'pull-padded',
];

Grid.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

Grid.propTypes = Object.assign(
  flavorPropTypes(Grid),
  {
    children: React.PropTypes.node,
  }
);

export default Grid;
