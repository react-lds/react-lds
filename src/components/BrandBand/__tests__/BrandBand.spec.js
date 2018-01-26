import React from 'react';
import { shallow } from 'enzyme';
import BrandBand from '../BrandBand';

const getCmp = (props = {}) => shallow(<BrandBand {...props} />);

describe('<BrandBand />', () => {
  it('renders a medium band by default', () => {
    const mounted = getCmp();
    expect(mounted.find('.slds-brand-band').hasClass('slds-brand-band_medium')).toBeTruthy();
  });

  it('allows to set different sizes', () => {
    const mounted = getCmp({ size: 'large' });
    expect(mounted.find('.slds-brand-band').hasClass('slds-brand-band_large')).toBeTruthy();
  });

  it('allows disabling the background', () => {
    const mounted = getCmp({ noBackground: true });
    expect(mounted.find('.slds-brand-band').hasClass('slds-brand-band_none')).toBeTruthy();
  });

  it('allows setting to cover', () => {
    const mounted = getCmp({ cover: true });
    expect(mounted.find('.slds-brand-band').hasClass('slds-brand-band_cover')).toBeTruthy();
  });
});
