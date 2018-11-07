import React from 'react';
import { shallow } from 'enzyme';
import File from '../File';
import FileActions from '../FileActions';
import FileCaption from '../FileCaption';
import FileExternalIcon from '../FileExternalIcon';

const getComponent = (props = {}) => shallow(<File title="foo" {...props} />);

describe('<File />', () => {
  it('renders a placeholder when loading', () => {
    const mounted = getComponent({ hideTitle: true, isLoading: true });
    expect(mounted.find('.slds-file').hasClass('slds-file_loading')).toBeTruthy();
  });

  it('renders no caption if hideTitle is true', () => {
    const expectTitle = (cmp, isVisible) => {
      const expectations = [
        expect(cmp.find('.slds-file').hasClass('slds-has-title')),
        expect(cmp.find(FileCaption).exists())
      ];

      expectations.forEach((expectation) => {
        if (isVisible) expectation.toBeTruthy();
        else expectation.toBeFalsy();
      });
    };

    const mounted = getComponent();
    expectTitle(mounted, true);
    mounted.setProps({ hideTitle: true });
    expectTitle(mounted, false);
  });

  it('renders an external icon', () => {
    const mounted = getComponent();
    expect(mounted.find(FileExternalIcon).exists()).toBeFalsy();
    mounted.setProps({ externalIcon: { icon: 'foo', sprite: 'action', title: 'bar' } });
    expect(mounted.find(FileExternalIcon).exists()).toBeTruthy();
  });

  it('renders actions', () => {
    const mounted = getComponent();
    expect(mounted.find(FileActions).exists()).toBeFalsy();
    mounted.setProps({ actions: <div className="test">Actions</div> });
    expect(mounted.find(FileActions).exists()).toBeTruthy();
  });

  it('renders ratios', () => {
    const mounted = getComponent({ ratio: '1-by-1' });
    expect(mounted.find('.slds-file__crop').hasClass('slds-file__crop_1-by-1')).toBeTruthy();
  });
});
