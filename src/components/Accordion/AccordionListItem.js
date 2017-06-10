import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const AccordionListItem = (props) => {
	const { summary, children, id, ...rest  } = props;

	const renderSummary = () => {
		return (
			  <li {...rest} className=`slds-accordion__list-item`>
			    <section className="slds-accordion__section">
			      <div className="slds-accordion__summary">
			        <h3 className="slds-text-heading_small slds-accordion__summary-heading">
			          <button aria-controls="accordion-details-01" aria-expanded="true" className="slds-button slds-button_reset slds-accordion__summary-action">
			            <svg className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
			              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
			            </svg>
			            <span className="slds-truncate" title="Accordion summary">{summary}</span>
			          </button>
			        </h3>
			        <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none" aria-haspopup="true">
			          <svg className="slds-button__icon" aria-hidden="true">
			            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
			          </svg>
			          <span className="slds-assistive-text">More Options</span>
			        </button>
			      </div>
			      <div aria-hidden="false" class="slds-accordion__content" id="accordion-details-01">Accordion details - A</div>
			    </section>
			  </li>
		);
	};

	AccordionListItem.defaultProps = {
		summary: null,
		className: null,
		summary: null,
		id: null,
		children: null,
	};

	AccordionListItem.propTypes = {
		/**
		* item summary
		*/
		summary: PropTypes.string.isRequired,
		/**
		* item id
		*/
		id: PropTypes.string.isRequired,
		/**
		* item summary
		*/
		children: PropTypes.arrayOf(PropTypes.element),
	};

}