import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class ExpandableSection extends Component {
  constructor(props) {
    super(props);
    const { open, collapsable } = props;

    if (props.defaultOpen != null) {
      if (!collapsable) this.state = { open: true };
      const defaultOpen = this.props.defaultOpen;
      this.state = { open: defaultOpen };
    }

    if (props.defaultOpen == null) {
      if (open != null) {
        if (open === false && !collapsable) {
          // eslint-disable-next-line
          console.warn(
            '[react-lds] ExpandableSection:',
            'When collapsable is false, open cannot be false.',
          );
        }
        this.state = { open };
      } else {
        // eslint-disable-next-line
        console.warn(
          '[react-lds] ExpandableSection:',
          'Either defaultOpen or open need to be != null.',
        );
      }
    }
  }

  onClickToggle = (nextOpenState) => {
    this.setState(() => ({ open: nextOpenState }));
  };

  renderUncollapsable() {
    const { title } = this.props;

    return (
      <span className="slds-truncate slds-p-horizontal_small" title={title}>
        {title}
      </span>
    );
  }

  renderCollapsable() {
    const { id, title, open, defaultOpen } = this.props;
    return (
      <Button
        aria-controls={id}
        aria-expanded={this.state.open}
        className="slds-section__title-action"
        onClick={defaultOpen ? (() => this.onClickToggle(!this.state.open)) : (() => this.onClickToggle(open))}
      >
        <ButtonIcon
          position="left"
          icon={this.state.open ? 'chevrondown' : 'chevronright'}
          sprite="utility"
          aria-hidden="true"
        />
        <span className="slds-truncate" title={title}>
          {title}
        </span>
      </Button>
    );
  }

  render() {
    const { children, className, id, collapsable } = this.props;
    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': this.state.open },
      className,
    ];

    const headerClasses = [
      'slds-section__title',
      { 'slds-theme_shade': !collapsable },
    ];
    return (
      <div className={cx(sldsClasses)}>
        <h3 className={cx(headerClasses)}>
          {collapsable
            ? this.renderCollapsable()
            : this.renderUncollapsable()}
        </h3>
        <div aria-hidden={!this.state.open} className="slds-section__content" id={id}>
          {children}
        </div>
      </div>
    );
  }
}

ExpandableSection.defaultProps = {
  className: null,
  open: null,
  defaultOpen: null,
  collapsable: true,
  onClickToggle: () => {},
  children: null,
};

ExpandableSection.propTypes = {
  /**
   * (optional) class name
   */
  className: PropTypes.string,
  /**
   * (optional) title
   */
  title: PropTypes.string.isRequired,
  /**
   * id is used to link content to button
   */
  id: PropTypes.string.isRequired,
  /**
   * defines whether section is expandable or not
   */
  collapsable: PropTypes.bool,
  /**
   * defines whether section is open or closed (used when in controlled mode)
   */
  open: PropTypes.bool,
  /**
   * defines whether component should be used as controlled or uncontrolled component
  */
  defaultOpen: PropTypes.bool,
  /**
   * triggered when the user clicks the expand button
   */
  onClickToggle: PropTypes.func,
  /**
   * content to be displayed
   */
  children: PropTypes.node.isRequired,
};

export default ExpandableSection;
