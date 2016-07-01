import React from 'react';

import prefixable from './../../decorators/prefixable';
import { IconSVG, MediaObject } from 'react-lds';

export const PageHeaderBase = ({ prefix, title, info, icon }) => {
  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;

  return (
    <div className={prefix(['page-header'])} role="banner">
      <MediaObject figureLeft={iconRendered} className={prefix(['media--center'])}>
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
   * prefix from HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * Sprite and Icon
   */
  icon: React.PropTypes.shape({
    sprite: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
  }).isRequired,
  /**
   * Main title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * info subtitle
   */
  info: React.PropTypes.string.isRequired,
};

export default prefixable(PageHeaderBase);
