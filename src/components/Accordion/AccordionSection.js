import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, IconButton } from '../Button';

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
          <h3 className="slds-accordion__summary-heading">
            <Button
              sprite="utility"
              icon={isOpen ? 'chevrondown' : 'chevronright'}
              className="slds-button_reset slds-accordion__summary-action"
              flavor={null}
              aria-controls={`accordion-details-${id}`}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="slds-truncate" title={summary}>{summary}</span>
            </Button>
          </h3>
          <IconButton
            sprite="utility"
            icon="down"
            aria-haspopup="true"
            border="filled"
            className="slds-shrink-none"
            onClick={summaryOnClick}
            size="x-small"
            title="More Options"
          />
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
