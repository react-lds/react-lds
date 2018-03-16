import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SCORES = ['negative', 'positive'];

const renderScore = score => (
  <svg
    key={score}
    viewBox="0 0 5 5"
    className={`slds-icon-score__${score}`}
    aria-hidden="true"
  >
    <circle cx="50%" cy="50%" r="1.875" />
  </svg>
);

const ScoreIcon = (props) => {
  const {
    assistiveText,
    className,
    score,
    title,
    ...rest
  } = props;

  const assistive = assistiveText || title;

  return (
    <div className={cx('slds-icon_container', className)} {...rest}>
      <span
        className="slds-icon-score"
        data-slds-state={score}
        title={title}
      >
        {SCORES.map(renderScore)}
        {assistive && <span className="slds-assistive-text">{assistive}</span>}
      </span>
    </div>
  );
};

ScoreIcon.defaultProps = {
  assistiveText: null,
  className: null,
  title: null,
};

ScoreIcon.propTypes = {
  /**
   * AssistiveText of icon. Defaults to `title` if not present
   */
  assistiveText: PropTypes.string,
  /**
   * Additional classes that will be applied to `span#slds-icon-score`
   */
  className: PropTypes.string,
  /**
   * Indicates the icon that will be rendered: `positive` or `negative`
   */
  score: PropTypes.oneOf(SCORES).isRequired,
  /**
   * Sets a `title` tooltip. Also sets `assistiveText` if prop not present
   */
  title: PropTypes.string,
};

export default ScoreIcon;
