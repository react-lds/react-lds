import React from 'react';
import { shallow, render } from 'enzyme';

import { Spinner } from '../Spinner';
import { SpinnerContainer } from '../SpinnerContainer';

describe('<Spinner />', () => {
  it('renders the correct markup', () => {
    const mounted = shallow(<Spinner />);
    expect(mounted.find('.slds-spinner').length).toBe(1);
    expect(mounted.find('.slds-spinner__dot-a').length).toBe(1);
    expect(mounted.find('.slds-spinner__dot-b').length).toBe(1);
    expect(mounted.find('.slds-spinner').children().length).toBe(3);
  });
  it('renders sizes', () => {
    const mounted = shallow(<Spinner size="large" />);
    expect(mounted.find('.slds-spinner').hasClass('slds-spinner--large')).toBeTruthy();
  });
  it('renders new sizes added in 2.3.x', () => {
    const mounted = shallow(<Spinner size="xx-small" />);
    expect(mounted.find('.slds-spinner').hasClass('slds-spinner--xx-small')).toBeTruthy();
  });
  it('applies className and rest-properties to Spinner', () => {
    const mounted = shallow(<Spinner className="foo" data-test="bar" />);
    expect(mounted.find('.slds-spinner').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-spinner').prop('data-test')).toEqual('bar');
  });

  it('renders in container', () => {
    const mounted = render(<SpinnerContainer><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-spinner_container').length).toBe(1);
    expect(mounted.find('.slds-spinner_container').children().length).toBe(1);
  });

  it('renders in fixed container', () => {
    const mounted = render(<SpinnerContainer fixed><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-is-fixed.slds-spinner_container').length).toBe(1);
    expect(mounted.find('.slds-is-fixed.slds-spinner_container').children().length).toBe(1);
  });

  it('applies className and rest-properties to SpinnerContainer', () => {
    const mounted = render(<SpinnerContainer className="foo" data-test="bar"><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-spinner_container').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-spinner_container').prop('data-test')).toEqual('bar');
  });
});
