import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { Listbox, Pill } from '../../Pill';
import { OverflowContainer } from './OverflowContainer';

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
    overflowLabel: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    selectedItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    showItemsWhenOpen: PropTypes.bool,
  }

  static defaultProps = {
    isExpanded: false,
    overflowLabel: cnt => `+${cnt} more`,
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

    if (isExpanded) return;

    if (isOpenChanged(this.props, prevProps) || isLengthChanged(selectedItems, prevSelectedItems)) {
      this.forceRecalculation();
      return;
    }

    // Optimization: Lists longer than 30 items will have an overflow present
    // We can skip a detailed check and assume that only a length change should trigger a recalculation
    if (selectedItems.length < 30 && selectedItems.some((item, i) => isIdChanged(item, prevSelectedItems[i]))) {
      this.forceRecalculation();
    }
  }

  forceRecalculation() {
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({ forcedUpdateTimestamp: Date.now() });
  }

  render() {
    const {
      hideWhenEmpty,
      isExpanded,
      isOpen,
      label,
      makeSelectHandler,
      onExpand,
      overflowLabel,
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
    const makeExpandButtonTitle = typeof overflowLabel === 'function'
      ? overflowLabel
      : () => overflowLabel;

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
                  title={makeExpandButtonTitle(overflowCount)}
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
