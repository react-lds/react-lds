import React, { Component } from 'react';
import {
  VerticalNavigation,
  VerticalNavigationSection,
  VerticalNavigationItem,
  VerticalNavigationOverflow,
 } from 'react-lds';

class ExampleOverflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overFlowOpen: false,
    };
  }

  onOverflowToggle = (nextState) => {
    this.setState({ overFlowOpen: nextState });
  }

  render() {
    const { overFlowOpen } = this.state;

    return (
      <VerticalNavigation compact>
        <VerticalNavigationSection title="Reports" id="entity-header">
          <VerticalNavigationItem href="#" isActive>Recent</VerticalNavigationItem>
          <VerticalNavigationItem href="#">Created By Me</VerticalNavigationItem>
          <VerticalNavigationItem href="#">Private Reports</VerticalNavigationItem>
          <VerticalNavigationItem href="#">All Reports</VerticalNavigationItem>
        </VerticalNavigationSection>
        <VerticalNavigationOverflow
          id="search-results"
          isOpen={overFlowOpen}
          label="Reports"
          onToggle={this.onOverflowToggle}
        >
          <VerticalNavigationItem href="#">Overflow Item One</VerticalNavigationItem>
          <VerticalNavigationItem href="#">Overflow Item Two</VerticalNavigationItem>
          <VerticalNavigationItem href="#">Overflow Item Three</VerticalNavigationItem>
        </VerticalNavigationOverflow>
      </VerticalNavigation>
    );
  }
}


export default ExampleOverflow;
