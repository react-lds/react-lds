import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ProgressRing } from '../Progress';

const SetupAssistantItem = ({
  children,
  isExpanded,
  title,
  stepProgress,
  step,
  renderProgress,
  renderExpanded,
  renderAddon,
  onExpand
}, { assetBasePath }) => (
  <li className="slds-setup-assistant__item">
    <article className="slds-setup-assistant__step">
      <div className={cx('slds-summary-detail', { 'slds-is-open': isExpanded })}>
        {onExpand && (
          <button
            type="button"
            className="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small"
            onClick={onExpand}
          >
            <svg className="slds-button__icon slds-summary-detail__action-icon">
              <use xlinkHref={`${assetBasePath}icons/utility-sprite/svg/symbols.svg#switch`} />
            </svg>
          </button>
        )}
        <div className="slds-container_fluid">
          <div className="slds-summary-detail__title">
            <div className="slds-setup-assistant__step-summary">
              <div className="slds-media">
                {stepProgress && (
                  <div className="slds-media__figure">
                    {renderProgress({ stepProgress, step })}
                  </div>
                )}
                <div className="slds-media__body slds-m-top_x-small">
                  <div className="slds-media">
                    <div className="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 className="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        {onExpand ? (
                          <button
                            type="button"
                            className="slds-button slds-button_reset"
                            onClick={onExpand}
                          >
                            {title}
                          </button>
                        ) : title}
                      </h3>
                      <p>{children}</p>
                    </div>
                    <div className="slds-media__figure slds-media__figure_reverse">
                      {renderAddon()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isExpanded && (
            <div className="slds-summary-detail__content">
              <div className="slds-setup-assistant__step-detail">
                {renderExpanded()}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  </li>
);

SetupAssistantItem.contextTypes = { assetBasePath: PropTypes.string };
SetupAssistantItem.defaultProps = {
  children: null,
  stepProgress: null,
  step: null,
  isExpanded: false,
  onExpand: null,
  renderAddon: () => null,
  renderExpanded: () => null,
  // eslint-disable-next-line react/prop-types
  renderProgress: ({ stepProgress, step }) => (
    <ProgressRing
      progress={stepProgress}
      status="active-step"
      size="large"
    >
      {step}
    </ProgressRing>
  )
};

SetupAssistantItem.propTypes = {
  /**
   * Item content
   */
  children: PropTypes.node,
  /**
   * Defines the expanded state
   */
  isExpanded: PropTypes.bool,
  /**
   * Triggered on expand icon and title click
   */
  onExpand: PropTypes.func,
  /**
   * Renders the addon
   */
  renderAddon: PropTypes.func,
  /**
   * Renders the expanded content
   */
  renderExpanded: PropTypes.func,
  /**
   * Renders the progress ring
   */
  renderProgress: PropTypes.func,
  /**
   * Passed to renderProgress
   */
  step: PropTypes.number,
  /**
   * Passed to renderProgress
   */
  stepProgress: PropTypes.number,
  /**
   * Step title
   */
  title: PropTypes.string.isRequired,
};

export default SetupAssistantItem;
