import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG, MediaObject } from '../../';

const PageHeaderBase = (props) => {
  const { className, icon, info, title, ...rest } = props;

  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;

  const sldsClasses = [
    'slds-page-header',
    className
  ];

  const titleClasses = [
    'slds-page-header__title',
    'slds-truncate',
    'slds-align-middle'
  ];

  return (
    <div {...rest} className={cx(sldsClasses)} role="banner">
      <MediaObject figureLeft={iconRendered} center>
        <p className={cx(titleClasses)} title={title}>
          {title}
        </p>
        <p className="slds-text-body_small slds-page-header__info">{info}</p>
      </MediaObject>
    </div>
  );
};

PageHeaderBase.defaultProps = {
  className: null,
};

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
