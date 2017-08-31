import React from 'react';
import { shallow, mount } from 'enzyme';

import { PathStage } from '../PathStage';

describe('<PathStage />', () => {
  it('renders the correct html and classes', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} />
    );
    expect(mounted.find('li.slds-tabs_path__item').length).toBe(1);
    expect(mounted.find('a.slds-tabs_path__link').length).toBe(1);
    expect(mounted.find('span.slds-tabs_path__stage').length).toBe(1);
  });

  it('applies className and rest-properties', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} />
    );
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('li.slds-tabs_path__item').hasClass('foo')).toBeTruthy();
    expect(mounted.find('li.slds-tabs_path__item').prop('data-test')).toEqual('bar');
  });

  /*
  it('applies assistiveText', () => {
    const mounted = mount(
      <PathStage label="testLabel" onStageClick={() => {}} assistiveText="test123" />
    );
    const node = mounted.find('.slds-assistive-text');
    expect(node.text()).to.equal('test123');
  });
  */

  it('sets correct class and aria-attribute when stage is selected', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} selected />
    );
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-active')).toBeTruthy();
    expect(mounted.find('a.slds-tabs_path__link').prop('aria-selected')).toEqual(true);
  });

  it('it sets aria aria-attribute when stage is not selected', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} />
    );
    expect(mounted.find('a.slds-tabs_path__link').prop('aria-selected')).toEqual(false);
  });

  it('sets correct class when stage is current', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} current />
    );
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-current')).toBeTruthy();
  });

  it('sets correct class when stage is complete', () => {
    const mounted = shallow(
      <PathStage label="testLabel" onStageClick={() => {}} complete />
    );
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-complete')).toBeTruthy();
  });

  it('sets correct class when stage is incomplete, ie no status is specified', () => {
    const mounted = mount(
      <PathStage label="testLabel" onStageClick={() => {}} />
    );
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-incomplete')).toBeTruthy();
  });
});
