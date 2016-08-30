import React from 'react';
import { prefixClasses } from '../../utils';
import { IconSVG, MediaObject } from '../../index';

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

PageHeaderBase.contextTypes = { cssPrefix: React.PropTypes.string };

PageHeaderBase.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
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
};

export default PageHeaderBase;
