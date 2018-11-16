import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../Grid';
import { getClampedProgress } from './utils';
import ProgressBar from './ProgressBar';

const DescriptiveProgressBar = ({
  completeLabel,
  id,
  label,
  max,
  min,
  progress,
  ...rest
}) => (
  <div>
    <Grid className="slds-p-bottom_x-small" align="spread" id={id}>
      <span>{label}</span>
      <span aria-hidden="true">
        <strong>
          {`${getClampedProgress(progress, min, max)}% ${completeLabel}`}
        </strong>
      </span>
    </Grid>
    <ProgressBar
      aria-labelledby={id}
      completeLabel={completeLabel}
      min={min}
      max={max}
      progress={progress}
      {...rest}
    />
  </div>
);

DescriptiveProgressBar.defaultProps = {
  completeLabel: 'Complete',
  max: 100,
  min: 0,
  progress: 0,
};

DescriptiveProgressBar.propTypes = {
  /** Labels the 'Complete' percentage, e.g. "25% Complete" */
  completeLabel: PropTypes.string,
  /** Ties label to ProgressBar for assistive technology */
  id: PropTypes.string.isRequired,
  /** Main label */
  label: PropTypes.string.isRequired,
  /** See ProgressBar */
  max: PropTypes.number,
  /** See ProgressBar */
  min: PropTypes.number,
  /** See ProgressBar */
  progress: PropTypes.number,
};

export default DescriptiveProgressBar;
