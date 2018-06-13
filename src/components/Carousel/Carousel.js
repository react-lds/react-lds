import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

import ControlledCarousel from './ControlledCarousel';

class Carousel extends Component {
  state = {
    activeIndex: 0,
    panels: [],
  }

  autoPlayId = null // eslint-disable-line react/sort-comp

  componentWillMount() {
    const { autoPlayActive, children } = this.props;

    this.setState(children);

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

    const childrenChanged = nextChildren.length !== prevChildren.length ||
      !isEqual(nextChildren.map(({ props }) => props), prevChildren.map(({ props }) => props));

    if (childrenChanged) {
      this.updatePanels(nextChildren);
    }

    if (!!nextAutoPlayActive !== prevAutoPlayActive) {
      if (nextAutoPlayActive) this.startAutoPlay();
      else this.stopAutoPlay();
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

  toggleAutoPlay = () => {
    if (this.autoPlayId) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  activateNextPanel = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;

    const nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex >= children.length) {
      this.setState({ activeIndex: 0 });
    } else {
      this.setState({ activeIndex: nextActiveIndex });
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

  render() {
    const {
      autoPlay,
      autoPlayStartText,
      autoPlayStopText,
      className,
      children,
    } = this.props;

    const {
      activeIndex,
      autoPlayActive,
    } = this.state;

    return (
      <ControlledCarousel
        activeIndex={activeIndex}
        autoPlay={autoPlay}
        autoPlayActive={autoPlayActive}
        autoPlayStartText={autoPlayStartText}
        autoPlayStopText={autoPlayStopText}
        className={className}
        onToggleAutoPlay={() => this.toggleAutoPlay()}
        onPanelChange={index => this.setState({ activeIndex: index })}
      >
        {children}
      </ControlledCarousel>
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
