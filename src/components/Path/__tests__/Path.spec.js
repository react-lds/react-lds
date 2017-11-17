import React from 'react';
import { shallow } from 'enzyme';

import Path from '../Path';
import PathStage from '../PathStage';

const buttonConst = (<p className="whatishappening">test</p>);

const getComponent = (props = { button: buttonConst }) => shallow(
  <Path {...props}>
    <PathStage label="testLabel" onStageClick={() => {}} />
  </Path>
);

describe('<Path />', () => {
  it('renders the correct html and classes', () => {
    const mounted = getComponent();
    expect(mounted.find('div.slds-path-coach').exists()).toBeTruthy();
    expect(mounted.find('div.slds-grid').exists()).toBeTruthy();
    expect(mounted.find('div.slds-tabs_path').exists()).toBeTruthy();
  });

  it('renders the button', () => {
    const mounted = getComponent();
    expect(mounted.find('p.whatishappening').exists()).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ className: 'foo', 'data-test': 'bar', button: buttonConst });
    expect(mounted.find('.slds-path-coach').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-path-coach').prop('data-test')).toEqual('bar');
  });
});
