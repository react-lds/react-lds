import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonIcon, IconButton } from '../Button';

const SummaryDetail = ({
  children,
  containerClassName,
  iconButtonClassName,
  isOpen,
  onOpen,
  renderTitle,
  title,
}) => (
  <div className={cx('slds-summary-detail', { 'slds-is-open': isOpen })}>
    {onOpen && (
      <IconButton
        onClick={onOpen}
        className={cx('slds-m-right_x-small', iconButtonClassName)}
      >
        <ButtonIcon
          className="slds-summary-detail__action-icon"
          icon="switch"
          sprite="utility"
        />
      </IconButton>
    )}
    <div className={cx(containerClassName)}>
      <div className="slds-summary-detail__title">
        {renderTitle(title)}
      </div>
      {children && (
        <div aria-hidden={!isOpen} className="slds-summary-detail__content">
          {children({ isOpen })}
        </div>
      )}
    </div>
  </div>
);

SummaryDetail.defaultProps = {
  children: null,
  containerClassName: null,
  iconButtonClassName: null,
  isOpen: false,
  onOpen: null,
  renderTitle: title => (
    <h3 className="slds-text-heading_small slds-truncate">
      {title}
    </h3>
  ),
};

SummaryDetail.propTypes = {
  /**
   * Function that renders the content. Takes { isOpen } as arguments
   */
  children: PropTypes.func,
  /**
   * Additional className for container
   */
  containerClassName: PropTypes.string,
  /**
   * Additional className for the expand icon
   */
  iconButtonClassName: PropTypes.string,
  /**
   * Whether the content is expanded
   */
  isOpen: PropTypes.bool,
  /**
   * Triggered on open icon and title click
   */
  onOpen: PropTypes.func,
  /**
   * Renders custom title markup if provided. Receives title as an argument
   */
  renderTitle: PropTypes.func,
  /**
   * Title to be used by the renderTitle function
   */
  title: PropTypes.string.isRequired,
};

export default SummaryDetail;
