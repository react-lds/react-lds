import React from 'react';
import { shallow } from 'enzyme';

import ProgressIndicator from '../ProgressIndicator';
import HorizontalProgressIndicatorItem from '../HorizontalProgressIndicatorItem';

const getProgress = (props = {}) => shallow(
  <ProgressIndicator {...props}>
    <HorizontalProgressIndicatorItem title="A" />
    <HorizontalProgressIndicatorItem title="B" />
    <HorizontalProgressIndicatorItem title="C" />
  </ProgressIndicator>
);

describe('<ProgressIndicator />', () => {
  it('renders the correct progress bar width', () => {
    const mounted = getProgress({ progress: 1 });

    expect(mounted.find('.slds-progress-bar__value').prop('style')).toEqual({
      width: '50%',
    });
  });

  it('renders the correct progress bar width for zero children', () => {
    const mounted = shallow(<ProgressIndicator progress={1} />);

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
});
