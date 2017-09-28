/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

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

  return flavors.map(flavor => `slds-${baseClass}_${flavor}`);
};

const filterFlavors = (props, flavors) => omit(Object.assign({}, props), flavors);

const flavorable = (C, baseClass) => {
  const FlavoredComponent = (props) => {
    const sldsClasses = cx([...getflavorClasses(baseClass, getFlavors(props, C.flavors)), props.className]);
    const rest = filterFlavors(props, C.flavors);
    return (<C {...rest} className={sldsClasses} />);
  };

  FlavoredComponent.displayName = `Flavored_${C.displayName || C.name}`;

  FlavoredComponent.propTypes = Object.assign({},
    C.propTypes,
    { className: PropTypes.string },
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
