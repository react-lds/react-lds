import React from 'react';
import { prefixable, flavorable, variationable } from '../../decorators';

const Grid = (props) => {
  const sldsClasses = ['grid'];

  return (
    <div className={props.prefix(sldsClasses, props)}>
      {props.children}
    </div>
  );
};

Grid.flavors = [
  'frame',
  'vertical',
  'reverse',
  'vertical-reverse',
  'align-center',
  'align-spread',
  'align-space',
  'align-end',
  'vertical-align-center',
  'certical-align-end',
  'vertical-stretch',
  'pull-padded',
  'pull-padded-medium',
  'pull-padded-large',
];

Grid.variations = [
  { wrap: ['small', 'medium', 'large'] },
  { nowrap: ['small', 'medium', 'large'] },
];

Grid.propTypes = Object.assign({}, {
  children: React.PropTypes.node,
});

export default prefixable(
  variationable(
    flavorable(Grid, 'grid')
  )
);
