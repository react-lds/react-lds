import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, LookupRaw as Lookup } from '../src';

const stories = storiesOf('Lookup', module);

const exampleData = [
  {
    id: '1',
    email: 'something@example.com',
    label: 'Something',
    meta: 'Very meta',
    objectType: 'contact',
  },
  {
    id: '2',
    email: 'really@example.com',
    label: 'Really',
    objectType: 'contact',
  },
  {
    id: '3',
    email: 'notso@example.com',
    label: 'Not so',
    objectType: 'contact',
  },
  {
    id: '4',
    email: 'muchuseful@example.com',
    label: 'Much useful',
    objectType: 'contact',
  },
  {
    id: '5',
    email: 'ofanytype@example.com',
    label: 'Of any type',
    objectType: 'contact',
  },
  {
    id: '6',
    email: 'ofsometype@example.com',
    label: 'Of some type',
    objectType: 'account',
  },
  {
    id: '7',
    email: 'ofsomerecordtype@example.com',
    label: 'Of some record type',
    objectType: 'record',
  },
];

stories
  .add('Uncontrolled', () => (
    <Lookup
      error={text('Error', '') || undefined}
      hideErrorMessage={boolean('HideErrorMessage', false)}
      hideLabel={boolean('HideLabel', false)}
      id="lookup"
      initialSelection={object('InitialSelection', [{
        id: '6',
        email: 'ofsometype@example.com',
        label: 'Of some type',
        objectType: 'account',
      }])}
      inputLabel={text('InputLabel', 'Accounts')}
      listLabel={text('ListLabel', 'Recent Accounts')}
      load={() => exampleData}
      loadOnChange={boolean('Call load() onInputChange', true) || undefined}
      loadOnFocus={boolean('Call load() onInputFocus', false) || undefined}
      loadOnMount={boolean('Call load() onComponentDidMount', false) || undefined}
      multi={boolean('Multi selection mode', false)}
      objectType={text('ObjectType', '') || undefined}
      onChange={action('changed')}
      onFocus={action('focussed')}
      placeholder={text('Placeholder', 'Search Accounts')}
      required={boolean('Required', false)}
    />
  ))
  .add('Controlled', () => (
    <Lookup
      error={text('Error', '') || undefined}
      hideErrorMessage={boolean('HideErrorMessage', false)}
      hideLabel={boolean('HideLabel', false)}
      id="lookup"
      inputLabel={text('InputLabel', 'Accounts')}
      listLabel={text('ListLabel', 'Recent Accounts')}
      load={() => exampleData}
      loadOnChange={boolean('Call load() onInputChange', false)}
      loadOnFocus={boolean('Call load() onInputFocus', false)}
      loadOnMount={boolean('Call load() onComponentDidMount', false)}
      multi={boolean('Multi selection mode', true)}
      objectType={text('ObjectType', '') || undefined}
      onChange={action('changed')}
      onFocus={action('focussed')}
      placeholder={text('Placeholder', 'Search Accounts')}
      selection={object('Selection', [{
        id: '6',
        email: 'ofsometype@example.com',
        label: 'Of some type',
        objectType: 'account',
      }, {
        id: '7',
        email: 'ofsomerecordtype@example.com',
        label: 'Of some record type',
        objectType: 'record',
      }])}
      required={boolean('Required', false)}
    />
  ))
  .add('With custom ', () => (
    <Lookup
      error={text('Error', '') || undefined}
      hideErrorMessage={boolean('HideErrorMessage', false)}
      hideLabel={boolean('HideLabel', false)}
      id="lookup"
      initialSelection={object('InitialSelection', [
        {
          id: '4',
          email: 'muchuseful@example.com',
          label: 'Much useful',
          objectType: 'contact',
        },
        {
          id: '5',
          email: 'ofanytype@example.com',
          label: 'Of any type',
          objectType: 'contact',
        },
        {
          id: '6',
          email: 'ofsometype@example.com',
          label: 'Of some type',
          objectType: 'account',
        },
        {
          id: '7',
          email: 'ofsomerecordtype@example.com',
          label: 'Of some record type',
          objectType: 'record',
        }
      ])}
      inputLabel={text('InputLabel', 'Accounts')}
      listLabel={text('ListLabel', 'Recent Accounts')}
      load={() => exampleData}
      loadOnChange={boolean('Call load() onInputChange', true) || undefined}
      loadOnFocus={boolean('Call load() onInputFocus', false) || undefined}
      loadOnMount={boolean('Call load() onComponentDidMount', false) || undefined}
      multi={boolean('Multi selection mode', true)}
      objectType={text('ObjectType', '') || undefined}
      onChange={action('changed')}
      onFocus={action('focussed')}
      placeholder={text('Placeholder', 'Search Accounts')}
      required={boolean('Required', false)}
      renderSelection={(item, { onClose }) => {
        let f;
        switch (item.objectType) {
          case 'record':
            f = 'destructive';
            break;
          case 'account':
            f = 'brand';
            break;
          default:
            f = null;
            break;
        }
        return (
          <Button
            key={item.id}
            onClick={onClose}
            title={item.label}
            tooltip="Click to deselect"
            flavor={f}
          />
        );
      }}
    />
  ));
