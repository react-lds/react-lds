import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../Progress';
import { stepType } from './helpers';

const WelcomeMatProgress = ({ steps }) => {
  const len = steps.length;
  if (len === 0) return null;

  const completedSteps = steps.filter(({ isCompleted }) => isCompleted).length;

  return (
    <div className="slds-welcome-mat__info-progress">
      <p>
        <strong>{`${completedSteps}/${len} completed`}</strong>
      </p>
      <ProgressBar
        circular
        min={0}
        max={len}
        success
        progress={completedSteps}
      />
    </div>
  );
};

WelcomeMatProgress.propTypes = {
  steps: PropTypes.arrayOf(stepType).isRequired,
};

export default WelcomeMatProgress;
