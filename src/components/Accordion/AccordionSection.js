import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

const AccordionSection = (props) => {
  const { children, className, id, isOpen, summary, summaryOnClick, ...rest } = props;
  const liClasses = [
    'slds-accordion__list-item',
    className,
  ];
  const sectionClasses = [
    'slds-accordion__section',
    { 'slds-is-open': isOpen },
  ];

  return (
    <li
      {...rest}
      className={cx(liClasses)}
      key={id}
    >
      <section
        className={cx(sectionClasses)}
        id={id}
      >
        <div className="slds-accordion__summary">
          <h3 className="slds-text-heading_small slds-accordion__summary-heading">
            <Button
              aria-controls={`accordion-details-${id}`}
              aria-expanded={isOpen ? 'true' : 'false'}
              className="slds-accordion__summary-action"
              onClick={() => {}}
              reset
            >
              <ButtonIcon
                position="left"
                sprite="utility"
                icon={isOpen ? 'chevrondown' : 'chevronright'}
              />
              <span className="slds-truncate" title={summary}>{summary}</span>
            </Button>
          </h3>
          <Button
            aria-haspopup="true"
            className="slds-shrink-none"
            icon
            icon-border-filled
            icon-x-small
            onClick={summaryOnClick}
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
          aria-hidden={isOpen ? 'false' : 'true'}
          className="slds-accordion__content"
          id={id}
        >
          {children}
        </div>
      </section>
    </li>
  );
};

AccordionSection.defaultProps = {
  className: null,
  isOpen: false,
  summaryOnClick: () => {},
};

AccordionSection.propTypes = {
  /**
   * section content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * section id
   */
  id: PropTypes.string.isRequired,
  /**
   * section is open
   */
  isOpen: PropTypes.bool,
  /**
   * section summary
   */
  summary: PropTypes.string.isRequired,
  /**
   * function for the button on the right of summary
   */
  summaryOnClick: PropTypes.func,
};

export default AccordionSection;
