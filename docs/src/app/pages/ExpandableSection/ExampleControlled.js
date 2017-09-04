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
          id="01"
          onToggle={this.onSectionToggle}
          open={sectionOpen}
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

export default SampleContainer;
