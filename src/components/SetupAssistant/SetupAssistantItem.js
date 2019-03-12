import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../Button';
import { ProgressRing } from '../Progress';
import { MediaObject } from '../MediaObject';
import { SummaryDetail } from '../SummaryDetail';

const SetupAssistantItem = ({
  children,
  className,
  isOpen,
  title,
  stepProgress,
  step,
  renderProgress,
  renderAddon,
  renderOpenContent,
  onOpen,
  ...rest
}) => {
  const renderTitle = () => (
    <div className="slds-setup-assistant__step-summary">
      <MediaObject
        figureLeft={renderProgress({ stepProgress, step })}
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
  );

  return (
    <li className={cx('slds-setup-assistant__item', className)} {...rest}>
      <article className="slds-setup-assistant__step">
        <SummaryDetail
          isOpen={isOpen}
          onOpen={onOpen}
          renderTitle={renderTitle}
          iconButtonClassName="slds-m-top_x-small"
        >
          {renderOpenContent && (() => (
            <div className="slds-setup-assistant__step-detail">
              {renderOpenContent()}
            </div>
          ))}
        </SummaryDetail>
      </article>
    </li>
  );
};

SetupAssistantItem.defaultProps = {
  children: null,
  className: null,
  stepProgress: null,
  step: null,
  isOpen: false,
  onOpen: null,
  renderAddon: () => null,
  renderOpenContent: () => null,
  // eslint-disable-next-line react/prop-types
  renderProgress: ({ stepProgress, step }) => (step || stepProgress) && (
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
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Defines the expanded state
   */
  isOpen: PropTypes.bool,
  /**
   * Triggered on expand icon and title click
   */
  onOpen: PropTypes.func,
  /**
   * Function that renders the expanded content. Called when isOpen is true
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
  step: PropTypes.element,
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
