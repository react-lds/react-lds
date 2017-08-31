import React, { Component } from 'react';
import { Path, PathStage, Button, ButtonIcon } from 'react-lds';
import cx from 'classnames';

class ContactPath extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'floor_plan',
      current: 'floor_plan',
      leadStatusPicklist: [
        {
          active: true,
          defaultValue: false,
          label: 'Floorplan',
          validFor: null,
          value: 'floor_plan'
        }, {
          label: 'Bar',
          value: 'api_bar',
        }, {
          label: 'Baz',
          value: 'api_baz',
        }
      ],
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
        complete={leadStatusPicklist.indexOf(i) < leadStatusPicklist.indexOf(leadStatusPicklist[current])}
        current={picklistValue.value === current}
        selected={picklistValue.value === selected}
        value={picklistValue.value}
      />
    );
  }

  render() {
    const { leadStatusPicklist, selected, current } = this.state;

    const selectedIsCurrentStep = selected === current;

    const statusButtonClasses = [
      'slds-path__mark-complete',
      'slds-no-flex',
      'slds-m-horizontal_small',
    ];

    const pathButton = (
      <Button
        disabled={leadStatusPicklist.indexOf(current) > (leadStatusPicklist.length - 1)}
        brand
        icon={selectedIsCurrentStep}
        icon-inverse={selectedIsCurrentStep}
        className={cx(statusButtonClasses)}
        onClick={selectedIsCurrentStep ? this.onMarkComplete : this.onMarkCurrent}
        title={selectedIsCurrentStep ? 'Mark as complete' : 'Mark as current'}
      >
        <ButtonIcon position="left" sprite="utility" icon="check" />
        {selectedIsCurrentStep ? 'Mark as complete' : 'Mark as current'}
      </Button>
    );

    return (
      <Path button={pathButton}>
        {leadStatusPicklist.map(this.renderPathStage)}
      </Path>
    );
  }
}

const ExampleComplex = () => {
  console.log('something is happening');
  return (
    <ContactPath />
  );
};

export default ExampleComplex;
