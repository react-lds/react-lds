import PropTypes from 'prop-types';

export const stepType = PropTypes.shape({
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  isCompleted: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
});
