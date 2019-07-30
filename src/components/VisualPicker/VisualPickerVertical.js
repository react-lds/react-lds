import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import VisualPicker from './VisualPicker';
import VisualPickerTileText from './VisualPickerTileText';

const VisualPickerVertical = ({
  children,
  className,
  title,
  ...rest
}) => (
  <VisualPicker
    {...rest}
    className={cx('slds-visual-picker_vertical', className)}
    caption={null}
    size={null}
  >
    <VisualPickerTileText title={title}>
      {children}
    </VisualPickerTileText>
  </VisualPicker>
);

VisualPickerVertical.defaultProps = {
  className: null,
};

VisualPickerVertical.propTypes = {
  /**
   * Text content of `VisualPickerTileText`
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional className applied to `slds-visual-picker`
   */
  className: PropTypes.string,
  /**
   * Title of `VisualPickerTileText`
   */
  title: PropTypes.string.isRequired,
};

export default VisualPickerVertical;
