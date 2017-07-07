import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class ExpandableSection extends Component {
  constructor(props) {
    super(props);
    const { uncollapsable, defaultOpen, open } = props;
    if (defaultOpen && open) {
      // eslint-disable-next-line
      console.warn(
        '[react-lds] ExpandableSection:',
        'You are supplying both `defaultOpen` & `open`, ignoring `defaultOpen`',
        'The component will work as a controlled component'
      );
    }
    if (defaultOpen !== null && open === null) {
      if (uncollapsable) {
        this.state = { open: true };
      }
      this.state = { open: defaultOpen };
    }

    if (defaultOpen === null) {
      if (open !== null) {
        if (open === false && uncollapsable) {
          // eslint-disable-next-line
          console.warn(
            '[react-lds] ExpandableSection:',
            'When uncollapsable is true, open cannot be false.',
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

  componentWillReceiveProps(nextProps) {
    const { open: nextOpen } = nextProps;
    const { defaultOpen: prevDefaultOpen } = this.props;

    if (prevDefaultOpen === null) {
      this.setState({ open: nextOpen });
    }
  }

  onChange = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  onClickToggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
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
    const { id, title, open } = this.props;
    return (
      <Button
        aria-controls={id}
        aria-expanded={this.state.open}
        className="slds-section__title-action"
        onClick={(open !== null) ? (() => this.onClickToggle(open)) : (() => this.onClickToggle(!this.state.open))}
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
    const { children, className, id, uncollapsable } = this.props;
    const { open } = this.state;
    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': open },
      className,
    ];
    const headerClasses = [
      'slds-section__title',
      { 'slds-theme_shade': uncollapsable },
    ];

    return (
      <div className={cx(sldsClasses)}>
        <h3 className={cx(headerClasses)}>
          {!uncollapsable
            ? this.renderCollapsable()
            : this.renderUncollapsable()}
        </h3>
        <div aria-hidden={!open} className="slds-section__content" id={id}>
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
  uncollapsable: false,
  onClickToggle: () => {},
  onChange: () => {},
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
  uncollapsable: PropTypes.bool,
  /**
   * defines whether section is open or closed (used when in controlled mode)
   */
  open: PropTypes.bool,
  /**
   * defines whether component should be used as controlled or uncontrolled component
  */
  defaultOpen: PropTypes.bool,
  /**
   * used in controlled mode to react to changes in upper-level component
   */
  onChange: PropTypes.func,
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
