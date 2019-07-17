import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import {
  Button,
  Card,
  CardHeader,
  Icon,
} from '../src';

const stories = storiesOf('Card', module);

stories
  .add('Only Header', () => (
    <Card
      renderHeader={() => (
        <CardHeader
          title="Accounts"
          titleProps={{ href: '#' }}
          icon={(
            <Icon
              sprite="standard"
              icon="account"
              size="small"
            />
          )}
        />
      )}
    />
  ))
  .add('Header with action', () => (
    <Card
      renderHeader={() => (
        <CardHeader
          title="Accounts"
          icon={(
            <Icon
              sprite="standard"
              icon="account"
              size="small"
            />
          )}
        >
          <Button title="New" />
        </CardHeader>
      )}
    />
  ))
  .add('Without Icon', () => (
    <Card
      title={text('Title', 'Base Card')}
      headerRight={<Button title="New" onClick={action('click')}>New</Button>}
      footer="Footer"
    >
      Body would be here
    </Card>
  ))
  .add('Legacy: Deprecated usage', () => (
    <Card
      body="Body would be here"
      icon={<Icon sprite="standard" icon="contact" />}
      title={text('Title', 'Base Card')}
      headerRight={<Button title="New" onClick={action('click')}>New</Button>}
      footer={(<a className="slds-card__footer-action">View All</a>)}
    />
  ));
