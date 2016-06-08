import React from 'react';

const breakpoints = [
  'small',
  'medium',
  'large',
  'max-small',
  'max-medium',
  'max-large',
];

const sizeRegex = /^([1-9]|1[0-2])-([1-9]|1[0-2])$/;

function sizeOfPropType(props, propName) {
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
}

function getSizeClassNames(props) {
  const allBreakpoints = breakpoints;
  allBreakpoints.unshift('');
  const classes = [];

  allBreakpoints.forEach(breakpoint => {
    const propName = breakpoint === '' ? 'size-of' : `${breakpoint}-size-of`;
    const sizeString = breakpoint === '' ? 'size' : `${breakpoint}-size`;

    const size = props[propName];
    if (sizeRegex.test(size)) {
      const from = parseInt(size.split('-')[0], 10);
      const to = parseInt(size.split('-')[1], 10);
      classes.push(`${sizeString}--${from}-of-${to}`);
    }
  });

  return classes;
}

const sizeable = (Component) => {
  const displayName = Component.displayName || Component.name;

  const SizeableComponent = (props) => {
    const newProps = Object.assign({}, props);
    const existingSlds = props.sldsClasses || [];

    newProps.sldsClasses = [...new Set(
      getSizeClassNames(props).concat(existingSlds)
    )];

    return (
      <Component {...newProps} />
    );
  };

  SizeableComponent.displayName = displayName;

  if (Component.propTypes && Component.propTypes['size-of']) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: \`@sizeable()\` is overriding the original \`${displayName}.propTypes.size-of\`.`);
  }

  SizeableComponent.propTypes = Object.assign(
    {},
    Component.propTypes,
    { 'size-of': sizeOfPropType },
    breakpoints.reduce((propTypes, breakpoint) => {
      // eslint-disable-next-line no-param-reassign
      propTypes[`${breakpoint}-size-of`] = sizeOfPropType;
      return propTypes;
    }, {})
  );

  return SizeableComponent;
};

export {
  sizeable as default,
};
