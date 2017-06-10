import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import omit from 'lodash.omit';

import { AccordionListItem } from '../../';

class Accordion extends React.Component {

  static defaultProps = { variation: 'default' };

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
      children: PropTypes.arrayOf(PropTypes.element),
    })).isRequired,
    /**
    * styled has a card wrapped around it
    */
    variation: PropTypes.oneOf(['default', 'styled']),
  };


//  DO I NEED THIS OR IS IT LEGACY? By default first section is open, should it be like that?
  constructor(props, context) {
    super(props, context);
    this.state = { activeSection: this.props.sections[0].id };
  }

  setActiveSection(id) {
    this.setState({ activeSection: id });
  }

  renderSections() {
    return this.props.sections.map(item =>
       (<AccordionListItem summary={item.summary} id={item.id}>
         {item.children}
       </AccordionListItem>)
    );
  }

  render() {
    const rest = omit(this.props, Object.keys(Accordion.propTypes));

    return (
      <ul {...rest} className="slds-accordion">
        {this.renderSections()}
      </ul>
    );
  }

}

export default Accordion;
