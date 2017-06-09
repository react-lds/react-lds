import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getUniqueHash } from '../../utils';

const FormElementError = (props) => {
  const { className, error, id, ...rest } = props;

  const renderError = () => {
    if (error) {
      const sldsClasses = [
        'slds-form-element__help',
        className
      ];

      return (
        <div
          {...rest}
          id={getUniqueHash(error, id)}
          className={cx(sldsClasses)}
        >
          {error}
        </div>
      );
    }

    return null;
  };

  return renderError();
};

FormElementError.defaultProps = {
  error: null,
};

FormElementError.propTypes = {
  /**
   * element triggered on the containing form element
   */
  error: PropTypes.string,
  /**
   * id of the parent component carrying the error
   */
  id: PropTypes.string.isRequired,
};

export default FormElementError;
