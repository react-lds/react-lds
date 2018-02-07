import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlledTabs from './ControlledTabs';

class Tabs extends Component {
  static defaultProps = {
    onChangeTab: null,
    renderInactiveTabs: false,
    scoped: false,
    styled: false,
  }

  static propTypes = {
    /**
     * One or more Tab components
     */
    children: PropTypes.node.isRequired,
    /**
     * Callback triggered when the Tab is changed. Receives (nextIndex)
     */
    onChangeTab: PropTypes.func,
    /**
     * When this is true, inActive tabs will be rendered and hidden with .slds-hide instead of returning null
     */
    renderInactiveTabs: PropTypes.bool,
    /**
     * Renders scoped variant
     */
    scoped: PropTypes.bool,
    /**
     * Renders Card-like variant
     */
    styled: PropTypes.bool,
  }

  state = {
    activeIndex: 0,
  }

  getOnTabChange = () => (i) => {
    const { onChangeTab } = this.props;
    this.setState({ activeIndex: i });
    if (onChangeTab) { onChangeTab(i); }
  }

  render() {
    return (
      <ControlledTabs
        {...this.props}
        onChangeTab={this.getOnTabChange()}
        activeIndex={this.state.activeIndex}
      />
    );
  }
}

export default Tabs;
