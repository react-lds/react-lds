import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getAriaLabel, getTabsClass } from './utils';
import TabLink from './TabLink';

class ControlledTabs extends PureComponent {
  static defaultProps = {
    renderInactiveTabs: false,
    scoped: false,
    styled: false,
  }

  static propTypes = {
    /**
     * Id of the currently active tab
     */
    activeTab: PropTypes.string.isRequired,
    /**
     * One or more Tab components
     */
    children: PropTypes.node.isRequired,
    /**
     * Callback triggered when the Tab is changed. Receives (nextIndex)
     */
    onChangeTab: PropTypes.func.isRequired,
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
  };

  static getPanelState(children) {
    const positionReducer = (acc, curr, i) => ({
      ...acc,
      [`${curr.props.id}`]: i,
    });

    const childrenArray = React.Children.toArray(children);

    const nextState = {
      positions: childrenArray.reduce(positionReducer, {}),
      focusedTab: false,
      length: childrenArray.length,
    };

    return nextState;
  }

  constructor(props) {
    super(props);
    this.state = ControlledTabs.getPanelState(props.children);
    /** refs are used to focus links after keyboard navigation occured */
    this.linkNodes = new Map();
  }

  componentWillReceiveProps({ children: nextChildren }) {
    const { children: prevChildren } = this.props;

    if (nextChildren !== prevChildren) {
      this.setState(ControlledTabs.getPanelState(nextChildren));
    }
  }

  onChangeTab(nextActiveTab) {
    const { onChangeTab } = this.props;
    this.setState({ focusedTab: nextActiveTab });
    onChangeTab(nextActiveTab);
  }


  getCurrentPosition() {
    const { activeTab } = this.props;
    const { positions } = this.state;
    return positions[activeTab];
  }

  getIdForPosition(position) {
    const { positions } = this.state;
    return Object.keys(positions).find(key => positions[key] === position);
  }

  getOnLinkKeyup() {
    const linkNodes = this.linkNodes;

    return (evt) => {
      const { key } = evt;
      const isLeftKey = key === 'ArrowLeft';
      const isRightKey = key === 'ArrowRight';
      if (!isLeftKey && !isRightKey) return;

      const { length } = this.state;
      const currentPosition = this.getCurrentPosition();

      /* eslint-disable no-nested-ternary */
      const nextIndex = isLeftKey
        ? (currentPosition > 0) ? currentPosition - 1 : Math.max(length - 1, 0)
        : (currentPosition < length - 1) ? currentPosition + 1 : 0;
      /* eslint-enable */

      const nextId = this.getIdForPosition(nextIndex);

      this.onChangeTab(nextId);
      /** Accesses the ref defined in <TabLink /> */
      linkNodes.get(nextId).link.focus();
    };
  }

  getLinkRefSetter(id) {
    return (c) => { this.linkNodes.set(id, c); };
  }

  getOnLinkFocus(id) {
    return () => { this.setState({ focusedTab: id }); };
  }

  getOnBlur() {
    return ({ currentTarget }) => {
      /** Workaround to only fire blur when the whole navigation is unfocused */
      setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
          this.setState({ focusedTab: false });
        }
      }, 0);
    };
  }

  getOnLinkClick(id) {
    return (evt) => {
      evt.stopPropagation();
      this.onChangeTab(id);
    };
  }

  getLinkRenderer() {
    const { focusedTab } = this.state;
    const { activeTab, scoped } = this.props;

    return (child, i) => {
      const { tabTitle, id, title } = child.props;

      return (
        <TabLink
          isActive={activeTab === id}
          isFocused={focusedTab === id}
          id={id}
          onFocus={this.getOnLinkFocus(id)}
          onKeyUp={this.getOnLinkKeyup(i)}
          /* Focus is triggered before click but after mouseDown, using mouseDown to prevent a render-cycle */
          onMouseDown={this.getOnLinkClick(id)}
          ref={this.getLinkRefSetter(id)}
          scoped={scoped}
          title={tabTitle || title}
        >
          {title}
        </TabLink>
      );
    };
  }

  getActiveTabRenderer() {
    const { activeTab, renderInactiveTabs, scoped } = this.props;

    return (child) => {
      const { id } = child.props;
      const isActive = id === activeTab;
      const hideTab = !isActive && !renderInactiveTabs;

      return React.cloneElement(child, {
        'aria-labelledby': getAriaLabel(child.props.id),
        isActive: hideTab ? null : isActive,
        scoped
      });
    };
  }

  render() {
    const { scoped, styled, children } = this.props;

    return (
      <div
        className={cx(
          getTabsClass('', scoped),
          styled && 'slds-tabs_card'
        )}
      >
        <ul
          className={getTabsClass('__nav', scoped)}
          onBlur={this.getOnBlur()}
          role="tablist"
        >
          {React.Children.map(children, this.getLinkRenderer())}
        </ul>
        {React.Children.map(children, this.getActiveTabRenderer())}
      </div>
    );
  }
}

export default ControlledTabs;
