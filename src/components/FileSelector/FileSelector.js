import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropzone from 'react-dropzone';
import {
  FormElement,
  FormElementControl,
  FormElementError,
} from '../Form';
import { Button } from '../Button';

const preventDefault = e => e.preventDefault();

const FileSelector = ({
  accept,
  buttonText,
  id,
  error,
  fatalError,
  label,
  minSize,
  maxSize,
  multiple,
  onDragEnter,
  onDragLeave,
  onDrop,
  selectorText,
  selectorType,
}) => {
  const errorStr = fatalError || error;

  const fileSelectorClasses = [
    'slds-file-selector',
    `slds-file-selector_${selectorType}`
  ];

  const primaryLabelId = `${id}-primary-label`;
  const secondaryLabelId = `${id}-secondary-label`;

  return (
    <FormElement error={errorStr}>
      <span className="slds-form-element__label" id={primaryLabelId}>
        {label}
      </span>
      <FormElementControl>
        <div className={cx(fileSelectorClasses)}>
          <Dropzone
            accept={accept}
            disabled={!!fatalError}
            minSize={minSize}
            maxSize={maxSize}
            multiple={multiple}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
            }) => (
              <div
                {...getRootProps({
                  className: cx([
                    'slds-file-selector__dropzone',
                    { 'slds-has-drag-over': isDragActive && !fatalError },
                  ])
                })}
              >
                <input
                  {...getInputProps({
                    'aria-labelledby': `${primaryLabelId} ${secondaryLabelId}`,
                    className: 'slds-file-selector__input slds-assistive-text',
                    disabled: fatalError,
                    id,
                  })}
                />
                <label
                  className="slds-file-selector__body"
                  htmlFor={id}
                  // Fixes dialog not working due to default `label<>input` even handling (Safari,Chrome)
                  onClick={preventDefault}
                  id={secondaryLabelId}
                >
                  <Button
                    buttonEl="span"
                    className="slds-file-selector__button"
                    flavor="neutral"
                    icon="upload"
                    sprite="utility"
                    title={buttonText}
                  />
                  <span className="slds-file-selector__text slds-medium-show">
                    {selectorText}
                  </span>
                </label>
              </div>
            )}
          </Dropzone>
        </div>
      </FormElementControl>
      <FormElementError error={errorStr} id={id} />
    </FormElement>
  );
};

FileSelector.defaultProps = {
  accept: null,
  error: null,
  fatalError: null,
  minSize: 0,
  maxSize: null,
  multiple: false,
  onDragEnter: null,
  onDragLeave: null,
  selectorType: 'files',
};

FileSelector.propTypes = {
  /**
   * Maps to the HTML5 `accept` attribute. Used to narrow down allowed file types
   */
  accept: PropTypes.string,
  /**
   * Button title
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Error displayed below form. This should be used for informational messages as it does not disable the dropzone
   */
  error: PropTypes.string,
  /**
   * Takes precedence over `error` and _will_ disable the dropzone
   */
  fatalError: PropTypes.string,
  /**
   * Id of this file selector
   */
  id: PropTypes.string.isRequired,
  /**
   * Top-level label
   */
  label: PropTypes.string.isRequired,
  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,
  /**
   * Maps to the HTML5 `multiple` attribute
   */
  multiple: PropTypes.bool,
  /**
   * `onDragEnter` passed to `Dropzone`. Called with:
   *   - `event`
   */
  onDragEnter: PropTypes.func,
  /**
   * `onDragLeave` passed to `Dropzone`. Called with:
   *   - `event`
   */
  onDragLeave: PropTypes.func,
  /**
   * `onDrop` passed to `Dropzone`. Called with:
   *   - `acceptedFiles`
   *   - `rejectedFiles`
   *   - `event`
   */
  onDrop: PropTypes.func.isRequired,
  /**
   * Addl. text rendered next to the button
   */
  selectorText: PropTypes.string.isRequired,
  /**
   * Toggles display style
   */
  selectorType: PropTypes.oneOf(['files', 'images']),
};

export default FileSelector;
