import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconButton } from '../Button';

class ControlledCarousel extends Component {
  onClickIndicator = (e) => {
    const { onPanelChange } = this.props;

    e.stopPropagation();
    e.target.blur();
    onPanelChange(parseInt(e.target.dataset.index, 10));
  }

  onKeyboardInteraction = (e) => {
    if (e.key === 'ArrowLeft') {
      this.activatePreviousPanel();
    } else if (e.key === 'ArrowRight') {
      this.activateNextPanel();
    }
  }

  getPanels = () => {
    const { activeIndex, children } = this.props;

    return React.Children.map(children, (panel, index) => (
      React.cloneElement(panel, {
        active: activeIndex === index,
        onKeyboardInteraction: this.onKeyboardInteraction,
      })
    ));
  }

  activateNextPanel = () => {
    const { activeIndex, children, onPanelChange } = this.props;

    const nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex >= children.length) {
      onPanelChange(0);
    } else {
      onPanelChange(nextActiveIndex);
    }
  }

  activatePreviousPanel = () => {
    const { activeIndex, children, onPanelChange } = this.props;

    const nextActiveIndex = activeIndex - 1;

    if (nextActiveIndex < 0) {
      onPanelChange(children.length - 1);
    } else {
      onPanelChange(nextActiveIndex);
    }
  }

  renderIndicator = ({ props: { active, id, title } }, index) => {
    const actionClasses = cx(
      'slds-carousel__indicator-action',
      { 'slds-is-active': active },
    );

    return (
      <li className="slds-carousel__indicator" key={id} role="presentation">
        <a
          className={actionClasses}
          role="tab"
          tabIndex={active ? 0 : -1}
          aria-selected={active}
          aria-controls={id}
          onClick={this.onClickIndicator}
          title={title}
          data-index={index}
        >
          <span className="slds-assistive-text">{title}</span>
        </a>
      </li>
    );
  }

  renderAutoPlay() {
    const {
      autoPlayStartText,
      autoPlayStopText,
      autoPlayActive,
      onToggleAutoPlay,
    } = this.props;

    return (
      <span className="slds-carousel__autoplay">
        <IconButton
          icon={autoPlayActive ? 'pause' : 'right'}
          border="filled"
          sprite="utility"
          onClick={onToggleAutoPlay}
          size="x-small"
          title={autoPlayActive ? autoPlayStopText : autoPlayStartText}
        />
      </span>
    );
  }

  render() {
    const {
      activeIndex,
      className,
      autoPlay,
    } = this.props;

    const panels = this.getPanels();

    const sldsClasses = ['slds-carousel', className];

    const translateX = `translateX(-${activeIndex * 100}%)`;

    return (
      <div className={cx(sldsClasses)}>
        <div className="slds-carousel__stage">
          {autoPlay && this.renderAutoPlay()}
          <div className="slds-carousel__panels" style={{ transform: translateX }}>
            {panels}
          </div>
          <ul className="slds-carousel__indicators" role="tablist">
            {panels.map(this.renderIndicator)}
          </ul>
        </div>
      </div>
    );
  }
}

ControlledCarousel.defaultProps = {
  activeIndex: 0,
  autoPlay: false,
  autoPlayActive: false,
  autoPlayStartText: null,
  autoPlayStopText: null,
  children: [],
  className: null,
  onToggleAutoPlay: null,
};

ControlledCarousel.propTypes = {
  /**
   * active panel
   */
  activeIndex: PropTypes.number,
  /**
   * the carousel should have an autoplay start/stop button
   */
  autoPlay: PropTypes.bool,
  /**
   * the autoplay button should render in start or stop mode
   */
  autoPlayActive: PropTypes.bool,
  /**
   * text for the autoplay button start
   */
  autoPlayStartText: PropTypes.string,
  /**
   * text for the autoplay button stop
   */
  autoPlayStopText: PropTypes.string,
  /**
   * list of carousel panels
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * handler for switching panels
   */
  onPanelChange: PropTypes.func.isRequired,
  /**
   * handler for clicking the autoplay start/stop button
   */
  onToggleAutoPlay: PropTypes.func,
};

export default ControlledCarousel;
