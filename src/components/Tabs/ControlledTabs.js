import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isEqual from 'lodash-es/isEqual';
import { getAriaLabel, getTabsClass } from './utils';
import TabLink from './TabLink';

class ControlledTabs extends PureComponent {
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
     * Size modifier
     */
    size: PropTypes.oneOf(['medium', 'large']),
    /**
     * Renders Card-like variant
     */
    styled: PropTypes.bool,
  }

  static defaultProps = {
    renderInactiveTabs: false,
    scoped: false,
    size: null,
    styled: false,
  }

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
    const { positions } = this.state;

    const nextChildrenArr = React.Children.toArray(nextChildren);
    const prevChildrenArr = React.Children.toArray(this.children);

    const isEqualLength = nextChildrenArr.length !== prevChildrenArr.length;
    const nextState = ControlledTabs.getPanelState(nextChildrenArr);

    if (!isEqualLength || !isEqual(nextState.positions, positions)) {
      this.setState(nextState);
    }
  }

  onChangeTab(nextActiveTab) {
    const { activeTab, onChangeTab } = this.props;
    if (nextActiveTab !== activeTab) {
      this.setState({ focusedTab: nextActiveTab });
      onChangeTab(nextActiveTab);
    }
  }

  onBlur = ({ currentTarget }) => {
    /** Workaround to only fire blur when the whole navigation is unfocused */
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ focusedTab: false });
      }
    }, 0);
  }

  onLinkKeyUp = (evt) => {
    const { linkNodes } = this;

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
    const linkNode = linkNodes.get(nextId);
    if (linkNode && linkNode.link) { linkNode.link.focus(); }
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

  getLinkRefSetter(id) {
    return (c) => { this.linkNodes.set(id, c); };
  }

  getOnLinkFocus(id) {
    return () => { this.setState({ focusedTab: id }); };
  }

  getOnLinkClick(id) {
    return (evt) => {
      evt.stopPropagation();
      this.onChangeTab(id);
    };
  }

  renderLink = (child) => {
    const { focusedTab } = this.state;
    const { activeTab, scoped } = this.props;
    const { id, renderTitle, title } = child.props;

    const isActive = activeTab === id;
    const isFocused = focusedTab === id;

    return (
      <TabLink
        isActive={isActive}
        isFocused={isFocused}
        id={id}
        onFocus={this.getOnLinkFocus(id)}
        onKeyUp={this.onLinkKeyUp}
        /* Focus is triggered before click but after mouseDown, using mouseDown to prevent a render-cycle */
        onMouseDown={this.getOnLinkClick(id)}
        ref={this.getLinkRefSetter(id)}
        scoped={scoped}
        title={title}
      >
        {renderTitle ? renderTitle({
          id, isActive, isFocused, title
        }) : title}
      </TabLink>
    );
  }

  renderActiveTab = (child) => {
    const { activeTab, renderInactiveTabs, scoped } = this.props;
    const { id } = child.props;
    const isActive = id === activeTab;
    const hideTab = !isActive && !renderInactiveTabs;

    return React.cloneElement(child, {
      'aria-labelledby': getAriaLabel(child.props.id),
      isActive: hideTab ? null : isActive,
      scoped
    });
  }

  render() {
    const {
      children,
      scoped,
      size,
      styled,
    } = this.props;

    const sldsClasses = [
      getTabsClass('', scoped),
      { 'slds-tabs_card': styled },
      { [`slds-tabs_${size}`]: size }
    ];

    return (
      <div className={cx(sldsClasses)}>
        <ul
          className={getTabsClass('__nav', scoped)}
          onBlur={this.onBlur}
          role="tablist"
        >
          {React.Children.map(children, this.renderLink)}
        </ul>
        {React.Children.map(children, this.renderActiveTab)}
      </div>
    );
  }
}

export default ControlledTabs;
