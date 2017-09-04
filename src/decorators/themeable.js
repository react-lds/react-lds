import React from 'react';
import cx from 'classnames';

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

const getTheme = (theme) => {
  let classes = [];

  if (/\stexture/.test(theme)) {
    classes = [`slds-theme_${theme.split(' ')[0]}`, 'slds-theme_alert-texture'];
  } else if (theme !== undefined) {
    classes = [`slds-theme_${theme}`];
  }

  return classes;
};

const themeable = (C) => {
  const ThemedComponent = (props) => {
    const { className, theme, ...rest } = props;
    const classes = cx([...getTheme(theme)], className);
    return (<C {...rest} className={classes} />);
  };

  ThemedComponent.displayName = `Themed_${C.displayName || C.name}`;

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
