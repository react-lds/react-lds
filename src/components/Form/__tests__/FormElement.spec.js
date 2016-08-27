import React from 'react';
import { shallow } from 'enzyme';

import FormElement from '../FormElement';

jest.unmock('../FormElement');

describe('<FormElement />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<FormElement>{child}</FormElement>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-form-element').contains(child)).toBeTruthy();
  });

  it('renders errors', () => {
    mounted.setProps({ error: 'string' });
    expect(mounted.find('.slds-form-element').hasClass('slds-has-error')).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.slds-form-element').hasClass('slds-is-required')).toBeTruthy();
  });
});
