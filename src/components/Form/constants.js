import PropTypes from 'prop-types';

export const PICK_LIST_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export const picklistSizeProp = PropTypes.oneOf(
  Object
    .keys(PICK_LIST_SIZE)
    .map(key => PICK_LIST_SIZE[key])
);
