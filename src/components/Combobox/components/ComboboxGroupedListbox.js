import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { Listbox, Pill } from '../../Pill';
import { withThrottle } from '../utils/withThrottle';

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
    throttleFn: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isExpanded: false,
    showItemsWhenOpen: false,
  }

  constructor(props) {
    super(props);
    const { throttleFn } = this.props;

    this.state = { overflowCount: 0 };

    this.listboxRef = React.createRef();
    this.handleUpdateChildren = throttleFn(this.handleUpdateChildren.bind(this));
  }

  componentDidMount() {
    this.handleUpdateChildren();
    window.addEventListener('resize', this.handleUpdateChildren);
  }

  componentDidUpdate(prevProps) {
    const { isExpanded, selectedItems } = this.props;
    const { selectedItems: prevSelectedItems } = prevProps;

    // Opimization: DOM access is expensive here. Avoid for small collections if possible
    const isChanged = isExpanded
      || isOpenChanged(this.props, prevProps)
      || isLengthChanged(selectedItems, prevSelectedItems)
      || selectedItems.length > 100
      || selectedItems.some((x, i) => isIdChanged(x, prevSelectedItems[i]));

    if (isChanged) {
      this.handleUpdateChildren();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleUpdateChildren);
  }

  handleUpdateChildren() {
    const { overflowCount: currentOverflowCount } = this.state;

    const { isExpanded, isOpen } = this.props;
    if (isExpanded || isOpen) return;

    const { children } = this.listboxRef.current;
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
    const {
      isExpanded,
      isOpen,
      label,
      makeSelectHandler,
      onExpand,
      selectedItems,
      showItemsWhenOpen,
    } = this.props;

    const { overflowCount } = this.state;

    const sldsClasses = [
      'slds-listbox_selection-group',
      { 'slds-is-expanded': isExpanded },
      { 'slds-hide': isOpen && !showItemsWhenOpen },
    ];

    return (
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
          {selectedItems.map(({ icon, id, label: itemLabel }) => (
            <Pill
              key={id}
              icon={icon ? <Icon icon={icon.icon} sprite={icon.sprite} /> : null}
              label={itemLabel}
              title={itemLabel}
              onClose={makeSelectHandler(id)}
            />
          ))}
        </Listbox>
      </div>
    );
  }
}

export default withThrottle(ComboboxGroupedListbox);
