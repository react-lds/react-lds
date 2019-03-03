import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonIcon, IconButton } from '../Button';

const SummaryDetail = ({
  children,
  isOpen,
  onOpen,
  renderOpenContent,
}) => (
  <div className={cx('slds-summary-detail', { 'slds-is-open': isOpen })}>
    {onOpen && (
      <IconButton
        onClick={onOpen}
        className="slds-m-right_x-small slds-m-top_x-small"
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
        {children}
      </div>
      {isOpen && renderOpenContent && (
        <div aria-hidden={!isOpen} className="slds-summary-detail__content">
          {renderOpenContent()}
        </div>
      )}
    </div>
  </div>
);

SummaryDetail.defaultProps = {
  children: null,
  isOpen: false,
  onOpen: null,
  renderOpenContent: null,
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
   * The title content
   */
  children: PropTypes.node,
  /**
   * Renders the content when isOpen=true
   */
  renderOpenContent: PropTypes.func
};

export default SummaryDetail;
