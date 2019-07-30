import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';

const VisualPickerTileText = ({
  className,
  children,
  title
}) => {
  const figureClasses = [
    'slds-visual-picker__figure',
    'slds-visual-picker__text',
    'slds-align_absolute-center',
    className,
  ];

  return (
    <Fragment>
      <span className={cx(figureClasses)}>
        <span>
          <span className="slds-text-heading_large">{title}</span>
          {children && (
            <span className="slds-text-title">{children}</span>
          )}
        </span>
      </span>
      <Icon
        className="slds-visual-picker__text-check"
        sprite="utility"
        icon="check"
        size="x-small"
      />
    </Fragment>
  );
};

VisualPickerTileText.defaultProps = {
  className: null,
  children: null,
};

VisualPickerTileText.propTypes = {
  /**
   * Optional className, applied to `slds-visual-picker__figure`
   */
  className: PropTypes.string,
  /**
   * Text content renderes as `text-title`
   */
  children: PropTypes.node,
  /**
   * Title renderes as `heading_large`
   */
  title: PropTypes.string.isRequired,
};

export default VisualPickerTileText;
