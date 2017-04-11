import React from 'react';
import PropTypes from 'prop-types';
import { MediaObject } from 'react-lds';

require('./index.scss');

const Masthead = ({ title, figure }) =>
  <header className="site-masthead slds-grid slds-wrap">
    <div className="site-masthead-title slds-col slds-align-middle">
      <MediaObject figureLeft={figure} center>
        <h1 title={title}>{title}</h1>
      </MediaObject>
    </div>
  </header>;

Masthead.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.node.isRequired,
};

export default Masthead;
