jest.unmock('../themeable');

import React from 'react';
import { shallow } from 'enzyme';
import themeable from '../themeable';

describe('sizeable', () => {
  const DummyComponent = () =>
    <div>
      it works
    </div>;

  const ThemeableDummyComponent = themeable(DummyComponent);

  it('adds the theme css', () => {
    const comp = shallow(<ThemeableDummyComponent theme="shade" />);
    expect(comp.prop('sldsClasses')).toEqual(['theme--shade']);
  });
});
