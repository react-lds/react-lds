import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { prefixClasses } from '../utils';

function getVariationClasses(props, validVariations) {
  return Object.keys(props)
    .filter(variation => Object.hasOwnProperty.call(validVariations, variation))
    .filter(variation => !!props[variation]);
}

function getValidVariations(definition) {
  const validVariations = definition.reduce((_propTypes, variation) => {
    const propTypes = _propTypes;

    if (typeof variation === 'string') {
      propTypes[variation] = PropTypes.bool;
    } else {
      const variationName = Object.keys(variation)[0];
      const responsives = variation[variationName];

      propTypes[variationName] = PropTypes.bool;

      responsives.forEach((responsive) => {
        propTypes[`${responsive}-${variationName}`] = PropTypes.bool;
      });
    }

    return propTypes;
  }, {});

  return validVariations;
}

const filterVariations = (props, validVariations) => omit(Object.assign({}, props), validVariations);

const variationable = (C) => {
  const validVariations = getValidVariations(C.variations);

  const VariationedComponent = (props, { cssPrefix }) => {
    const { className } = props;
    const prefix = classes => prefixClasses(cssPrefix, classes, className);

    const rest = filterVariations(props, C.variations);
    const classes = prefix(getVariationClasses(props, validVariations));

    return (<C {...rest} className={classes} />);
  };

  VariationedComponent.displayName = `Variationed_${C.displayName || C.name}`;

  VariationedComponent.contextTypes = Object.assign({}, C.contextTypes, {
    cssPrefix: PropTypes.string,
  });

  VariationedComponent.propTypes = Object.assign({},
    C.propTypes,
    { className: PropTypes.string },
    validVariations
  );

  if (C.flavors) {
    VariationedComponent.flavors = C.flavors;
  }

  return VariationedComponent;
};

export default variationable;
