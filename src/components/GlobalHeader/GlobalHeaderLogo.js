import React from 'react';
import PropTypes from 'prop-types';

const GlobalHeaderLogo = ({ src }) => (
  <div
    className="slds-global-header__logo"
    style={{
      backgroundImage: `url('${src}')`,
    }}
  />
);

GlobalHeaderLogo.defaultProps = {
};

GlobalHeaderLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GlobalHeaderLogo;
