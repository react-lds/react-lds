
import React from 'react';
import { prefixable } from '../../decorators';

export const FormElementError = (props) => {
  const { error, prefix } = props;

  const sldsClasses = [
    'form-element__help',
  ];

  const renderError = () => {
    if (error) {
      return (
        <div className={prefix(sldsClasses)}>{error}</div>
      );
    }

    return null;
  };

  return renderError();
};

FormElementError.propTypes = {
  /**
   * element triggered on the containing form element
   */
  error: React.PropTypes.string,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(FormElementError);
