import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

export class ExpandableSection extends Component {
  static defaultProps = {
    className: null,
    open: null,
    uncollapsable: false,
    defaultOpen: false,
    onClick: null,
  }

  static propTypes = {
    /**
     * children
     */
    children: PropTypes.node.isRequired,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
      * section open, ignored if uncollapsable
      */
    open: PropTypes.bool,
    /**
     * section should start open
     */
    defaultOpen: PropTypes.bool,
    /**
      * uncollapsable
      */
    uncollapsable: PropTypes.bool,
    /**
      * id linking button and expandable content
      */
    id: PropTypes.string.isRequired,
    /**
      * section title
      */
    title: PropTypes.string.isRequired,
    /**
     * function if component is controlled
     */
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    const { open, defaultOpen } = this.props;
    if (open === null) {
      // its uncontrolled
      this.state = { isOpen: defaultOpen };
    }
  }

  toggleSection = () => {
    const { open, onClick } = this.props;
    if (open !== null) {
      onClick();
    } else {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  render() {
    const { className, children, id, title, uncollapsable, open, defaultOpen, ...rest } = this.props;
    const isOpen = open === null ? this.state.isOpen : null;
    // const isControlled =

    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': uncollapsable || isOpen || open },
      className,
    ];

    const headerClasses = [
      'slds-section__title',
      { 'slds-theme_shade': uncollapsable },
    ];

    return (
      <div className={cx(sldsClasses)} {...rest}>
        <h3 className={cx(headerClasses)}>
          {uncollapsable ?
            <span className="slds-truncate slds-p-horizontal_small" title={title}>
              {title}
            </span>
            :
            <Button
              aria-controls={id}
              aria-expanded={isOpen || open}
              className="slds-section__title-action"
              onClick={() => this.toggleSection()}
            >
              <ButtonIcon
                position="left"
                icon={isOpen || open ? 'chevrondown' : 'chevronright'}
                sprite="utility"
                aria-hidden="true"
              />
              <span className="slds-truncate" title={title}>
                {title}
              </span>
            </Button>
          }
        </h3>
        <div
          aria-hidden={!open}
          className="slds-section__content"
          id={id}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default ExpandableSection;
