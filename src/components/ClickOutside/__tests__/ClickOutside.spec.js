import React from 'react';
import { render } from 'react-dom';

import { ClickOutside } from '..';

const $mockApp = document.createElement('div');
$mockApp.id = 'container';

document.body.appendChild($mockApp);

const evt = document.createEvent('HTMLEvents');
evt.initEvent('click', true, true);

const getComponent = (props = {}) => (
  <div className="wrapper">
    <ClickOutside {...props}>
      <div className="child" />
    </ClickOutside>
    <div className="outside" />
  </div>
);

describe('<ClickOutside />', () => {
  it('attaches click listener to doc onMount', () => {
    const mockFn = jest.fn();
    render(getComponent({ onClickOutside: mockFn }), document.getElementById('container'));
    const el = document.body.querySelector('.outside');
    el.dispatchEvent(evt);
    expect(mockFn).toBeCalled();
  });

  it('ignores click on children of the wrapper', () => {
    const mockFn = jest.fn();
    render(getComponent({ onClickOutside: mockFn }), document.getElementById('container'));
    const el = document.body.querySelector('.child');
    el.dispatchEvent(evt);
    expect(mockFn).not.toBeCalled();
  });

  it('respects the condition prop', () => {
    const mockFn = jest.fn();
    const component = getComponent({ onClickOutside: mockFn, condition: false });
    render(component, document.getElementById('container'));
    const el = document.body.querySelector('.outside');
    el.dispatchEvent(evt);
    expect(mockFn).not.toBeCalled();
  });
});
