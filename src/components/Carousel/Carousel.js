import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class Carousel extends Component {
  state = {
    activeIndex: 0,
    panels: [],
  }

  autoPlayId = null // eslint-disable-line react/sort-comp
  autoPlayFlavors = ['icon-border-filled', 'icon-x-small'];

  componentWillMount() {
    const { autoPlayActive, children } = this.props;

    this.updatePanels(children);

    if (autoPlayActive) {
      this.startAutoPlay();
    }
  }

  componentWillUnmount() {
    if (this.autoPlayId) {
      clearInterval(this.autoPlayId);
    }
  }

  componentWillReceiveProps({ autoPlayActive: nextAutoPlayActive, children: nextChildren }) {
    const { children: prevChildren } = this.props;
    const { autoPlayActive: prevAutoPlayActive } = this.state;

    if (nextChildren !== prevChildren) {
      this.updatePanels(nextChildren);
    }

    if (!!nextAutoPlayActive !== prevAutoPlayActive) {
      if (nextAutoPlayActive) this.startAutoPlay();
      else this.stopAutoPlay();
    }
  }

  onClickIndicator = e => this.setActivePanel(Number(e.target.dataset.index));

  onKeyboardInteraction = (e) => {
    if (e.keyCode === 37) {
      this.activatePreviousPanel();
    } else if (e.keyCode === 39) {
      this.activateNextPanel();
    }
  }

  setActivePanel(nextActiveIndex) {
    const { activeIndex, panels } = this.state;

    const nextPanels = [...panels];

    nextPanels[activeIndex] = React.cloneElement(
      nextPanels[activeIndex],
      { active: false },
    );

    nextPanels[nextActiveIndex] = React.cloneElement(
      nextPanels[nextActiveIndex],
      { active: true },
    );

    this.setState({
      activeIndex: nextActiveIndex,
      panels: nextPanels,
    });
  }

  updatePanels(panels) {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: Math.min(panels.length, activeIndex),
      panels: React.Children.map(panels, (panel, index) => (
        React.cloneElement(panel, {
          active: activeIndex === index,
        })
      )),
    });
  }

  toggleAutoPlay = () => {
    if (this.autoPlayId) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    const { autoPlayInterval } = this.props;
    this.autoPlayId = setInterval(this.activateNextPanel, autoPlayInterval);
    this.setState({ autoPlayActive: true });
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayId);
    this.autoPlayId = null;
    this.setState({ autoPlayActive: false });
  }

  activateNextPanel = () => {
    const { activeIndex, panels } = this.state;

    const nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex >= panels.length) {
      this.setActivePanel(0);
    } else {
      this.setActivePanel(nextActiveIndex);
    }
  }

  activatePreviousPanel = () => {
    const { activeIndex, panels } = this.state;

    const nextActiveIndex = activeIndex - 1;

    if (nextActiveIndex < 0) {
      this.setActivePanel(panels.length - 1);
    } else {
      this.setActivePanel(nextActiveIndex);
    }
  }

  renderAutoPlay() {
    const { autoPlayStartText, autoPlayStopText } = this.props;
    const { autoPlayActive } = this.state;

    const icon = autoPlayActive ? 'pause' : 'right';
    const assistiveText = autoPlayActive
      ? autoPlayStopText
      : autoPlayStartText;

    return (
      <span className="slds-carousel__autoplay">
        <Button
          flavor={this.autoPlayFlavors}
          onClick={this.toggleAutoPlay}
          size="x-small"
          title={assistiveText}
        >
          <ButtonIcon sprite="utility" icon={icon} />
          <span className="slds-assistive-text">{assistiveText}</span>
        </Button>
      </span>
    );
  }

  renderIndicator = ({ props: { active, id, title } }, index) => {
    const tabIndex = active ? 0 : -1;

    const actionClasses = cx(
      'slds-carousel__indicator-action',
      { 'slds-is-active': active },
    );

    return (
      <li className="slds-carousel__indicator" key={id} role="presentation">
        <a
          className={actionClasses}
          role="tab"
          tabIndex={tabIndex}
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

  render() {
    const {
      autoPlay,
      className,
    } = this.props;

    const {
      activeIndex,
      panels,
    } = this.state;

    const sldsClasses = [
      'slds-carousel',
      className
    ];

    const translateX = `translateX(-${activeIndex * 100}%)`;

    return (
      <div className={cx(sldsClasses)} onKeyDown={this.onKeyboardInteraction}>
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

Carousel.defaultProps = {
  autoPlay: false,
  autoPlayActive: false,
  autoPlayInterval: 4000,
  autoPlayStartText: 'Start auto-play',
  autoPlayStopText: 'Stop auto-play',
  children: [],
  className: null,
};

Carousel.propTypes = {
  /**
   * toggle autoplay mode
   */
  autoPlay: PropTypes.bool,
  /**
   * control whether autoplay is active or not
   */
  autoPlayActive: PropTypes.bool,
  /**
   * assistive text for autoplay button
   */
  autoPlayStartText: PropTypes.string,
  /**
   * assistive text for autoplay button
   */
  autoPlayStopText: PropTypes.string,
  /**
   * change autoplay interval, defaults to 4000ms
   */
  autoPlayInterval: PropTypes.number,
  /**
   * list of carousel panels
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default Carousel;
