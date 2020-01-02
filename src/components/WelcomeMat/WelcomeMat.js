import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Grid } from '../Grid';
import { Modal, ModalContent } from '../Modal';
import { stepType } from './constants';
import { WelcomeMatStep } from './WelcomeMatStep';

class WelcomeMat extends Component {
  onComplete = (evt) => {
    const {
      currentTarget: {
        dataset: { targetId },
      },
    } = evt;

    const { onCompleteStep, steps } = this.props;
    // `stepId` can be a `number` while targetId will be a `string`, need to cast
    const step = steps.find(({ id: stepId }) => `${stepId}` === `${targetId}`);

    return onCompleteStep({ id: step.id, step });
  }

  render() {
    const {
      description,
      id,
      isInfoOnly,
      isOpen,
      onClose,
      onCompleteStep,
      renderAction,
      renderDismiss,
      renderProgress,
      steps,
      title,
      ...rest
    } = this.props;

    const isSplash = steps == null;

    const sldsClasses = [
      'slds-welcome-mat',
      { 'slds-welcome-mat_splash': isSplash },
    ];

    return (
      <Modal
        {...rest}
        id={id}
        open={isOpen}
        onClose={onClose}
        size="small"
      >
        <ModalContent collapsePadding>
          <div className={cx(sldsClasses)}>
            <Grid className="slds-welcome-mat__content">
              <Column
                className="slds-welcome-mat__info"
                omitCol
                sizeOf={isSplash ? '1-1' : '1-2'}
              >
                <div className="slds-welcome-mat__info-content">
                  <h2 id={`${id}-label`} className="slds-welcome-mat__info-title">
                    {title}
                  </h2>
                  <div className="slds-welcome-mat__info-description slds-text-longform">
                    {description}
                  </div>
                  {renderProgress && !isSplash && renderProgress({ steps })}
                  {(renderAction || renderDismiss) && (
                    <div className="slds-welcome-mat__info-actions">
                      {renderAction && renderAction({ onClose, steps })}
                      {renderDismiss && (
                        renderAction
                          ? (
                            <div className="slds-m-top_large">
                              {renderDismiss({ id, onClose, steps })}
                            </div>
                          ) : renderDismiss({ id, onClose, steps })
                      )}
                    </div>
                  )}
                </div>
              </Column>
              {!isSplash && (
                <Column
                  as="ul"
                  className={cx([
                    'slds-welcome-mat__tiles',
                    { 'slds-welcome-mat__tiles_info-only': isInfoOnly },
                  ])}
                  omitCol
                  size="1-of-2"
                >
                  {steps.map(step => (
                    <WelcomeMatStep
                      key={`${id}-${step.id}`}
                      isInfoOnly={isInfoOnly}
                      onComplete={this.onComplete}
                      step={step}
                    />
                  ))}
                </Column>
              )}
            </Grid>
          </div>
        </ModalContent>
      </Modal>
    );
  }
}
WelcomeMat.defaultProps = {
  isInfoOnly: false,
  isOpen: false,
  onCompleteStep: null,
  renderAction: null,
  renderDismiss: null,
  renderProgress: null,
  steps: undefined,
};

WelcomeMat.propTypes = {
  /**
   * Description, rendered below `title`. Should return a `p`
   */
  description: PropTypes.node.isRequired,
  /**
   * Identifier for `Modal`
   */
  id: PropTypes.string.isRequired,
  /**
   * When this flag is set, `isComplete` is ignored for steps
   */
  isInfoOnly: PropTypes.bool,
  /**
   * Controls `isOpen` state of the underlying `Modal`
   */
  isOpen: PropTypes.bool,
  /**
   * Passed to `Modal`
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Handler injected when rendering steps. Called with `({ id, step })`.
   * Note: This is also called for completed steps, a handler will need to check for `step.isCompleted`
   */
  onCompleteStep: PropTypes.func,
  /**
   * Renders call-to-action beneath description. Called with `({ onClose, steps })`
   */
  renderAction: PropTypes.func,
  /**
   * Should render a `Checkbox` or similar. Called with `({ onClose, steps })`
   */
  renderDismiss: PropTypes.func,
  /**
   * Should render a `WelcomeMatProgress` element. Called with `({ steps })`
   */
  renderProgress: PropTypes.func,
  /**
   * Steps as array. If not set or `undefined/null`, the "Splash" variant will be assumed
   */
  steps: PropTypes.arrayOf(stepType),
  /**
   * Title element
   */
  title: PropTypes.node.isRequired,
};

export default WelcomeMat;
