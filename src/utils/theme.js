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

export const THEMES = themeNames
  .reduce((acc, curr) => ([...acc, curr, `${curr} texture`]), []);

export function getThemeClass(theme) {
  const classes = [];

  if (/\stexture/.test(theme)) {
    classes.push(`slds-theme_${theme.split(' ')[0]}`);
    classes.push('slds-theme_alert-texture');
  } else if (theme) {
    classes.push(`slds-theme_${theme}`);
  }

  return classes;
}
