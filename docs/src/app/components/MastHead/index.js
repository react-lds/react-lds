import React from 'react';
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
  title: React.PropTypes.string.isRequired,
  figure: React.PropTypes.node.isRequired,
};

export default Masthead;
