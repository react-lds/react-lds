jest.unmock('../PillContainer');

import React from 'react';
import { PillContainer } from '../';
import { mount } from 'enzyme';

describe('<PillContainer />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(
      <PillContainer><div className="foo">bar</div></PillContainer>,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } }
    );
  });

  it('should have the right class', () => {
    expect(mounted.find('.pill_container').length).toEqual(1);
  });

  it('should accept children', () => {
    expect(mounted.find('.foo').length).toEqual(1);
  });
});
