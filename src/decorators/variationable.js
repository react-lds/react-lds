import React from 'react';

function getVariationClasses(props, validVariations) {
  const variations = Object.keys(props)
    .filter(variation => validVariations.includes(variation))
    .filter(variation => !!props[variation]);

  return variations;
}

function getValidVariations(definition) {
  const validVariations = definition.reduce((propTypes, variation) => {
    if (typeof variation === 'string') {
      // eslint-disable-next-line no-param-reassign
      propTypes[variation] = React.PropTypes.bool;
    } else {
      const variationName = Object.keys(variation)[0];
      const responsives = variation[variationName];

      // eslint-disable-next-line no-param-reassign
      propTypes[variationName] = React.PropTypes.bool;

      responsives.forEach((responsive) => {
        // eslint-disable-next-line no-param-reassign
        propTypes[`${responsive}-${variationName}`] = React.PropTypes.bool;
      });
    }
    return propTypes;
  }, {});

  return validVariations;
}

const variationable = (Component) => {
  const displayName = Component.displayName || Component.name;

  const VariationComponent = (props) => {
    const newProps = Object.assign({}, props);
    const existingSlds = props.sldsClasses || [];

    newProps.sldsClasses = [...new Set(
      getVariationClasses(
        props,
        Object.keys(getValidVariations(Component.variations))
      ).concat(existingSlds)
    )];

    return (
      <Component {...newProps} />
    );
  };

  VariationComponent.displayName = displayName;

  VariationComponent.propTypes = Object.assign(
    {},
    Component.propTypes,
    getValidVariations(Component.variations)
  );

  if (Component.flavors) {
    VariationComponent.flavors = Component.flavors;
  }

  return VariationComponent;
};

export {
  variationable as default,
};
