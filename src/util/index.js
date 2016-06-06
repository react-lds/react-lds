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

/**
 * Prefixes each class in a className-string with the global css-prefix
 */
export function prefix(className, cssPrefix, additionalClasses = undefined) {
  let prefixed = className;

  if (typeof className === 'string') {
    prefixed = className
      .split(/\s+/)
      .map(c => `${cssPrefix}${c}`)
      .join(' ');
  }

  prefixed = additionalClasses !== undefined ? classNames(prefixed, additionalClasses) : prefixed;

  return prefixed;
}

const themeNames = [
  'default',
  'shade',
  'inverse',
  'alt-inverse',
  'info',
  'success',
  'warning',
  'error',
  'offline',
];

export const validThemes = themeNames.concat(themeNames.map(themeName => `${themeName} texture`));

export function getThemeClassName(theme) {
  return /\stexture/.test(theme) ? `theme--${theme.split(' ')[0]} theme--alert-texture` : `theme--${theme}`;
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
  theme: function validateTheme(props, propName, componentName) {
    const theme = props[propName];

    if (typeof theme !== 'undefined' && typeof theme !== 'string') {
      return new Error(`${propName} must be a string`);
    }

    if (typeof theme === 'string' && !validThemes.includes(theme)) {
      return new Error(`
        "${theme}" is not a valid ${componentName} theme.
      `);
    }

    return null;
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
  validThemes,
  getThemeClassName,
  flavorPropTypes,
};
