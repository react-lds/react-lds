import PropTypes from 'prop-types';

function flavorProp(arrayOfValues) {
  return PropTypes.oneOfType([PropTypes.oneOf(arrayOfValues), PropTypes.arrayOf(PropTypes.oneOf(arrayOfValues))]);
}

export default flavorProp;
