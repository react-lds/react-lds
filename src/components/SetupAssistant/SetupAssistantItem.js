import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ProgressRing } from '../Progress';
import { MediaObject } from '../MediaObject';
import { SummaryDetail } from '../SummaryDetail';

const SetupAssistantItem = ({
  children,
  isOpen,
  title,
  stepProgress,
  step,
  renderProgress,
  renderOpenContent,
  renderAddon,
  onOpen,
}) => (
  <li className="slds-setup-assistant__item">
    <article className="slds-setup-assistant__step">
      <SummaryDetail isOpen={isOpen} onOpen={onOpen} renderOpenContent={renderOpenContent}>
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
                {onOpen ? (
                  <Button flavor={null} className="slds-button_reset" onClick={onOpen}>
                    {title}
                  </Button>
                ) : title}
              </h3>
              <p>{children}</p>
            </MediaObject>
          </MediaObject>
        </div>
      </SummaryDetail>
    </article>
  </li>
);

SetupAssistantItem.defaultProps = {
  children: null,
  stepProgress: null,
  step: null,
  isOpen: false,
  onOpen: null,
  renderAddon: () => null,
  renderOpenContent: () => null,
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
  isOpen: PropTypes.bool,
  /**
   * Triggered on expand icon and title click
   */
  onOpen: PropTypes.func,
  /**
   * Renders the addon
   */
  renderAddon: PropTypes.func,
  /**
   * Renders the expanded content
   */
  renderOpenContent: PropTypes.func,
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
