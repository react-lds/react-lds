import React from 'react';

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

const validThemes = themeNames.concat(themeNames.map(themeName => `${themeName} texture`));

function themePropType(props, propName, componentName) {
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
}

function getThemeClassName(theme) {
  let classes = [];

  if (/\stexture/.test(theme)) {
    classes = [`theme--${theme.split(' ')[0]}`, 'theme--alert-texture'];
  } else if (theme !== undefined) {
    classes = [`theme--${theme}`];
  }

  return classes;
}

const themeable = (Component) => {
  const displayName = Component.displayName || Component.name;

  const ThemedComponent = (props) => {
    const newProps = Object.assign({}, props);
    const existingSlds = props.sldsClasses || [];

    newProps.sldsClasses = [...new Set(
      getThemeClassName(props.theme).concat(existingSlds)
    )];

    return (
      <Component {...newProps} />
    );
  };

  if (Component.propTypes && Component.propTypes.theme) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: \`@themeable()\` is overriding the original \`${displayName}.propTypes.theme\`.`);
  }

  ThemedComponent.displayName = displayName;

  ThemedComponent.propTypes = Object.assign({}, Component.propTypes, {
    theme: themePropType,
  });

  if (Component.contextTypes) {
    ThemedComponent.contextTypes = Component.contextTypes;
  }

  return ThemedComponent;
};

export {
  themePropType,
  validThemes,
  getThemeClassName,
  themeable as default,
};
