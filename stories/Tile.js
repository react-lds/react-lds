import React from 'react';
import { storiesOf } from '@storybook/react';
import { NameValueList, Tile, IconButton, Icon, Avatar, Checkbox } from '../src';

const stories = storiesOf('Tile', module);

stories
  .add('Default', () => (
    <Tile
      title={<a href="javascript:void(0)">Salesforce UX</a>}
      titleText="Salesforce UX"
    >
      <NameValueList.List>
        <NameValueList.Name>First Label:</NameValueList.Name>
        <NameValueList.Value>Description for first label</NameValueList.Value>
        <NameValueList.Name>Second Label:</NameValueList.Name>
        <NameValueList.Value>Description for second label</NameValueList.Value>
      </NameValueList.List>
    </Tile>
  ))
  .add('Default with actions', () => (
    <Tile
      action={(
        <IconButton
          border="filled"
          sprite="utility"
          icon="down"
          size="x-small"
          title="More options"
        />
      )}
      title={<a href="javascript:void(0)">Salesforce UX</a>}
      titleText="Salesforce UX"
    >
      <NameValueList.List>
        <NameValueList.Name>First Label:</NameValueList.Name>
        <NameValueList.Value>Description for first label</NameValueList.Value>
        <NameValueList.Name>Second Label:</NameValueList.Name>
        <NameValueList.Value>Description for second label</NameValueList.Value>
      </NameValueList.List>
    </Tile>
  ))
  .add('With Icon', () => (
    <Tile
      figure={(
        <Icon
          sprite="standard"
          icon="groups"
        />
      )}
      title={<a href="javascript:void(0)">Salesforce UX</a>}
      titleText="Salesforce UX"
    >
      <NameValueList.List>
        <NameValueList.Name>First Label:</NameValueList.Name>
        <NameValueList.Value>Description for first label</NameValueList.Value>
        <NameValueList.Name>Second Label:</NameValueList.Name>
        <NameValueList.Value>Description for second label</NameValueList.Value>
      </NameValueList.List>
    </Tile>
  ))
  .add('With Avatar', () => (
    <Tile
      figure={(
        <Avatar
          circle
          src="assets/images/avatar2.jpg"
          size="medium"
        />
      )}
      title={<a href="javascript:void(0)">Salesforce UX</a>}
      titleText="Salesforce UX"
    >
      <NameValueList.List>
        <NameValueList.Name>First Label:</NameValueList.Name>
        <NameValueList.Value>Description for first label</NameValueList.Value>
        <NameValueList.Name>Second Label:</NameValueList.Name>
        <NameValueList.Value>Description for second label</NameValueList.Value>
      </NameValueList.List>
    </Tile>
  ))
  .add('Task', () => (
    <Tile
      figure={(
        <Checkbox
          hideLabel
          id="task-checkbox"
          label="Did you complete the task: Contact Trammel Crow Company?"
        />
      )}
      title={<a href="javascript:void(0);">Contact Trammel Crow Company</a>}
      titleText="Contact Trammel Crow Company"
    >
      <p className="slds-truncate" title="Assignee">Assignee</p>
    </Tile>
  ))
  .add('Article', () => (
    <Tile
      title={<a href="javascript:void(0);">Company One beats Company Two to the 200-mile affordable electric car</a>}
      titleText="Company One beats Company Two to the 200-mile affordable electric car"
    >
      <p>by Steve Author</p>
      <ul className="slds-list_horizontal slds-has-dividers_right">
        <li className="slds-item">Breaking News</li>
        <li className="slds-item">1 day ago</li>
      </ul>
    </Tile>
  ));
