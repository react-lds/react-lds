import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GlobalHeaderContainer,
  GlobalHeader,
  GlobalHeaderItem,
  GlobalHeaderLogo,
  GlobalActions,
  GlobalActionsItem,
} from '../src';

const stories = storiesOf('Global Header', module);
const wrap = content => (
  <div style={{ padding: '1rem' }}>
    {content}
  </div>
);
const header = (
  <GlobalHeader>
    <GlobalHeaderItem>
      <GlobalHeaderLogo src="/assets/images/logo-noname.svg" />
    </GlobalHeaderItem>
    <GlobalHeaderItem isSearch>
      Search
    </GlobalHeaderItem>
    <GlobalHeaderItem>
      <GlobalActions>
        <GlobalActionsItem>
          Foo
        </GlobalActionsItem>
        <GlobalActionsItem>
          Woo
        </GlobalActionsItem>
        <GlobalActionsItem>
          Moo
        </GlobalActionsItem>
      </GlobalActions>
    </GlobalHeaderItem>
  </GlobalHeader>
);

stories
  .add('Within Container', () => wrap(
    <GlobalHeaderContainer>
      {header}
    </GlobalHeaderContainer>
  ))
  .add('Without Container', () => wrap(header));
