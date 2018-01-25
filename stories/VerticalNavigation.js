import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean, number, object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  Input,
  VerticalNavigation,
  VerticalNavigationItem,
  VerticalNavigationOverflow,
  VerticalNavigationSection
} from '../src';
import { VerticalNavigationDecorator } from './utils/decorators';

const stories = storiesOf('VerticalNavigation', module);
const fileIcon = { icon: 'open_folder', sprite: 'utility', title: 'Folder' };

const searchInput = (
  <Input
    hideLabel
    id="search"
    label="search"
    placeholder="Quick Search"
    type="text"
  />
);

stories
  .addDecorator(VerticalNavigationDecorator)
  .add('Default', () => (
    <VerticalNavigation
      flavor={array('Flavor', ['shade', 'compact'])}
      prependElement={searchInput}
    >
      <VerticalNavigationSection title={text('Title section 1', 'Reports')} id="entity-header">
        <VerticalNavigationItem
          href="#"
          isActive={boolean('Section 1 Item 1 isActive', true)}
          notification={text('Notification section 1 item 1', 'None')}
          notificationLabel={text('NotificationLabel section 1 item 1', '')}
        >Recent</VerticalNavigationItem>
        <VerticalNavigationItem
          href="#"
          isActive={boolean('Section 1 Item 2 isActive', false)}
          notification={number('Notification section 1 item 2', 3)}
          notificationLabel={text('NotificationLabel section 1 item 2', 'new items')}
        >Created By Me</VerticalNavigationItem>
      </VerticalNavigationSection>
      <VerticalNavigationSection title={text('Title section 2', 'Folders')} id="folder-header">
        <VerticalNavigationItem
          icon={object('Icon 1', fileIcon)}
          onClick={action('clicked file 1')}
          isActive={boolean('Section 2 Item 1 isActive', false)}
        >
          Created By Me
        </VerticalNavigationItem>
        <VerticalNavigationItem
          icon={object('Icon 2', fileIcon)}
          onClick={action('clicked file 2')}
          isActive={boolean('Section 2 Item 2 isActive', false)}
          notification={number('Notification section 1 item 2', 3)}
          notificationLabel={text('NotificationLabel section 1 item 2', 'new items')}
        >
          Shared with me
        </VerticalNavigationItem>
      </VerticalNavigationSection>
    </VerticalNavigation>
  ))
  .add('Overflow', () => (
    <VerticalNavigation
      flavor={array('Flavor', ['shade', 'compact'])}
      prependElement={searchInput}
    >
      <VerticalNavigationSection title={text('Title section 1', 'Reports')} id="entity-header">
        <VerticalNavigationItem
          href="#"
          isActive={boolean('Section 1 Item 1 isActive', true)}
        >Recent</VerticalNavigationItem>
      </VerticalNavigationSection>
      <VerticalNavigationOverflow
        id="search-results"
        isOpen={boolean('Overflow isOpen', false)}
        label={text('Overflow label', 'Reports')}
        title={text('Overflow title', 'Reports')}
        onToggle={action()}
      >
        <VerticalNavigationItem href="#">Overflow Item One</VerticalNavigationItem>
        <VerticalNavigationItem href="#">Overflow Item Two</VerticalNavigationItem>
        <VerticalNavigationItem href="#">Overflow Item Three</VerticalNavigationItem>
      </VerticalNavigationOverflow>
    </VerticalNavigation>
  ));
