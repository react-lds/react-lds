import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ResizeListener } from './ResizeListener';

export class OverflowContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    containerRef: PropTypes.object,
    forcedUpdateTimestamp: PropTypes.number,
    skipCalculation: PropTypes.bool,
  }

  static defaultProps = {
    containerRef: {},
    forcedUpdateTimestamp: Date.now(),
    skipCalculation: false,
  }

  state = {
    overflowCount: 0
  }

  componentDidMount() {
    this.calculateOverflow();
  }

  componentDidUpdate(prevProps) {
    const { forcedUpdateTimestamp, skipCalculation } = this.props;

    if (
      (prevProps.skipCalculation && !skipCalculation)
      || (forcedUpdateTimestamp && forcedUpdateTimestamp > prevProps.forcedUpdateTimestamp)
    ) {
      this.calculateOverflow();
    }
  }

  calculateOverflow = () => {
    const { containerRef, skipCalculation } = this.props;

    if (skipCalculation || !containerRef || !containerRef.current) return;

    const { overflowCount: currentOverflowCount } = this.state;
    const { children } = containerRef.current;

    if (children.length === 0) return;

    // Optimization: All pills have a static height due to truncation
    const pillHeight = children[0].clientHeight;

    let overflowCount = 0;

    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (child.offsetTop >= pillHeight) overflowCount += 1;
    }

    if (currentOverflowCount !== overflowCount) {
      this.setState({ overflowCount });
    }
  }

  render() {
    const { children } = this.props;
    const { overflowCount } = this.state;

    return (
      <Fragment>
        <ResizeListener callback={this.calculateOverflow} />
        {children({ overflowCount })}
      </Fragment>
    );
  }
}
