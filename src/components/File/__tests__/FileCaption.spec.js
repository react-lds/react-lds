import React from 'react';
import { shallow } from 'enzyme';
import { Icon, MediaObject } from '../../..';
import FileCaption from '../FileCaption';

const getComponent = (props = {}) => shallow(
  <FileCaption
    fileType="foo"
    hasActions={false}
    title="bar"
    {...props}
  />
);

describe('<FileCaption />', () => {
  it('renders the title', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-file__text').prop('children')).toEqual('bar');
  });

  it('adjusts caption when actions are present', () => {
    const mounted = getComponent();
    const testTitle = () => mounted.find('.slds-file__title').hasClass('slds-file-has-actions');
    expect(testTitle()).toBeFalsy();
    mounted.setProps({ hasActions: true });
    expect(testTitle()).toBeTruthy();
  });

  it('renders a file icon', () => {
    const mounted = getComponent();

    const referenceIcon = (
      <Icon
        icon="foo"
        size="x-small"
        sprite="doctype"
        title="foo"
      />
    );

    expect(mounted.find(MediaObject).prop('figureLeft')).toEqual(referenceIcon);
  });
});
