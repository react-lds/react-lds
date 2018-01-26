import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../ProgressBar';

const getProgressBar = (props = {}) => shallow(<ProgressBar progress={0} {...props} />);

describe('<ProgressBar />', () => {
  it('accepts a progress prop and renders it as width-style', () => {
    const mounted = getProgressBar({ progress: 50 });
    expect(mounted.find('.slds-progress-bar__value').prop('style')).toEqual({
      width: '50%',
    });
  });

  it('clamps the maximum value to 100', () => {
    const mounted = getProgressBar({ progress: 500 });
    expect(mounted.find('.slds-progress-bar').prop('aria-valuenow')).toEqual(100);
  });

  it('clamps the minimum value to 0', () => {
    const mounted = getProgressBar({ progress: -500 });
    expect(mounted.find('.slds-progress-bar').prop('aria-valuenow')).toEqual(0);
  });

  it('accepts a size prop', () => {
    const mounted = getProgressBar({ size: 'x-small' });
    expect(mounted.find('.slds-progress-bar').hasClass('slds-progress-bar_x-small')).toBeTruthy();
  });

  it('accepts a success prop', () => {
    const mounted = getProgressBar({ success: true });
    expect(mounted.find('.slds-progress-bar__value').hasClass('slds-progress-bar__value_success')).toBeTruthy();
  });

  it('passes restprops to progress-bar element', () => {
    const mounted = getProgressBar({ 'data-min': 10 });
    expect(mounted.find('.slds-progress-bar').prop('data-min')).toEqual(10);
  });

  it('passes custom classNames to prefix', () => {
    const mounted = getProgressBar({ className: 'foobar' });
    expect(mounted.find('.slds-progress-bar').hasClass('foobar')).toBeTruthy();
  });

  it('supports setting min & max', () => {
    const cmp = getProgressBar({ progress: 100, min: -200, max: 200 });
    expect(cmp.find('.slds-progress-bar').prop('aria-valuenow')).toEqual(75);
  });
});
