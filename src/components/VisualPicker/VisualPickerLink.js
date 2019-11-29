/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MediaObject } from '../MediaObject';

const linkIconRenderer = (figure, classes) => (
  <div
    className={cx([
      ...classes,
      'slds-media__figure_fixed-width',
      'slds-align_absolute-center',
      'slds-m-left_xx-small'
    ])}
  >
    {figure}
  </div>
);

const VisualPickerLink = ({
  className,
  children,
  href,
  icon,
  title,
  ...rest
}) => {
  const sldsClasses = [
    'slds-box',
    'slds-box_link',
    'slds-box_x-small',
    className,
  ];

  return (
    <MediaObject
      {...rest}
      center={false}
      as="a"
      // eslint-disable-next-line no-script-url
      href={href || 'javascript:void(0)'}
      bodyClassName="slds-border_left slds-p-around_small"
      className={cx(sldsClasses)}
      figureLeft={icon}
      renderFigureLeft={linkIconRenderer}
    >
      <h2
        className="slds-truncate slds-text-heading_small"
        title={title}
      >
        {title}
      </h2>
      <p className="slds-m-top_small">
        {children}
      </p>
    </MediaObject>
  );
};

VisualPickerLink.defaultProps = {
  className: null,
  href: null,
};

VisualPickerLink.propTypes = {
  /**
   * Optional className applied to `slds-box`
   */
  className: PropTypes.string,
  /**
   * Flow content
   */
  children: PropTypes.node.isRequired,
  /**
   * Link target. If you need to support a routing library, leave empty and apply `onClick`
   */
  href: PropTypes.string,
  /**
   * Icon rendered on the left. May need to have `svgClassName="slds-icon-text-default"` set for icons from the utility sprite
   */
  icon: PropTypes.element.isRequired,
  /**
   * Title renderd as `heading_small`
   */
  title: PropTypes.string.isRequired,
};

export default VisualPickerLink;
