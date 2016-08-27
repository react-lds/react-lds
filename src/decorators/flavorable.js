import React from 'react';
import omit from 'lodash.omit';
import { prefixClasses } from '../utils';

const flavorPropType = validFlavors =>
  function validateFlavor(props, propName, componentName) {
    const flavor = props[propName];

    if (typeof flavor !== 'undefined' && typeof flavor !== 'boolean') {
      return new Error(`${propName} must be a boolean`);
    }

    if (typeof flavor === 'boolean' && !validFlavors.includes(propName)) {
      return new Error(`"${propName}" is not a valid ${componentName} flavor.`);
    }

    return null;
  };

const getFlavors = (props, validFlavors) =>
  Object.keys(props)
    .filter(flavor => validFlavors.includes(flavor))
    .filter(flavor => !!props[flavor]);

const getflavorClasses = (baseClass, flavors) => {
  if (typeof baseClass !== 'string') {
    throw new Error('"baseClass" must be a string');
  }

  return flavors.map(flavor => `${baseClass}--${flavor}`);
};

const filterFlavors = (props, flavors) => omit(Object.assign({}, props), flavors);

const flavorable = (C, baseClass) => {
  const FlavoredComponent = (props, { cssPrefix }) => {
    const { className } = props;
    const prefix = classes => prefixClasses(cssPrefix, classes, className);

    const flavors = getFlavors(props, C.flavors);

    const classes = prefix(getflavorClasses(baseClass, flavors));
    const rest = filterFlavors(props, C.flavors);

    return (<C {...rest} className={classes} />);
  };

  FlavoredComponent.displayName = `Flavored_${C.displayName || C.name}`;

  FlavoredComponent.contextTypes = Object.assign({}, C.contextTypes, {
    cssPrefix: React.PropTypes.string,
  });

  FlavoredComponent.propTypes = Object.assign({},
    C.propTypes,
    { className: React.PropTypes.string },
    C.flavors.reduce((_propTypes, flavor) => {
      const propTypes = _propTypes;
      propTypes[flavor] = flavorPropType(C.flavors);
      return propTypes;
    }, {})
  );

  if (C.variations) {
    FlavoredComponent.variations = C.variations;
  }

  return FlavoredComponent;
};

export default flavorable;
