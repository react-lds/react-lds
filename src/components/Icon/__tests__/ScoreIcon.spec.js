import React from 'react';
import { shallow } from 'enzyme';
import ScoreIcon from '../ScoreIcon';

const getComponent = (props = {}) => shallow(<ScoreIcon score="positive" {...props} />);

describe('<ScoreIcon />', () => {
  it('sets rest properties and className on div', () => {
    const mounted = getComponent({ 'data-sample': 'foo', className: 'bar' });
    const div = mounted.find('.slds-icon_container');
    expect(div.hasClass('bar')).toBeTruthy();
    expect(div.prop('data-sample')).toEqual('foo');
  });

  it('sets a title and uses it as assistiveText', () => {
    const mounted = getComponent({ title: 'foo' });
    expect(mounted.find('.slds-icon-score').prop('title')).toEqual('foo');
    expect(mounted.find('.slds-assistive-text').text()).toEqual('foo');
  });

  it('allows overwriting assistiveText via prop', () => {
    const mounted = getComponent({ title: 'foo', assistiveText: 'bar' });
    expect(mounted.find('.slds-assistive-text').text()).toEqual('bar');
  });
});
