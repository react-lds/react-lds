import classNames from 'classnames';

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

export function getClassesFromProps(props, includesArray, regex) {
  const classes = [];
  let filtered = Object.keys(props);

  if (typeof includesArray !== 'undefined') {
    filtered = filtered.filter(prop => includesArray.includes(prop));
  }

  if (typeof regex !== 'undefined') {
    filtered = filtered.filter(prop => regex.test(prop));
  }

  filtered.forEach(prop => classes.push({ [`${prop}`]: !!props[prop] }));

  return classes;
}

/**
 * Prefixes each class in a className-string with the global css-prefix
 */
export function prefix(className, cssPrefix, additionalClasses = undefined) {
  let prefixed = className;

  if (typeof className === 'string') {
    prefixed = className
      .trim()
      .split(/\s+/)
      .map(c => `${cssPrefix}${c}`)
      .join(' ');
  }

  prefixed = additionalClasses !== undefined ? classNames(prefixed, additionalClasses) : prefixed;

  return prefixed;
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
  return component.validFlavors.reduce((propTypes, flavor) => {
    // eslint-disable-next-line no-param-reassign
    propTypes[flavor] = CustomPropTypes.flavor(component.validFlavors);
    return propTypes;
  }, {});
}

export function responsivePropTypes(baseName, modifiers, propType, options = {}) {
  if (typeof propType !== 'function') {
    throw new Error('The propType must be a function.');
  }

  const { addBase = false } = options;
  const propTypes = modifiers.reduce((o, modifier) => {
    // eslint-disable-next-line no-param-reassign
    o[`${modifier}-${baseName}`] = propType;
    return o;
  }, {});

  if (addBase) {
    propTypes[baseName] = propType;
  }

  return propTypes;
}

export default {
  CustomPropTypes,
  getFlavorClasses,
  getClassesFromProps,
  prefix,
  flavorPropTypes,
  responsivePropTypes,
};
