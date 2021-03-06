import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardFooter = ({
  assistiveText,
  className,
  linkText,
  linkProps,
  ...rest
}) => (
  <footer {...rest} className={cx(['slds-card__footer', className])}>
    {linkText && (
      <a {...linkProps}>
        {linkText}
        {assistiveText && <span className="slds-assistive-text">{assistiveText}</span>}
      </a>
    )}
  </footer>
);

CardFooter.defaultProps = {
  assistiveText: null,
  className: null,
  linkProps: {},
  linkText: null,
};

CardFooter.propTypes = {
  assistiveText: PropTypes.string,
  /**
   * Applied to top-level element `slds-card__footer`
   */
  className: PropTypes.string,
  /**
   * Props passed to the link `a` tag
   */
  linkProps: PropTypes.object,
  /**
   * Link text
   */
  linkText: PropTypes.string,
};

export default CardFooter;
