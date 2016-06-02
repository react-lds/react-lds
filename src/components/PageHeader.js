import React from 'react';

import MediaObject from './MediaObject';
import { IconSVG } from './Icon';

const PageHeaderBase = ({ title, info }) => {
  const icon = <IconSVG sprite="standard" icon="opportunity" background="standard-opportunity" size="large" />;

  return (
    <div className="slds-page-header" role="banner">
      <MediaObject figureLeft={icon}>
        <p className="slds-page-header__title slds-truncate slds-align-middle" title={title}>
          {title}
        </p>
        <p className="slds-text-body--small slds-page-header__info">{info}</p>
      </MediaObject>
    </div>
  );
};

PageHeaderBase.propTypes = {
  title: React.PropTypes.string.isRequired,
  info: React.PropTypes.string.isRequired,
};

export default PageHeaderBase;
