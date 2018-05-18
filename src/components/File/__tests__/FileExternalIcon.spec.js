import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../../';
import FileExternalIcon from '../FileExternalIcon';

const mockIcon = {
  icon: 'foo',
  sprite: 'utility',
  title: 'foo',
};

const getComponent = () => shallow(<FileExternalIcon externalIcon={mockIcon} />);

describe('<FileExternalIcon />', () => {
  it('renders an icon', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-file__external-icon').find(Icon).exists()).toBeTruthy();
  });

  it('appliues properties to icon', () => {
    const mounted = getComponent();
    expect(mounted.find(Icon).props()).toMatchObject({
      icon: mockIcon.icon,
      sprite: mockIcon.sprite,
      title: mockIcon.title,
    });
  });
});
