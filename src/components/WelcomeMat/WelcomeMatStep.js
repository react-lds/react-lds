/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { stepType } from './constants';
import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const renderFigure = (figure, classes) => (
  <div
    className={cx(
      ...classes,
      'slds-media__figure_fixed-width',
      'slds-align_absolute-center'
    )}
  >
    {figure}
  </div>
);

export const WelcomeMatStep = ({
  isInfoOnly,
  onComplete,
  step,
}) => {
  const {
    description,
    icon,
    id,
    isCompleted,
    sprite,
    title,
  } = step;

  const isComplete = !isInfoOnly && isCompleted;

  const sldsClasses = [
    'slds-welcome-mat__tile',
    { 'slds-welcome-mat__tile_info-only': isInfoOnly },
    { 'slds-welcome-mat__tile_complete': isComplete },
  ];

  const iconEl = (
    <Icon
      sprite={sprite}
      icon={icon}
      svgClassName="slds-icon-text-default"
    />
  );

  return (
    <li className={cx(sldsClasses)}>
      <MediaObject
        as={isInfoOnly ? 'div' : 'a'}
        className={isInfoOnly ? null : 'slds-box slds-box_link'}
        href={isInfoOnly ? undefined : 'javascript:void(0)'}
        center={false}
        data-target-id={id}
        onClick={isInfoOnly ? null : onComplete}
        responsive={false}
        renderFigureLeft={renderFigure}
        figureLeft={(
          <div className="slds-welcome-mat__tile-figure">
            {isComplete
              ? (
                <div className="slds-welcome-mat__tile-icon-container">
                  {iconEl}
                  <Icon
                    className="slds-icon_container_circle"
                    icon="check"
                    sprite="action"
                    svgClassName="slds-welcome-mat__icon-check"
                  />
                </div>
              )
              : iconEl
            }

          </div>
        )}
      >
        <div className="slds-welcome-mat__tile-body">
          <h3 className="slds-welcome-mat__tile-title">{title}</h3>
          <p className="slds-welcome-mat__tile-description">{description}</p>
        </div>
      </MediaObject>
    </li>
  );
};

WelcomeMatStep.defaultProps = {
  onComplete: null,
};

WelcomeMatStep.propTypes = {
  isInfoOnly: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  step: stepType.isRequired,
};
