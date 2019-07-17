import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const PageHeaderBase = (props) => {
  const {
    className,
    icon: { icon, sprite },
    info,
    title,
    ...rest
  } = props;

  const sldsClasses = ['slds-page-header', className];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      <div className="slds-page-header__row">
        <div className="slds-page-header__col-title">
          <MediaObject
            figureLeft={(
              <Icon
                sprite={sprite}
                icon={icon}
                svgClassName="slds-page-header__icon"
              />
            )}
          >
            <div className="slds-page-header__name">
              <div className="slds-page-header__name-title">
                <h1>
                  <span className="slds-page-header__title slds-truncate" title={title}>{title}</span>
                </h1>
              </div>
            </div>
            <p className="slds-page-header__name-meta">{info}</p>
          </MediaObject>
        </div>
      </div>
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
