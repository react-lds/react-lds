import React from 'react';

function flavorPropType(validFlavors) {
  return (props, propName, componentName) => {
    const flavor = props[propName];

    if (typeof flavor !== 'undefined' && typeof flavor !== 'boolean') {
      return new Error(`${propName} must be a boolean`);
    }

    if (typeof flavor === 'boolean' && !validFlavors.includes(propName)) {
      return new Error(`
        "${propName}" is not a valid ${componentName} flavor.
      `);
    }

    return null;
  };
}

export function getFlavorClasses(baseClass, props, validFlavors) {
  if (typeof baseClass !== 'string') {
    throw new Error('"baseClass" must be a string');
  }

  const flavors = Object.keys(props)
    .filter(flavor => validFlavors.includes(flavor))
    .filter(flavor => !!props[flavor])
    .map(flavor => `${baseClass}--${flavor}`);

  return flavors;
}

const flavorable = (Component, baseClass) => {
  const displayName = Component.displayName || Component.name;

  const FlavoredComponent = (props) => {
    const newProps = Object.assign({}, props);
    const existingSlds = props.sldsClasses || [];

    newProps.sldsClasses = [...new Set(
      getFlavorClasses(baseClass, props, Component.flavors).concat(existingSlds)
    )];

    return (
      <Component {...newProps} />
    );
  };

  FlavoredComponent.displayName = displayName;

  FlavoredComponent.propTypes = Object.assign(
    {},
    Component.propTypes,
    Component.flavors.reduce((propTypes, flavor) => {
      // eslint-disable-next-line no-param-reassign
      propTypes[flavor] = flavorPropType(Component.flavors);
      return propTypes;
    }, {})
  );

  if (Component.variations) {
    FlavoredComponent.variations = Component.variations;
  }

  return FlavoredComponent;
};

export {
  flavorable as default,
};
