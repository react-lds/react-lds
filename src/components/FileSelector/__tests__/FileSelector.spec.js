import React from 'react';
import { mount } from 'enzyme';
import Dropzone from 'react-dropzone';
import FileSelector from '../FileSelector';
import { FormElementError, FormElement } from '../../Form';

const getComponent = (props = {}) => mount(
  <FileSelector
    {...props}
    id="file-selector"
    buttonText="btn-text"
    selectorText="sel-text"
    label="label-text"
    onDrop={Function.prototype}
  />
);

describe('<FileSelector />', () => {
  it('renders different selector types', () => {
    const cmp = getComponent({ selectorType: 'images' });
    expect(cmp.find('.slds-file-selector').hasClass('slds-file-selector_images')).toBeTruthy();
  });

  it('renders labels and sets approriate aria-labelledby attribute', () => {
    const cmp = getComponent();
    const prim = 'file-selector-primary-label';
    const sec = 'file-selector-secondary-label';
    expect(cmp.find(`#${prim}`).exists()).toBeTruthy();
    expect(cmp.find(`#${sec}`).exists()).toBeTruthy();
    expect(cmp.find('input').prop('aria-labelledby')).toEqual(`${prim} ${sec}`);
  });

  it('renders errors and disabled when fatal', () => {
    const cmp = getComponent({ error: 'foo' });

    const assert = (expectation) => {
      expect(cmp.find(Dropzone).prop('disabled')).toEqual(expectation);
      expect(cmp.find(FormElementError).prop('error')).toEqual('foo');
      expect(cmp.find(FormElement).prop('error')).toEqual('foo');
    };

    assert(false);
    cmp.setProps({ error: null, fatalError: 'foo' });
    assert(true);
  });
});
