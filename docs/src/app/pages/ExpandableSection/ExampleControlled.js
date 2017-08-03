import React, { Component } from 'react';

import { ExpandableSection } from 'react-lds';

class SampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOpen: true,
    };
  }

  onSectionToggle = () => {
    this.setState(prevState => ({ sectionOpen: !prevState.sectionOpen }));
  }

  render() {
    const { sectionOpen } = this.state;
    return (
      <div>
        <ExpandableSection
          open={sectionOpen}
          onClick={this.onSectionToggle}
          id="01"
          title="This is the title"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </ExpandableSection>
      </div>
    );
  }
}

const ExampleControlled = () => (
  <SampleContainer />
);

export default ExampleControlled;
