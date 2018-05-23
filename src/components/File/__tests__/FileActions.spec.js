import React from 'react';
import { shallow } from 'enzyme';
import FileActions from '../FileActions';

const mockChild = <div>Foo</div>;

const getComponent = (props = {}) => shallow(
  <FileActions hideTitle={false} {...props}>{mockChild}</FileActions>
);

describe('<FileActions />', () => {
  it('renders the menu if the title is shown', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-file__actions-menu').contains(mockChild)).toBeTruthy();
    expect(mounted.find('.slds-file__title_scrim').exists()).toBeFalsy();
  });

  it('wraps the menu if the title is hidden', () => {
    const mounted = getComponent({ hideTitle: true });
    expect(mounted.find('.slds-file__actions-menu').contains(mockChild)).toBeTruthy();
    expect(mounted.find('.slds-file__title_scrim').exists()).toBeTruthy();
  });
});
