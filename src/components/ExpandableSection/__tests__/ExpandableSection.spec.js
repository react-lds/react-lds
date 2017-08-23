import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../../../';
import { ExpandableSection } from '../ExpandableSection';

const getExpandableSection = (props = {}) => shallow(<ExpandableSection id="heyo" {...props} />);


describe('<ExpandableSection />', () => {
  it('renders right class name', () => {
    const mounted = getExpandableSection();
    expect(mounted.hasClass('slds-section')).toBeTruthy();
  });

  it('renders children', () => {
    const child = <div className="heyo" />;
    const mounted = getExpandableSection({ id: 'test', children: child });
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders a title', () => {
    const mounted = getExpandableSection({ title: 'Title' });
    expect(mounted.find(Button).find('span').prop('title')).toEqual('Title');
    expect(mounted.find(Button).find('span').text()).toEqual('Title');
  });
  it('renders right slds-classes when open is set to true', () => {
    const mounted = getExpandableSection({ open: true });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeTruthy();
  });
  it('does not render slds-open when open is false', () => {
    const mounted = getExpandableSection({ open: false });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeFalsy();
  });
  it('does render right class when uncollapsable is true', () => {
    const mounted = getExpandableSection({ uncollapsable: true });
    expect(mounted.find('.slds-truncate').hasClass('slds-p-horizontal_small')).toBeTruthy();
  });
  it('renders right slds-classes when open is set to true but also uncollapsable', () => {
    const mounted = getExpandableSection({ open: true, uncollapsable: true });
    expect(mounted.find('.slds-truncate').hasClass('slds-p-horizontal_small')).toBeTruthy();
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeTruthy();
  });
  it('renders component right in controlled mode (open: true -> open: false)', () => {
    let mounted = getExpandableSection({ open: true });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeTruthy();
    mounted = getExpandableSection({ open: false });
    expect(mounted.find('.slds-section').hasClass('slds-is-open')).toBeFalsy();
  });
});
