import classNames from 'classnames';
import { cssPrefix } from '../global';

/**
 * Takes a baseClass and a list of flavors and outputs a className-string
 */
export function getClassesWithFlavors(flavor, baseClass) {
  if (typeof baseClass !== 'string') {
    throw new Error('"baseClass" must be a string');
  }

  const hasFlavor = typeof flavor !== 'undefined' && typeof flavor === 'string';
  const flavors = hasFlavor ? flavor.split('-').map(f => `${baseClass}--${f}`) : null;

  return classNames(baseClass, flavors);
}

/**
 * Prefixes each class in a className-string with the global css-prefix
 */
export function prefix(className) {
  return typeof className === 'string' ? className.split(/\s+/).map(c => `${cssPrefix}${c}`).join(' ') : className;
}

/**
 * Custom Prop Types
 */

export const CustomPropTypes = {
  /* Checks if all passed flavors are allowed */
  flavor(...args) {
    const validFlavors = args;

    return function validateFlavors(props, propName, componentName) {
      const flavor = props[propName];

      if (typeof flavor !== 'undefined' && typeof flavor !== 'string') {
        return new Error(`${propName} must be a string`);
      }

      if (typeof flavor === 'string') {
        const flavors = flavor.split('-');

        const invalidFlavors = flavors.filter(f => !validFlavors.includes(f));

        if (invalidFlavors.length > 0) {
          return new Error(`
            "${invalidFlavors[0]}" is not a valid ${componentName} flavor.
          `);
        }
      }

      return null;
    };
  },
};

export default {
  CustomPropTypes,
  getClassesWithFlavors,
  prefix,
};
