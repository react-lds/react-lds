import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, IconButton } from '../Button';
import { Container } from '../Grid';
import { ProgressRing } from '../Progress';
import { MediaObject } from '../MediaObject';

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
}) => (
  <li className="slds-setup-assistant__item">
    <article className="slds-setup-assistant__step">
      <div className={cx('slds-summary-detail', { 'slds-is-open': isExpanded })}>
        {onExpand && (
          <IconButton
            sprite="utility"
            icon="switch"
            onClick={onExpand}
            className="slds-m-right_x-small slds-m-top_x-small"
            iconClassName="slds-summary-detail__action-icon"
          />
        )}
        <Container flavor="fluid">
          <div className="slds-summary-detail__title">
            <div className="slds-setup-assistant__step-summary">
              <MediaObject
                figureLeft={stepProgress && renderProgress({ stepProgress, step })}
                bodyClassName="slds-m-top_x-small"
                center={false}
              >
                <MediaObject
                  figureRight={renderAddon()}
                  bodyClassName="slds-setup-assistant__step-summary-content"
                  center={false}
                >
                  <h3 className="slds-setup-assistant__step-summary-title slds-text-heading_small">
                    {onExpand ? (
                      <Button flavor="reset" onClick={onExpand}>
                        {title}
                      </Button>
                    ) : title}
                  </h3>
                  <p>{children}</p>
                </MediaObject>
              </MediaObject>
            </div>
          </div>
          {isExpanded && (
            <div className="slds-summary-detail__content">
              <div className="slds-setup-assistant__step-detail">
                {renderExpanded()}
              </div>
            </div>
          )}
        </Container>
      </div>
    </article>
  </li>
);

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
