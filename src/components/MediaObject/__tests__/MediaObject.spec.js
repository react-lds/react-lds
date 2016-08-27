import React from 'react';
import { shallow } from 'enzyme';

import { MediaObject } from '../MediaObject';

jest.unmock('../MediaObject');

describe('<MediaObject />', () => {
  let mounted = null;
  const figure = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<MediaObject />, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-media').length).toBe(1);
    expect(mounted.find('.slds-media__body').length).toBe(1);
  });

  it('renders children', () => {
    mounted.setProps({ children: figure });
    expect(mounted.find('.slds-media__body').contains(figure)).toBeTruthy();
  });

  it('renders a left figure', () => {
    mounted.setProps({ figureLeft: figure });
    expect(mounted.find('.slds-media__figure').contains(figure)).toBeTruthy();
  });

  it('renders a right figure', () => {
    mounted.setProps({ figureRight: figure });
    expect(mounted.find('.slds-media__figure--reverse').contains(figure)).toBeTruthy();
  });

  it('renders a left and right figure simultaniously', () => {
    mounted.setProps({ figureLeft: figure, figureRight: figure });
    expect(mounted.find('.slds-media__figure').length).toBe(2);
    expect(mounted.find('.slds-media__figure--reverse').length).toBe(1);
  });
});
