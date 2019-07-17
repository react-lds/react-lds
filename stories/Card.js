import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import {
  Button,
  Card,
  CardHeader,
  Icon,
  CardFooter,
  Spinner,
} from '../src';

const stories = storiesOf('Card', module);

const baseInfo = {
  propTables: [CardHeader, CardFooter],
};

stories
  .add('Header Only', () => (
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
  ), { info: baseInfo })
  .add('With Action', () => (
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
  ), { info: baseInfo })
  .add('Without Icon', () => (
    <Card
      renderHeader={() => (
        <CardHeader
          title="Accounts"
          titleProps={{ href: '#' }}
        />
      )}
    >
      Body would be here
    </Card>
  ), { info: baseInfo })
  .add('With Body', () => (
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
        />
      )}
    >
      Card Body
    </Card>
  ), { info: baseInfo })
  .add('Without header', () => (
    <Card renderFooter={() => <CardFooter linkText="View All" />}>
      Card Body
    </Card>
  ), { info: baseInfo })
  .add('Without Body Padding', () => (
    <Card
      isPadded={false}
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
        />
      )}
    >
      Card Body
    </Card>
  ), { info: baseInfo })
  .add('With Footer', () => (
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
      renderFooter={() => <CardFooter linkText="View All" />}
    >
      Body would be here
    </Card>
  ), { info: baseInfo })
  .add('In Loading State', () => (
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
    >
      <Spinner size="small" />
    </Card>
  ), { info: baseInfo })
  .add('Nested Cards', () => (
    <Card
      isBoundary
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
      renderFooter={() => (
        <CardFooter
          linkText="View All"
        />
      )}
    >
      <Card
        isBoundary={boolean('Nested Card Styling', false)}
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
        renderFooter={() => <CardFooter linkText="View All" />}
      >
        Body would be here
      </Card>
    </Card>
  ))
  .add('Wrapped Cards', () => (
    <div className="slds-card-wrapper">
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
        renderFooter={() => (
          <CardFooter
            linkText="View All"
          />
        )}
      >
        Body would be here
      </Card>
      <Card
        isBoundary
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
        renderFooter={() => (
          <CardFooter
            linkText="View All"
          />
        )}
      >
        Body would be here
      </Card>
    </div>
  ), { info: baseInfo })
  .add('Legacy: Deprecated usage', () => (
    <Card
      body="Body would be here"
      icon={<Icon sprite="standard" icon="contact" />}
      title={text('Title', 'Base Card')}
      headerRight={<Button title="New" onClick={action('click')}>New</Button>}
      footer={(<a className="slds-card__footer-action">View All</a>)}
    />
  ), { info: baseInfo });
