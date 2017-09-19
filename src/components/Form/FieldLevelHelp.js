import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

const FieldLevelHelp = (props) => {
  const {
    onClick,
    className,
    tooltip,
    ...rest,
  } = props;

  const sldsClasses = [
    'slds-form-element__icon',
    className,
  ];

  return (
    <div className={cx(sldsClasses)} {...rest}>
      <Button icon onClick={onClick} tooltip={tooltip} >
        <ButtonIcon sprite="utility" icon="info" />
      </Button>
    </div>
  );
};

FieldLevelHelp.propTypes = {
  /*
   * Function for Tooltip Button
   */
  onClick: PropTypes.func,
  /*
   * class name
   */
  className: PropTypes.string,
  /*
   * tooltip title
   */
  title: PropTypes.string,
  /*
   * tooltipHelp tooltip
   */
  tooltip: PropTypes.string,
};

FieldLevelHelp.defaultProps = {
  onClick: null,
  className: null,
  title: null,
  tooltip: null,
};

export default FieldLevelHelp;
