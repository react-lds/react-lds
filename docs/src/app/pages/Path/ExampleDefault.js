import React, { Component } from 'react';
import { Path, PathStage, Button, ButtonIcon } from 'react-lds';

class ContactPath extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'api_bar',
      current: 'api_baz',
      leadStatusPicklist: [{
        label: 'Foo',
        value: 'api_foo',
      }, {
        label: 'Bar',
        value: 'api_bar',
      }, {
        label: 'Baz',
        value: 'api_baz',
      }]
    };
  }

  onStageClick = (stage) => {
    this.setState({ selected: stage.value });
  }

  onMarkComplete = () => {
    const { leadStatusPicklist, current } = this.state;
    this.setState({ current: leadStatusPicklist[leadStatusPicklist.indexOf(current) + 1] });
  }

  onMarkCurrent = () => {
    const { selected } = this.state;
    this.setState({ current: selected });
  }

  renderPathStage = (picklistValue, i) => {
    const { leadStatusPicklist, selected, current } = this.state;

    return (
      <PathStage
        label={picklistValue.label}
        onStageClick={this.onStageClick}
        isComplete={leadStatusPicklist.indexOf(i) < leadStatusPicklist.indexOf(leadStatusPicklist[current])}
        isCurrent={picklistValue.value === current}
        isSelected={picklistValue.value === selected}
        value={picklistValue.value}
      />
    );
  }

  render() {
    const { leadStatusPicklist, selected, current } = this.state;

    const selectedIsCurrentStep = selected === current;

    const pathButton = (
      <Button
        disabled={leadStatusPicklist.indexOf(current) > (leadStatusPicklist.length - 1)}
        onClick={selectedIsCurrentStep ? this.onMarkComplete : this.onMarkCurrent}
        title={selectedIsCurrentStep ? 'Mark as complete' : 'Mark as current'}
      >
        {selectedIsCurrentStep && <ButtonIcon />}
      </Button>
    );

    return (
      <Path button={pathButton}>
        {leadStatusPicklist.map(this.renderPathStage)}
      </Path>
    );
  }
}

const ExampleDefault = () =>
  <ContactPath />;

export default ExampleDefault;
