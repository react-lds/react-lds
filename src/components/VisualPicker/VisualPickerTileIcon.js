import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';

const VisualPickerTileIcon = ({ className, icon, sprite }) => {
  const figureClasses = [
    'slds-visual-picker__figure',
    'slds-visual-picker__icon',
    { 'slds-visual-picker__text': false },
    'slds-align_absolute-center',
    className,
  ];


  return (
    <span className={cx(figureClasses)}>
      <span className="slds-is-selected">
        <Icon
          icon="check"
          size="large"
          sprite="action"
        />
      </span>
      <span className="slds-is-not-selected">
        <Icon
          icon={icon}
          sprite={sprite}
          svgClassName={sprite === 'utility' ? 'slds-icon-text-default' : null}
          size="large"
        />
      </span>
    </span>
  );
};

VisualPickerTileIcon.defaultProps = {
  className: null,
};

VisualPickerTileIcon.propTypes = {
  /**
   * Optional className, applied to `slds-visual-picker__figure`
   */
  className: PropTypes.string,
  /**
   * Icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * Sprite name
   */
  sprite: PropTypes.string.isRequired,
};

export default VisualPickerTileIcon;
