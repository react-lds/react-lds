import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

const sampleChild = <div>Sample</div>;

const getComponent = (props = {}) => shallow(
  <Tab
    id="foo"
    title="bar"
    {...props}
  >
    {sampleChild}
  </Tab>
);

const findContent = mounted => mounted.find('.slds-tabs_default__content');

describe('<Tab />', () => {
  it('renders children when isActive is true', () => {
    const mounted = getComponent({ isActive: true });
    expect(mounted.contains(sampleChild)).toBeTruthy();
    expect(findContent(mounted).hasClass('slds-show')).toBeTruthy();
  });

  it('renders children when isActive is false', () => {
    const mounted = getComponent({ isActive: false });
    expect(mounted.contains(sampleChild)).toBeTruthy();
    expect(findContent(mounted).hasClass('slds-hide')).toBeTruthy();
  });

  it('does not render children when isActive is null', () => {
    const mounted = getComponent({ isActive: null });
    expect(mounted.contains(sampleChild)).toBeFalsy();
    expect(findContent(mounted).hasClass('slds-hide')).toBeTruthy();
  });
});
