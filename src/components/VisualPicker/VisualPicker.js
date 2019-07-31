import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { InputRaw } from '../Form';

const VisualPicker = (props) => {
  const {
    caption,
    children,
    className,
    disabled,
    id,
    inputProps,
    size,
    type,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-visual-picker',
    `slds-visual-picker_${size}`,
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      <InputRaw
        {...inputProps}
        disabled={disabled}
        id={id}
        type={type}
        value={id}
        name="options"
      />
      <label htmlFor={id}>
        {children}
        {caption}
      </label>
    </div>
  );
};

VisualPicker.defaultProps = {
  caption: null,
  className: null,
  disabled: false,
  inputProps: {},
  size: 'medium',
  type: 'radio',
};

VisualPicker.propTypes = {
  /**
   * Caption element rendered underneath the tile. Should be `VisualPickerTileCaption`
   */
  caption: PropTypes.element,
  /**
   * Tile content. Should either be: `VisualPickerText` or `VisualPickerIcon`
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional className applied to wrapper `div`
   */
  className: PropTypes.string,
  /**
   * Disabled state for input
   */
  disabled: PropTypes.bool,
  /**
   * Input id
   */
  id: PropTypes.string.isRequired,
  /**
   * Additional input props. `name`, `value`, `type` and `id` are overwritten
   */
  inputProps: PropTypes.object,
  /**
   * Tile size
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Input type. Should be the same for all tiles in one `VisualPickerContainer`
   */
  type: PropTypes.oneOf(['radio', 'checkbox']),
};

export default VisualPicker;
