
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class ExpandableSection extends React.Component {
  static defaultProps = {
    className: null,
    title: null,
    open: true,
    uncollapsable: false,
  };

  static propTypes = {
    /**
    * expandable section content
    */
    children: PropTypes.node,
    /**
    * class name
    */
    className: PropTypes.string,
    /**
    *  icon idk yet
    */
    icon: PropTypes.node,
    /**
    * (optional) title of section
    */

    title: PropTypes.string,
    /**
    * hides the expand-button
    */
    uncollapsable: PropTypes.bool,
    /**
     * expands the Section
     */
    open: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { open: true };
  }


  getExpandButton = () => (
    <Button
      icon
      onClick={this.toggle}
      className={this.titleAction}
      icon-inverse size="large"
    >
      <ButtonIcon sprite="action" icon="switch" size="large" />
      <span className="slds-truncate" title={this.title}> {this.title.toString} </span>
    </Button>
  );

  expand = () => this.setState({
    open: !open,
  });

  // isOpened = () => (this.open ? 'slds-is-open' : '');

  isCollapsable = () => (this.uncollapsable ?
  (
    <h3 className="slds-section--title slds-theme-shade">
      <span className="slds-truncate slds p-horizontal-small" title={this.title}> {this.title.toString} </span>
    </h3>
  ) :
  (
    <h3>
      {this.getExpandButton};
    </h3>
  ));

  render() {
    const sldsClasses = [
      'slds-section',
      this.isOpened,
    ];

    return (
      <div
        {...this.rest}
        className={cx(sldsClasses)}
      >
        {this.isCollapsable}
        <div
          aria-hidden={(!open).toString}
          className="slds-section--content"
          id="expando-unique-id"
        >
          <p>{this.children}</p>
        </div>
      </div>
    );
  }
}

ExpandableSection.defaultProps = {
  title: null,
  titleAction: null,
  className: null,
  children: null,
  icon: null,
  open: true,
  uncollapsable: undefined,
};


export default ExpandableSection;
