
import React from 'react';
import { prefixClasses } from '../../utils';

const FormElementError = (props, { cssPrefix }) => {
  const { className, error, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderError = () => {
    if (error) {
      return (
        <div {...rest} className={prefix('form-element__help', className)}>{error}</div>
      );
    }

    return null;
  };

  return renderError();
};

FormElementError.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

FormElementError.propTypes = {
  /**
   * element triggered on the containing form element
   */
  error: React.PropTypes.string,
};

export default FormElementError;
