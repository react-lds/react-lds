import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

class ExpandableSection extends React.Component {

  constructor(props) {
    super();
    this.state = {
      contentId: props.section.id,
      open: props.open
    };
  //  this.onClickToggle = this.onClickToggle.bind(this);
  }
  // props destructen .. in eine const schreiben

  onClickToggle() {
    this.setState({ open: !this.state.open });
  }

  isUncollapsable() {
    return this.props.uncollapsable ?
    (
      <span
        className="slds-truncate slds-p-horizontal_small"
        title={this.props.title}
      >
        {this.props.title}
      </span>
    )
    :
    (
      <Button
        icon
        aria-controls={this.props.section.id}
        aria-expanded={this.state.open.toString()}
        className="slds-section__title-action"
        onClick={() => this.onClickToggle()}
      >
        <ButtonIcon
          position="left"
          icon={this.state.open ? 'chevrondown' : 'chevronright'}
          sprite="utility"
          aria-hidden="true"
        />
        <span className="slds-truncate" title={this.props.title}>
          {this.props.title}
        </span>
      </Button>

    );
  }
  render() {
  //  const className = this.props;
    const sldsClasses = [
      'slds-section',
      { 'slds-is-open': !!this.state.open },
    ];

    const headerClasses = [
      'slds-section__title',
      { 'slds-theme_shade': !!this.props.uncollapsable },
    ];
    console.log((this.state.open).toString());
    return (
      <div className={cx(sldsClasses)}>
        <h3 className={cx(headerClasses)}>
          {this.isUncollapsable()}
        </h3>
        <div
          aria-hidden={(!this.state.open).toString()}
          className="slds-section__content"
          id={this.props.section.id}
        >
          {this.props.section.content}
        </div>
      </div>
    );
  }
}

ExpandableSection.defaultProps = {
  className: null,
  section: null,
  title: null,
  open: true,
  uncollapsable: false,
  onClickToggle: () => {},
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
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.node,
  }
  ).isRequired,
  /**
   * defines whether section is expandable or not
   */
  uncollapsable: PropTypes.bool,
  /**
   * defines whether section is open or closed
   */
  open: PropTypes.bool,
  /**
   * triggered when the user clicks the expand button
   */
  onClickToggle: PropTypes.func,
};
export default ExpandableSection;
