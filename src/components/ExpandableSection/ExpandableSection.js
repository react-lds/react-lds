import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

export class ExpandableSection extends Component {
  static defaultProps = {
    className: null,
    open: false,
    uncollapsable: false,
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
  }

  constructor(props) {
    super(props);
    const { open, uncollapsable } = this.props;
    this.state = uncollapsable ? { open: true } : { open };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = nextProps;
    this.state = { open };
  }

  toggleSection = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { className, children, id, title, uncollapsable, ...rest } = this.props;
    const { open } = this.state;

    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': uncollapsable || open },
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
              aria-expanded={open}
              className="slds-section__title-action"
              onClick={() => this.toggleSection()}
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
