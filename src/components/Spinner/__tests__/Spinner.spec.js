import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';
import SpinnerContainer from '../SpinnerContainer';

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
    expect(mounted.find('.slds-spinner').hasClass('slds-spinner_large')).toBeTruthy();
  });

  it('renders new sizes added in 2.3.x', () => {
    const mounted = shallow(<Spinner size="xx-small" />);
    expect(mounted.find('.slds-spinner').hasClass('slds-spinner_xx-small')).toBeTruthy();
  });

  it('renders delayed spinners', () => {
    const mounted = shallow(<Spinner delayed />);
    expect(mounted.find('.slds-spinner').hasClass('slds-spinner_delayed')).toBeTruthy();
  });

  it('allows setting the assistiveText', () => {
    const mounted = shallow(<Spinner assistiveLabel="foo" />);
    expect(mounted.find('.slds-assistive-text').text()).toEqual('foo');
  });

  it('applies className and rest-properties to Spinner', () => {
    const mounted = shallow(<Spinner className="foo" data-test="bar" />);
    expect(mounted.find('.slds-spinner').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-spinner').prop('data-test')).toEqual('bar');
  });

  it('renders in container', () => {
    const mounted = shallow(<SpinnerContainer><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-spinner_container').length).toBe(1);
    expect(mounted.find('.slds-spinner_container').children().length).toBe(1);
  });

  it('renders in fixed container', () => {
    const mounted = shallow(<SpinnerContainer fixed><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-is-fixed.slds-spinner_container').length).toBe(1);
    expect(mounted.find('.slds-is-fixed.slds-spinner_container').children().length).toBe(1);
  });

  it('applies className and rest-properties to SpinnerContainer', () => {
    const mounted = shallow(<SpinnerContainer className="foo" data-test="bar"><Spinner /></SpinnerContainer>);
    expect(mounted.find('.slds-spinner_container').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-spinner_container').prop('data-test')).toEqual('bar');
  });
});
