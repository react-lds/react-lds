import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Carousel extends Component {
  state = {
    activeIndex: 0,
    panels: [],
  }

  componentWillMount() {
    this.updatePanels(this.props.children);
  }

  componentWillReceiveProps({ children: nextChildren }) {
    const { children: prevChildren } = this.props;
    if (nextChildren !== prevChildren) {
      this.updatePanels(nextChildren);
    }
  }

  onClickIndicator = (e) => {
    const { activeIndex, panels } = this.state;

    const nextActiveIndex = Number(e.target.dataset.index);
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
  };

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

  renderIndicator = ({ props: { active, id, title } }, index) => {
    const tabIndex = active ? 0 : -1;

    const actionClasses = cx(
      'slds-carousel__indicator-action',
      { 'slds-is-active': active },
    );

    return (
      <li className="slds-carousel__indicator" role="presentation">
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
      className,
      ...rest
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
      <div {...rest} className={cx(sldsClasses)}>
        <div className="slds-carousel__stage">
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
  children: [],
  className: null,
};

Carousel.propTypes = {
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
