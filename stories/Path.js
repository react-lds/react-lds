import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import cx from 'classnames';
import { Button, ButtonIcon, Path, PathStage } from '../src';

const stories = storiesOf('Path', module);

const statusButtonClasses = [
  'slds-path__mark-complete',
  'slds-no-flex',
  'slds-m-horizontal_small',
];

const statusButton = (
  <Button
    flavor="brand"
    className={cx(statusButtonClasses)}
    onClick={() => {}}
    sprite="utility"
    icon="check"
  >
    Mark as complete
  </Button>
);

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

  onStageClickControl = (stageValue) => {
    this.setState({ selected: stageValue });
  }

  onMarkComplete = () => {
    const { leadStatusPicklist, current } = this.state;
    this.setState({
      current: leadStatusPicklist[leadStatusPicklist.findIndex(o => o.value === current) + 1].value,
      selected: leadStatusPicklist[leadStatusPicklist.findIndex(o => o.value === current) + 1].value
    });
  }

  onMarkCurrent = () => {
    const { selected } = this.state;
    this.setState({ current: selected });
  }

  renderPathStage = (picklistValue, i) => {
    const { leadStatusPicklist, selected, current } = this.state;
    return (
      <PathStage
        complete={i < leadStatusPicklist.findIndex(o => o.value === current)}
        current={picklistValue.value === current}
        key={leadStatusPicklist[i].value}
        label={picklistValue.label}
        onStageClick={() => this.onStageClickControl(picklistValue.value)}
        selected={picklistValue.value === selected}
        value={picklistValue.value}
      />
    );
  }

  render() {
    const { leadStatusPicklist, selected, current } = this.state;

    const selectedIsCurrentStep = selected === current;

    const buttonDisabled = (leadStatusPicklist.findIndex(o => o.value === current) >= (leadStatusPicklist.length - 1))
      && (selected === current);

    const pathButton = (
      <Button
        disabled={buttonDisabled}
        flavor="brand"
        className={cx(statusButtonClasses)}
        onClick={selectedIsCurrentStep ? this.onMarkComplete : this.onMarkCurrent}
      >
        {selectedIsCurrentStep && <ButtonIcon position="left" sprite="utility" icon="check" />}
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

stories
  .add('Default', () => (
    <Path button={statusButton}>
      <PathStage
        assistiveText={text('AssistiveText 1', '') || undefined}
        label={text('Label 1', 'Label 1')}
        onStageClick={action('Stage 1 click')}
        complete={boolean('Complete 1', true) || undefined}
        current={boolean('Current 1', false) || undefined}
        selected={boolean('Selected 1', false) || undefined}
        value="this_here"
      />
      <PathStage
        assistiveText={text('AssistiveText 2', '') || undefined}
        label={text('Label 2', 'Label 2')}
        onStageClick={action('Stage 2 click')}
        complete={boolean('Complete 2', false) || undefined}
        current={boolean('Current 2', true) || undefined}
        selected={boolean('Selected 2', false) || undefined}
        value="this_too"
      />
      <PathStage
        assistiveText={text('AssistiveText 3', '') || undefined}
        label={text('Label 3', 'Label 3')}
        onStageClick={action('Stage 3 click')}
        complete={boolean('Complete 3', false) || undefined}
        current={boolean('Current 3', false) || undefined}
        selected={boolean('Selected 3', false) || undefined}
        value="this_as_well"
      />
    </Path>
  ))
  .add('Working controlled', () => (
    <ContactPath />
  ));
