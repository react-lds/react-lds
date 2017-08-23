import React from 'react';
import { shallow } from 'enzyme';

import Listbox from '../Listbox';

const getComponent = (props = {}) => shallow(
  <Listbox {...props}>
    <div className="test">Test</div>
    <div className="test">Test</div>
  </Listbox>
);

describe('<PillContainer />', () => {
  it('adds aria-select to children', () => {
    const mounted = getComponent();
    expect(mounted.find('.test').at(0).prop('aria-selected')).toBeTruthy();
    expect(mounted.find('.test').at(1).prop('tabIndex')).toBeNull();
  });

  it('adds tabIndex to first child', () => {
    const mounted = getComponent();
    expect(mounted.find('.test').at(0).prop('tabIndex')).toEqual(0);
    expect(mounted.find('.test').at(1).prop('tabIndex')).toBeNull();
  });

  it('applies aria-label', () => {
    const mounted = getComponent({ label: 'wubwub' });
    expect(mounted.find('.slds-listbox').prop('aria-label')).toEqual('wubwub');
  });
});
