import React from 'react';
import { shallow } from 'enzyme';

import { Column } from '../Column';

jest.unmock('../Column');

describe('<Column />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Column>{child}</Column>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-col').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders alignments', () => {
    mounted.setProps({ align: 'top' });
    expect(mounted.find('.slds-col').hasClass('slds-align-top')).toBeTruthy();
  });
});
