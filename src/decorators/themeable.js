import React from 'react';
import { prefixClasses } from '../utils';

const themeNames = [
  'alt-inverse',
  'default',
  'error',
  'info',
  'inverse',
  'offline',
  'shade',
  'success',
  'warning',
];

const validThemes = themeNames.concat(themeNames.map(themeName => `${themeName} texture`));

const themePropType = (props, propName, componentName) => {
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
};

const getTheme = theme => {
  let classes = [];

  if (/\stexture/.test(theme)) {
    classes = [`theme--${theme.split(' ')[0]}`, 'theme--alert-texture'];
  } else if (theme !== undefined) {
    classes = [`theme--${theme}`];
  }

  return classes;
};

const themeable = C => {
  const ThemedComponent = (props, { cssPrefix }) => {
    const { className, theme, ...rest } = props;
    const prefix = classes => prefixClasses(cssPrefix, classes, className);

    const classes = prefix(getTheme(theme));

    return (<C {...rest} className={classes} />);
  };

  ThemedComponent.displayName = `Themed_${C.displayName || C.name}`;

  ThemedComponent.contextTypes = Object.assign({}, C.contextTypes, {
    cssPrefix: React.PropTypes.string,
  });
  ThemedComponent.propTypes = Object.assign({}, C.propTypes, {
    theme: themePropType,
  });

  if (C.variations) {
    ThemedComponent.variations = C.variations;
  }

  if (C.flavors) {
    ThemedComponent.flavors = C.flavors;
  }

  return ThemedComponent;
};

export default themeable;
