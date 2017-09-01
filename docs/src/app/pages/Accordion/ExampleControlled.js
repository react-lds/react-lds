import React, { Component } from 'react';
import { Accordion, AccordionSection } from 'react-lds';

class AccordionWrapper extends Component {
  constructor() {
    super();
    this.state = { openSection: 'section1' };
  }

  sectionClickHandler = (id) => {
    this.setState({ openSection: id });
  }

  render() {
    const { openSection } = this.state;
    return (
      <Accordion
        open={openSection}
        onSectionClick={this.sectionClickHandler}
      >
        <AccordionSection
          summary="summary for 1st section"
          id="section1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );
  }
}

const ExampleControlled = () => (
  <AccordionWrapper />
);

export default ExampleControlled;
