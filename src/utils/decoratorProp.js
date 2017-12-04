import PropTypes from 'prop-types';

export function decoratorProp(arrayOfValues) {
  return PropTypes.oneOfType([PropTypes.oneOf(arrayOfValues), PropTypes.arrayOf(PropTypes.oneOf(arrayOfValues))]);
}

export function applyDecorators(flavor, infix = null) {
  if (!flavor) return null;
  const prefix = !infix ? 'slds-' : `slds-${infix}_`;
  return Array.isArray(flavor) ? flavor.map(f => `${prefix}${f}`) : `${prefix}${flavor}`;
}
