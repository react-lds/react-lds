import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonIcon, IconButton } from '../Button';

const SummaryDetail = ({
  children,
  isOpen,
  iconButtonClassName,
  onOpen,
  title,
  renderTitle,
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
    <div>
      <div className="slds-summary-detail__title">
        {renderTitle ? renderTitle() : title && (
          <h3 className="slds-text-heading_small slds-truncate">
            {title}
          </h3>
        )}
      </div>
      {isOpen && children && (
        <div aria-hidden={!isOpen} className="slds-summary-detail__content">
          {children()}
        </div>
      )}
    </div>
  </div>
);

SummaryDetail.defaultProps = {
  children: null,
  isOpen: false,
  onOpen: null,
  title: null,
  renderTitle: null,
  iconButtonClassName: null,
};

SummaryDetail.propTypes = {
  /**
   * Triggered on open icon and title click
   */
  onOpen: PropTypes.func,
  /**
   * Whether the content is expanded
   */
  isOpen: PropTypes.bool,
  /**
   * The expanded content
   */
  children: PropTypes.func,
  /**
   * Renders the content when isOpen=true
   */
  title: PropTypes.string,
  /**
   * Renders custom title markup if provided
   */
  renderTitle: PropTypes.func,
  /**
   * Additional className for the expand icon
   */
  iconButtonClassName: PropTypes.string,
};

export default SummaryDetail;
