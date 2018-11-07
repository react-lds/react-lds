import React from 'react';
import { shallow } from 'enzyme';

import DescriptiveProgressBar from '../DescriptiveProgressBar';
import { Grid } from '../../Grid';
import ProgressBar from '../ProgressBar';

const getProgressBar = (props = {}) => shallow(
  <DescriptiveProgressBar label="bar" id="foo" progress={0} {...props} />
);

describe('<DescriptiveProgressBar />', () => {
  it('renders a label and a percentageLabel', () => {
    const mounted = getProgressBar({ progress: 25 });
    expect(mounted.find(Grid).find('span').at(0).text()).toEqual('bar');
    expect(mounted.find(Grid).find('span').at(1).text()).toEqual('25% Complete');
  });

  it('applies an id and associates it with the input', () => {
    const mounted = getProgressBar({ progress: 25 });
    expect(mounted.find(Grid).prop('id')).toEqual('foo');
    expect(mounted.find(ProgressBar).prop('aria-labelledby')).toEqual('foo');
  });

  it('passes rest and progress props to ProgressBar', () => {
    const mounted = getProgressBar({ className: 'baz', progress: 25 });
    const progressbar = mounted.find(ProgressBar);
    expect(progressbar.prop('progress')).toEqual(25);
    expect(progressbar.prop('className')).toEqual('baz');
  });
});

