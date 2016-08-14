import React from 'react';

import prefixable from './../../decorators/prefixable';
import { IconSVG, MediaObject } from '../../index';

export const PageHeaderBase = ({ prefix, title, info, icon }) => {
  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;

  return (
    <div className={prefix(['page-header'])} role="banner">
      <MediaObject figureLeft={iconRendered} center>
        <p className={prefix(['page-header__title', 'truncate', 'align-middle'])} title={title}>
          {title}
        </p>
        <p className={prefix(['text-body--small', 'page-header__info'])}>{info}</p>
      </MediaObject>
    </div>
  );
};

PageHeaderBase.propTypes = {
  /**
   * icon and sprite
   */
  icon: React.PropTypes.shape({
    sprite: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
  }).isRequired,
  /**
   * info subtitle
   */
  info: React.PropTypes.string.isRequired,
  /**
   * title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(PageHeaderBase);
