import React from 'react';
import classNames from 'classnames';
import { prefix, flavorPropTypes, responsivePropTypes, getFlavorClasses, getClassesFromProps } from '../../util';

const Grid = (props, { cssPrefix }) => {
  const baseClass = 'grid';
  const classes = [
    baseClass,
    getFlavorClasses(baseClass, props, Grid.validFlavors),
    getClassesFromProps(props, Object.keys(Grid.propTypes), /wrap/),
  ];

  return (
    <div className={prefix(classNames(classes), cssPrefix, props.className)}>
      {props.children}
    </div>
  );
};

Grid.validFlavors = [
  'frame',
  'vertical',
  'reverse',
  'vertical-reverse',
  'align-center',
  'align-spread',
  'align-space',
  'align-end',
  'vertical-align-center',
  'certical-align-end',
  'vertical-stretch',
  'pull-padded',
  'pull-padded-medium',
  'pull-padded-large',
];

Grid.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

Grid.propTypes = Object.assign(
  flavorPropTypes(Grid),
  responsivePropTypes('wrap', ['small', 'medium', 'large'], React.PropTypes.bool, { addBase: true }),
  responsivePropTypes('nowrap', ['small', 'medium', 'large'], React.PropTypes.bool, { addBase: true }),
  {
    children: React.PropTypes.node,
  }
);

export default Grid;
