import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Path = (props) => {
  const { button, children, className, ...rest } = props;

  const sldsClasses = [
    'slds-path-coach',
    className,
  ];

  return (
    <div className={cx(sldsClasses)} {...rest}>
      <div className="slds-grid">
        <div className="slds-tabs_path" role="application">
          <ul className="slds-tabs_path__nav" role="listbox">
            {children}
          </ul>
        </div>
        {button}
      </div>
    </div>
  );
};

Path.defaultProps = {
  className: null,
};

Path.propTypes = {
  /*
   * button to change selected stage status
   */
  button: PropTypes.node.isRequired,
  /*
   * children should be PathStages
   */
  children: PropTypes.node.isRequired,
  /*
   * class name
   */
  className: PropTypes.string,
};

export default Path;
