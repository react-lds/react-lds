import React from 'react';

import MediaObject from './MediaObject';
import Icon from './Icon';

const PageHeaderBase = ({title, info}) => {
  var icon = <Icon category="standard" icon="opportunity" />;

  return (
    <div className="slds-page-header" role="banner">
      <MediaObject
        figure={icon}>
        <p className="slds-page-header__title slds-truncate slds-align-middle" title={title}>{title}</p>
        <p className="slds-text-body--small slds-page-header__info">{info}</p>
      </MediaObject>
    </div>
  );
}

export default PageHeaderBase;
