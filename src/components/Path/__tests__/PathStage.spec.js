import React from 'react';
import { shallow } from 'enzyme';

import { PathStage } from '../PathStage';

const getComponent = (props = { label: 'testLabel', onStageClick: () => {} }) => shallow(<PathStage {...props} />);

describe('<PathStage />', () => {
  it('renders the correct html and classes', () => {
    const mounted = getComponent();
    expect(mounted.find('li.slds-tabs_path__item').exists()).toBeTruthy();
    expect(mounted.find('a.slds-tabs_path__link').exists()).toBeTruthy();
    expect(mounted.find('span.slds-tabs_path__stage').exists()).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ className: 'foo', 'data-test': 'bar' });
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
    const mounted = getComponent({ selected: true });
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-active')).toBeTruthy();
    expect(mounted.find('a.slds-tabs_path__link').prop('aria-selected')).toEqual(true);
  });

  it('it sets aria-attribute when stage is not selected', () => {
    const mounted = getComponent();
    expect(mounted.find('a.slds-tabs_path__link').prop('aria-selected')).toEqual(false);
  });

  it('sets correct class when stage is current', () => {
    const mounted = getComponent({ current: true });
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-current')).toBeTruthy();
  });

  it('sets correct class when stage is complete', () => {
    const mounted = getComponent({ complete: true });
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-complete')).toBeTruthy();
  });

  it('sets correct class when stage is incomplete, ie no status is specified', () => {
    const mounted = getComponent();
    expect(mounted.find('li.slds-tabs_path__item').hasClass('slds-is-incomplete')).toBeTruthy();
  });
});
