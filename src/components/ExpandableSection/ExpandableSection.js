import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class ExpandableSection extends Component {
  constructor(props) {
    super(props);

    const { open, collapsable } = props;

    if (!open && !collapsable) {
      // eslint-disable-next-line
      console.warn(
        '[react-lds] ExpandableSection:',
        'When collapsable is false, open cannot be false.',
      );
    }

    this.state = {
      open,
    };
  }

  onClickToggle = () => {
    this.setState(state => ({ open: !state.open }));
  }

  renderUncollapsable() {
    const { title } = this.props;

    return (
      <span className="slds-truncate slds-p-horizontal_small" title={title}>
        {title}
      </span>
    );
  }

  renderCollapsable() {
    const { id, title } = this.props;
    const { open } = this.state;

    return (
      <Button
        aria-controls={id}
        aria-expanded={open.toString()}
        className="slds-section__title-action"
        onClick={this.onClickToggle}
      >
        <ButtonIcon
          position="left"
          icon={open ? 'chevrondown' : 'chevronright'}
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
    const { open } = this.state;

    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': open },
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
        <div aria-hidden={(!open).toString()} className="slds-section__content" id={id}>
          {children}
        </div>
      </div>
    );
  }
}

ExpandableSection.defaultProps = {
  className: null,
  title: null,
  open: true,
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
  title: PropTypes.string,
  /**
   * id is required (to link content to button), content can be empty
   */
  id: PropTypes.string.isRequired,
  /**
   * defines whether section is expandable or not
   */
  collapsable: PropTypes.bool,
  /**
   * defines whether section is open or closed
   */
  open: PropTypes.bool,
  /**
   * triggered when the user clicks the expand button
   */
  onClickToggle: PropTypes.func,
  /**
   * content to be displayed
   */
  children: PropTypes.node,
};

export default ExpandableSection;
