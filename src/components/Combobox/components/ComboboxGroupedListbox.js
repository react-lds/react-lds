/* eslint-disable react/no-multi-comp */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { Listbox, Pill } from '../../Pill';
import { withThrottle } from '../utils/withThrottle';

class RawResizeListener extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    throttleFn: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { callback, throttleFn } = this.props;
    this.cb = throttleFn(callback);
  }

  componentDidMount() {
    window.addEventListener('resize', this.cb);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.cb);
  }

  render() {
    return null;
  }
}

const ResizeListener = withThrottle(RawResizeListener);

class OverflowContainer extends Component {
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

const isPropChanged = prop => (a, b) => a[prop] !== b[prop];
const isLengthChanged = isPropChanged('length');
const isIdChanged = isPropChanged('id');
const isOpenChanged = isPropChanged('isOpen');

class ComboboxGroupedListbox extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    makeSelectHandler: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    showItemsWhenOpen: PropTypes.bool,
  }

  static defaultProps = {
    isExpanded: false,
    showItemsWhenOpen: false,
  }

  constructor(props) {
    super(props);
    this.state = { forcedUpdateTimestamp: null };
    this.listboxRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { selectedItems, isExpanded } = this.props;
    const { selectedItems: prevSelectedItems } = prevProps;

    // Opimization: DOM access is expensive here. Avoid for small collections if possible
    if (isExpanded) return;

    const isChanged = isOpenChanged(this.props, prevProps)
      || isLengthChanged(selectedItems, prevSelectedItems)
      || selectedItems.length > 100
      || selectedItems.some((x, i) => isIdChanged(x, prevSelectedItems[i]));

    if (isChanged) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ forcedUpdateTimestamp: Date.now() });
    }
  }

  render() {
    const {
      hideWhenEmpty,
      isExpanded,
      isOpen,
      label,
      makeSelectHandler,
      onExpand,
      renderPill,
      selectedItems,
      showItemsWhenOpen,
    } = this.props;

    const { forcedUpdateTimestamp } = this.state;

    const sldsClasses = [
      'slds-listbox_selection-group',
      { 'slds-is-expanded': isExpanded },
      { 'slds-hide': (hideWhenEmpty && selectedItems.length === 0) || (isOpen && !showItemsWhenOpen) },
    ];

    return (
      <OverflowContainer
        containerRef={this.listboxRef}
        forcedUpdateTimestamp={forcedUpdateTimestamp}
        skipCalculation={isExpanded || isOpen}
      >
        {({ overflowCount }) => (
          <div className={cx(sldsClasses)}>
            {!isExpanded && overflowCount > 0 && (
              <span className="slds-listbox-toggle" aria-hidden="true">
                <Button
                  tabIndex="-1"
                  flavor="none"
                  onClick={onExpand}
                  title={`+${overflowCount} more`}
                />
              </span>
            )}
            <Listbox label={label} ref={this.listboxRef}>
              {selectedItems.map(({
                icon,
                id,
                label: itemLabel,
                ...rest
              }) => {
                const pillProps = {
                  ...rest,
                  key: id,
                  icon: icon ? <Icon icon={icon.icon} sprite={icon.sprite} /> : null,
                  label: itemLabel,
                  title: itemLabel,
                  onClose: makeSelectHandler(id),
                };

                return renderPill ? renderPill(pillProps) : <Pill {...pillProps} />;
              })}
            </Listbox>
          </div>
        )}
      </OverflowContainer>

    );
  }
}

export default ComboboxGroupedListbox;
