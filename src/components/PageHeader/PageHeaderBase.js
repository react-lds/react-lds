import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { IconSVG, MediaObject } from '../../';

const PageHeaderBase = (props, { cssPrefix }) => {
  const { className, icon, info, title, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;

  return (
    <div {...rest} className={prefix('page-header', className)} role="banner">
      <MediaObject figureLeft={iconRendered} center>
        <p className={prefix(['page-header__title', 'truncate', 'align-middle'])} title={title}>{title}</p>
        <p className={prefix(['text-body--small', 'page-header__info'])}>{info}</p>
      </MediaObject>
    </div>
  );
};

PageHeaderBase.contextTypes = { cssPrefix: PropTypes.string };

PageHeaderBase.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * icon and sprite
   */
  icon: PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * info subtitle
   */
  info: PropTypes.string.isRequired,
  /**
   * title
   */
  title: PropTypes.string.isRequired,
};

export default PageHeaderBase;
