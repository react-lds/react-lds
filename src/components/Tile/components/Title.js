import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, titleText }) => {
  const isStringTitle = typeof title === 'string';

  return (
    <h3
      className="slds-tile__title slds-truncate"
      title={isStringTitle ? title : titleText}
    >
      {title}
    </h3>
  );
};

Title.propTypes = {
  title: PropTypes.node.isRequired,
  titleText: PropTypes.string.isRequired,
};

export default Title;
