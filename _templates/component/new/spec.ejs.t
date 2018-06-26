---
to: src/components/<%= name %>/__tests__/<%= name %>.spec.js
---
import React from 'react';
import { shallow } from 'enzyme';
import <%= name %> from '../<%= name %>';

const getComponent = (props = {}) => shallow(
  <<%= name %>
    {...props}
  />
);

describe('<<%= name %> />', () => {});

