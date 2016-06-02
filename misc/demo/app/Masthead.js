import React from 'react';
import { MediaObject, MediaObjectFigure, MediaObjectBody } from '../../../src/main';

require('./masthead.scss');

const Masthead = ({ title, figure }) =>
  <header className="site-masthead slds-grid slds-wrap">
    <div className="site-masthead-title slds-col slds-align-middle">
      <MediaObject center>
        <MediaObjectFigure>{figure}</MediaObjectFigure>
        <MediaObjectBody>
          <h1 title={title}>{title}</h1>
        </MediaObjectBody>
      </MediaObject>
    </div>
  </header>;

Masthead.propTypes = {
  title: React.PropTypes.string.isRequired,
  figure: React.PropTypes.node.isRequired,
};

export default Masthead;
