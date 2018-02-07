import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlledTabs from './ControlledTabs';

class Tabs extends Component {
  static defaultProps = {
    defaultActiveTab: null,
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
     * Id of the Tab that should be rendered first. Uses first tab of not passed
     *
     */
    defaultActiveTab: PropTypes.number,
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

  static getFirstChildId = (children) => {
    const childArray = React.Children.toArray(children);
    const firstChild = childArray[0];

    if (!firstChild) return null;

    const { props: { id } } = firstChild;
    return id;
  }

  constructor(props) {
    super(props);

    const { children, defaultActiveTab } = this.props;

    const firstId = defaultActiveTab || Tabs.getFirstChildId(children);

    this.state = {
      activeTab: firstId,
    };
  }

  componentWillReceiveProps({ children: nextChildren }) {
    if (nextChildren !== this.props.children) {
      this.setState({ activeTab: Tabs.getFirstChildId(nextChildren) });
    }
  }

  getOnTabChange = () => (id) => {
    const { onChangeTab } = this.props;
    this.setState({ activeTab: id });
    if (onChangeTab) { onChangeTab(id); }
  }

  render() {
    return (
      <ControlledTabs
        {...this.props}
        onChangeTab={this.getOnTabChange()}
        activeTab={this.state.activeTab}
      />
    );
  }
}

export default Tabs;
