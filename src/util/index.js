/**
 * Takes a baseClass and the props of a component to return an array of flavor classNames
 */
export function getFlavorClasses(baseClass, props, validFlavors) {
  if (typeof baseClass !== 'string') {
    throw new Error('"baseClass" must be a string');
  }

  const flavors = Object.keys(props)
    .filter(flavor => validFlavors.includes(flavor))
    .filter(flavor => props[flavor])
    .map(flavor => `${baseClass}--${flavor}`);

  return flavors;
}

/**
 * Prefixes each class in a className-string with the global css-prefix
 */
export function prefix(className, cssPrefix) {
  return typeof className === 'string' ? className.split(/\s+/).map(c => `${cssPrefix}${c}`).join(' ') : className;
}

/**
 * Custom Prop Types
 */

export const CustomPropTypes = {
  /* Checks if all passed flavors are allowed */
  flavor(validFlavors) {
    return function validateFlavors(props, propName, componentName) {
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
  },
};

export function flavorPropTypes(component) {
  const propTypes = {};
  component.validFlavors.forEach(flavor => {
    propTypes[flavor] = CustomPropTypes.flavor(component.validFlavors);
  });
  return propTypes;
}

export default {
  CustomPropTypes,
  getFlavorClasses,
  prefix,
};
