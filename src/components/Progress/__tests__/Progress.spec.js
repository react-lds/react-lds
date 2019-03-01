import React from 'react';
import { shallow } from 'enzyme';

import Progress from '../Progress';
import ProgressItem from '../ProgressItem';

const getProgress = (props = {}) => shallow(
  <Progress {...props}>
    <ProgressItem title="A" />
    <ProgressItem title="B" />
    <ProgressItem title="C" />
  </Progress>
);

describe('<Progress />', () => {
  it('renders the correct progress bar width', () => {
    const mounted = getProgress({ progress: 1 });

    expect(mounted.find('.slds-progress-bar__value').prop('style')).toEqual({
      width: '50%',
    });
  });

  it('renders the correct progress bar width for zero children', () => {
    const mounted = shallow(<Progress progress={1} />);

    expect(mounted.find('.slds-progress-bar__value').prop('style')).toEqual({
      width: '0%',
    });
  });

  it('renders the correct progress bar width for an invalid progress', () => {
    const mounted = getProgress({ progress: 1337 });

    expect(mounted.find('.slds-progress-bar__value').prop('style')).toEqual({
      width: '100%',
    });
  });

  it('passes the isVertical prop to the children when false', () => {
    const mounted = getProgress({ isVertical: false });

    const isVerticalProps = mounted.find('ProgressItem').map(cmp => cmp.prop('isVertical'));

    expect(isVerticalProps).toEqual([false, false, false]);
  });

  it('passes the isVertical prop to the children when true', () => {
    const mounted = getProgress({ isVertical: true });

    const isVerticalProps = mounted.find('ProgressItem').map(cmp => cmp.prop('isVertical'));

    expect(isVerticalProps).toEqual([true, true, true]);
  });
});
