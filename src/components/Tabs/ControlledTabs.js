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
     * Index of the currently active tab
     */
    activeIndex: PropTypes.number.isRequired,
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


  constructor(props) {
    super(props);

    const { children } = props;

    this.state = {
      focusedIndex: false,
      length: children.length,
    };

    /** refs are used to focus links after keyboard navigation occured */
    this.linkNodes = new Map();
  }

  componentWillReceiveProps({ children: nextChildren }) {
    if (nextChildren.length !== this.state.length) {
      const nextState = {
        focusedIndex: false,
        length: nextChildren.length,
      };

      this.setState(nextState);
    }
  }

  onChangeTab(nextActiveIndex) {
    const { onChangeTab } = this.props;
    this.setState({ focusedIndex: nextActiveIndex });
    onChangeTab(nextActiveIndex);
  }

  getCurrentTab() {
    const { activeIndex } = this.props;
    return activeIndex;
  }

  getOnLinkKeyup() {
    const linkNodes = this.linkNodes;

    return (evt) => {
      const { key } = evt;
      const isLeftKey = key === 'ArrowLeft';
      const isRightKey = key === 'ArrowRight';
      if (!isLeftKey && !isRightKey) return;

      const { length } = this.state;

      const currentTab = this.getCurrentTab();

      /* eslint-disable no-nested-ternary */
      const nextIndex = isLeftKey
        ? (currentTab > 0) ? currentTab - 1 : Math.max(length - 1, 0)
        : (currentTab < length - 1) ? currentTab + 1 : 0;
      /* eslint-enable */
      this.onChangeTab(nextIndex);
      /** Accesses the ref defined in <TabLink /> */
      const linkRef = linkNodes.get(nextIndex);
      linkRef.link.focus();
    };
  }

  getLinkRefSetter(i) {
    return (c) => { this.linkNodes.set(i, c); };
  }

  getOnLinkFocus(i) {
    return () => { this.setState({ focusedIndex: i }); };
  }

  getOnBlur() {
    return (evt) => {
      const currentTarget = evt.currentTarget;

      /** Workaround to only fire blur when the whole navigation is unfocused */
      setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
          this.setState({ focusedIndex: false });
        }
      }, 0);
    };
  }

  getOnLinkClick(i) {
    return (evt) => {
      evt.stopPropagation();
      this.onChangeTab(i);
    };
  }

  getLinkRenderer() {
    const { focusedIndex } = this.state;
    const { scoped } = this.props;

    const currentTab = this.getCurrentTab();

    return (child, i) => {
      const { tabTitle, id, title } = child.props;

      return (
        <TabLink
          isActive={currentTab === i}
          isFocused={focusedIndex === i}
          id={id}
          onFocus={this.getOnLinkFocus(i)}
          onKeyUp={this.getOnLinkKeyup()}
          /* Focus is triggered before click but after mouseDown, using mouseDown to prevent a render-cycle */
          onMouseDown={this.getOnLinkClick(i)}
          ref={this.getLinkRefSetter(i)}
          scoped={scoped}
          title={tabTitle || title}
        >
          {title}
        </TabLink>
      );
    };
  }

  getActiveTabRenderer() {
    const { renderInactiveTabs, scoped } = this.props;
    const currentTab = this.getCurrentTab();

    return (child, i) => {
      const isActive = i === currentTab;
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
