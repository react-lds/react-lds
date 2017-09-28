/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

function getVariationClasses(props, validVariations) {
  return Object.keys(props)
    .filter(variation => Object.hasOwnProperty.call(validVariations, variation))
    .filter(variation => !!props[variation])
    .map(variation => `slds-${variation}`);
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

  const VariationedComponent = (props) => {
    const { className } = props;

    const rest = filterVariations(props, C.variations);
    const classes = cx([...getVariationClasses(props, validVariations), className]);

    return (<C {...rest} className={classes} />);
  };

  VariationedComponent.displayName = `Variationed_${C.displayName || C.name}`;

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
