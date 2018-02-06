import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getAriaLabel, getTabsClass } from './utils';

class Tabs extends PureComponent {
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
     * Callback triggered when the Tab is changed. Receives (nextIndex, prevIndex)
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

  static initialState = children => ({
    activeIndex: 0,
    focussedIndex: false,
    length: children.length,
  })

  constructor(props) {
    super(props);
    const { children } = props;
    this.state = Tabs.initialState(children);
    /** refs are used to focus links after keyboard navigation */
    this.linkNodes = new Map();
  }

  componentWillReceiveProps({ children: nextChildren }) {
    if (nextChildren.length !== this.state.length) {
      const nextState = Tabs.initialState(nextChildren);
      this.setState(nextState);
    }
  }

  onChangeTab(nextActiveIndex) {
    const { onChangeTab } = this.props;

    this.setState({
      activeIndex: nextActiveIndex,
      focussedIndex: nextActiveIndex,
    }, () => {
      if (onChangeTab) {
        onChangeTab(nextActiveIndex);
      }
    });
  }

  getOnLinkKeyup() {
    const linkNodes = this.linkNodes;

    return (evt) => {
      const { key } = evt;
      const isLeftKey = key === 'ArrowLeft';
      const isRightKey = key === 'ArrowRight';
      if (!isLeftKey && !isRightKey) return;

      const { activeIndex, length } = this.state;
      /* eslint-disable no-nested-ternary */
      const nextIndex = isLeftKey
        ? (activeIndex > 0) ? activeIndex - 1 : Math.max(length - 1, 0)
        : (activeIndex < length - 1) ? activeIndex + 1 : 0;
      /* eslint-enable */
      this.onChangeTab(nextIndex);
      linkNodes.get(nextIndex).focus();
    };
  }

  getLinkRefSetter(i) {
    return (c) => { this.linkNodes.set(i, c); };
  }

  getOnLinkFocus(i) {
    return () => { this.setState({ focussedIndex: i }); };
  }

  getOnBlur() {
    return (evt) => {
      const currentTarget = evt.currentTarget;

      /** Workaround to only fire blur when the whole target is unfocussed */
      setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
          this.setState({ focussedIndex: false });
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
    const { activeIndex, focussedIndex } = this.state;
    const { scoped } = this.props;

    return (child, i) => {
      const { tabTitle, id, title } = child.props;
      const isActive = activeIndex === i;
      const isFocussed = focussedIndex === i;

      return (
        <li
          className={cx(
            getTabsClass('__item', scoped),
            isActive && 'slds-is-active',
            isFocussed && 'slds-has-focus'
          )}
          key={id}
          role="presentation"
          title={tabTitle || title}
        >
          <a
            aria-controls={id}
            aria-selected={isActive}
            className={getTabsClass('__link', scoped)}
            id={getAriaLabel(id)}
            onFocus={this.getOnLinkFocus(i)}
            onKeyUp={this.getOnLinkKeyup()}
            /* Focus is triggered before click but after mouseDown, using mouseDown and stopping propagation */
            onMouseDown={this.getOnLinkClick(i)}
            ref={this.getLinkRefSetter(i)}
            role="tab"
            tabIndex={isActive ? 0 : -1}
          >
            {title}
          </a>
        </li>
      );
    };
  }

  getActiveTabRenderer() {
    const { renderInactiveTabs, scoped } = this.props;
    const { activeIndex } = this.state;

    return (child, i) => {
      const isActive = i === activeIndex;
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

export default Tabs;
