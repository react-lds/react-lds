
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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * form-element error
   */
  error: React.PropTypes.string,
};

export default prefixable(FormElementError);
