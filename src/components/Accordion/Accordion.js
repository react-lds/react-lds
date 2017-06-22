import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

import { Button, ButtonIcon } from 'react-lds';

export default class Accordion extends React.Component {
  static defaultProps = {
    className: null,
    defaultOpen: false,
    styled: false,
  }

  static propTypes = {
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * array of sections
     */
    sections: PropTypes.arrayOf(PropTypes.shape({
      summary: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      // onClick: PropTypes.func,
    })).isRequired,
    /**
      * which section should be open by default, defaults to first
      */
    defaultOpen: PropTypes.string,
    /**
      * wraps the component in a card
      */
    styled: PropTypes.bool,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { activeSection: this.props.defaultOpen ? this.props.defaultOpen : this.props.sections[0].id };
  }

  setActiveSection(id) {
    this.setState({ activeSection: id });
  }

  renderSections() {
    const { sections } = this.props;
    const { activeSection } = this.state;

    return sections.map((section) => {
      const sectionClasses = [
        'slds-accordion__section',
        { 'slds-is-open': activeSection === section.id },
      ];

      const boundClick = this.setActiveSection.bind(this, section.id);

      return (
        <li
          className="slds-accordion__list-item"
          key={`${section.id}`}
        >
          <section
            className={cx(sectionClasses)}
            id={section.id}
          >
            <div
              className="slds-accordion__summary"
            >
              <h3
                className="slds-text-heading_small slds-accordion__summary-heading"
                onClick={boundClick}
              >
                <Button
                  aria-controls={`accordion-details-${section.id}`}
                  aria-expanded={activeSection === section.id ? 'true' : 'false'}
                  className="slds-accordion__summary-action"
                  onClick={boundClick}
                  reset
                >
                  <ButtonIcon
                    position="left"
                    sprite="utility"
                    icon={activeSection === section.id ? 'chevrondown' : 'chevronright'}
                  />
                  <span className="slds-truncate" title={section.summary}>{section.summary}</span>
                </Button>
              </h3>
              <Button
                aria-haspopup="true"
                className="slds-shrink-none"
                icon
                icon-border-filled
                icon-x-small
              >
                <ButtonIcon
                  sprite="utility"
                  icon="down"
                  size="x-small"
                />
                <span className="slds-assistive-text">More Options</span>
              </Button>
            </div>
            <div
              aria-hidden={activeSection === section.id ? 'false' : 'true'}
              className="slds-accordion__content" id={section.id}
            >
              {section.content}
            </div>
          </section>
        </li>
      );
    });
  }

  renderWrapper() {
    const { className } = this.props;
    const rest = omit(this.props, Object.keys(Accordion.propTypes));

    const sldsClasses = [
      'slds-accordion',
      className
    ];

    return (
      <ul {...rest} className={cx(sldsClasses)}>
        {this.renderSections()}
      </ul>
    );
  }

  render() {
    const { styled } = this.props;

    if (styled) {
      return (
        <div className="slds-card">
          {this.renderWrapper()}
        </div>
      );
    }

    return this.renderWrapper();
  }

}
