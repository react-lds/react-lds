import React from 'react';
import { shallow } from 'enzyme';
import { ProgressRing, Icon } from '../../../';

const getCmp = (props = {}) => shallow(<ProgressRing progress={88} {...props} />);

describe('<ProgressRing />', () => {
  it('renders a path', () => {
    const cmp = getCmp();
    expect(cmp.find('path').exists()).toBeTruthy();
  });

  it('renders an icon in warning status', () => {
    const cmp = getCmp({ status: 'warning' });
    expect(cmp.find(Icon).prop('icon')).toEqual('warning');
  });

  it('renders an icon in expired status', () => {
    const cmp = getCmp({ status: 'expired' });
    expect(cmp.find(Icon).prop('icon')).toEqual('error');
  });

  it('renders necessary class in active-step status', () => {
    const cmp = getCmp({ status: 'active-step' });
    expect(cmp.find('.slds-progress-ring').hasClass('slds-progress-ring_active-step'));
  });

  it('autocompletes by default', () => {
    const cmp = getCmp({ progress: 100 });
    expect(cmp.find('.slds-progress-ring').hasClass('slds-progress-ring_complete')).toBeTruthy();
    expect(cmp.find(Icon).prop('icon')).toEqual('check');
  });

  it('does not autocomplete when complete is a boolean', () => {
    const cmp = getCmp({ progress: 100, complete: false });
    const test = () => {
      const el = cmp.find('.slds-progress-ring');
      return el.hasClass('slds-progress-ring_complete');
    };

    expect(test()).toBeFalsy();
    cmp.setProps({ complete: true });
    expect(test()).toBeTruthy();
  });

  it('allows a custom icon to be set', () => {
    const icon = <Icon sprite="utility" icon="foo" />;
    const cmp = getCmp({ customIcon: icon });
    expect(cmp.contains(icon)).toBeTruthy();
  });

  it('overwrites the custom icon when completed', () => {
    const icon = <Icon sprite="utility" icon="foo" />;
    const cmp = getCmp({ customIcon: icon, progress: 100 });
    expect(cmp.contains(icon)).toBeFalsy();
  });

  it('overwrites the custom icon when a status is set', () => {
    const icon = <Icon sprite="utility" icon="foo" />;
    const cmp = getCmp({ customIcon: icon, status: 'warning' });
    expect(cmp.contains(icon)).toBeFalsy();
  });

  it('supports setting min & max', () => {
    const cmp = getCmp({ progress: 100, min: -200, max: 200 });
    expect(cmp.find('.slds-progress-ring__progress').prop('aria-valuenow')).toEqual(75);
  });

  it('renders in large size', () => {
    const cmp = getCmp({ size: 'large' });
    expect(cmp.find('.slds-progress-ring').hasClass('slds-progress-ring_large'));
  });
});
