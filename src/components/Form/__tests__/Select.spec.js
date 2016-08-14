jest.unmock('../Select');

import React from 'react';
import { mount } from 'enzyme';
import Select from '../Select';

describe('<Select />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      id: 'select-id',
      label: 'Select Label',
      onChange: jest.fn(),
    };

    mounted = mount(
      <Select {...props}>
        <option>Option 1</option>
        <option>Option2</option>
      </Select>,
      options);
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toBe(1);
  });

  it('attaches an onChange handler', () => {
    const select = mounted.find('select');
    const event = { target: { value: 'foo' } };
    select.simulate('change', event);
  });

  it('renders children', () => {
    expect(mounted.find('option').length).toBe(2);
  });

  it('renders a select-container', () => {
    expect(mounted.find('.select_container select').length).toBe(1);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('select').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('select').props().disabled).toBeTruthy();
  });

  it('renders multiple', () => {
    mounted.setProps({ multiple: true });
    expect(mounted.find('div.select_container').length).toBe(0);
    expect(mounted.find('select').props().multiple).toBeTruthy();
  });
});
