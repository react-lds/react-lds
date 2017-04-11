import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash.omit';

import { flavorable, variationable } from '../../decorators';
import { prefixClasses } from '../../utils';

const validBreakpoints = [
  'small',
  'medium',
  'large',
  'max-small',
  'max-medium',
  'max-large',
];

const breakPointProp = breakpoint => `${breakpoint}-sizeOf`;
const sizeRegex = /^([1-9]|1[0-2])-([1-9]|1[0-2])$/;

export const Column = (props, { cssPrefix }) => {
  const { align, children, className, omitCol, ...rest } = props;

  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    { col: !omitCol },
    { [`align-${align}`]: !!align },
  ];

  const breakpoints = Array.from(validBreakpoints);
  breakpoints.unshift('');

  breakpoints.forEach((breakpoint) => {
    const propName = breakpoint === '' ? 'sizeOf' : breakPointProp(breakpoint);
    const sizeString = breakpoint === '' ? 'size' : `${breakpoint}-size`;

    const size = props[propName];
    if (sizeRegex.test(size)) {
      const from = parseInt(size.split('-')[0], 10);
      const to = parseInt(size.split('-')[1], 10);
      sldsClasses.push(`${sizeString}--${from}-of-${to}`);
    }
  });

  const restProps = omit(rest, validBreakpoints.map(breakPointProp), 'sizeOf');
  return (
    <div {...restProps} className={prefix(sldsClasses, className)}>{children}</div>
  );
};

Column.flavors = [
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

Column.contextTypes = { cssPrefix: PropTypes.string };

const sizeOfPropType = (props, propName) => {
  const size = props[propName];

  if (typeof size !== 'undefined' && typeof size !== 'string') {
    return new Error(`${propName} must be a string`);
  }

  if (typeof size === 'string' && !sizeRegex.test(size)) {
    return new Error(`${propName} must be of format {1-12}-{1-12}`);
  }

  if (sizeRegex.test(size)) {
    const from = parseInt(size.split('-')[0], 10);
    const to = parseInt(size.split('-')[1], 10);

    if (from > to) {
      return new Error(`${propName} ${size} is impossible. \`${from}\` needs to be smaller than \`${to}\``);
    }
  }

  return null;
};

const columnPropTypes = {
  /**
   * alignment of columns on the main axis
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * column content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * non-responsive sizeOf
   */
  sizeOf: sizeOfPropType,
  /**
   * omit 'slds-col'
   */
  omitCol: PropTypes.bool,
};

Column.propTypes = Object.assign({},
  columnPropTypes,
  validBreakpoints.reduce((_propTypes, breakpoint) => {
    const propTypes = _propTypes;
    propTypes[breakPointProp(breakpoint)] = sizeOfPropType;
    return propTypes;
  }, {}));

export default variationable(
  flavorable(Column, 'col')
);
