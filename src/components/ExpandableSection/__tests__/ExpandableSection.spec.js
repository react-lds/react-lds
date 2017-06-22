import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../../../';
import ExpandableSection from '../ExpandableSection';

const getExpandableSection = (props = {}) => shallow(<ExpandableSection id="51er" {...props} />);


describe('<ExpandableSection />', () => {
  it('renders right class name', () => {
    const mounted = getExpandableSection();
    expect(mounted.hasClass('slds-section')).toBeTruthy();
  });

  it('renders children', () => {
    const child = <div className="51ers" />;
    const mounted = getExpandableSection({ id: 'test', children: child });
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders a title', () => {
    const mounted = getExpandableSection();
    mounted.setProps({ title: 'Title' });
    expect(mounted.find(Button).find('span').prop('title')).toEqual('Title');
    expect(mounted.find(Button).find('span').text()).toEqual('Title');
  });

  it('renders right slds-classes when open is set to true', () => {
    const mounted = getExpandableSection();
    mounted.setProps({ open: true });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeTruthy();
  });
  it('does not render slds-open when open is false', () => {
    const mounted = getExpandableSection({ open: false });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeFalsy();
  });
  it('does render right class when collapsable is false', () => {
    const mounted = getExpandableSection({ collapsable: false });
    expect(mounted.find('.slds-truncate').hasClass('slds-p-horizontal_small')).toBeTruthy();
  });
});
