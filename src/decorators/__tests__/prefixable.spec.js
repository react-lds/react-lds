jest.unmock('../prefixable');

import React from 'react';
import { mount } from 'enzyme';
import prefixable from '../prefixable';

describe('prefixable', () => {
  const context = { cssPrefix: 'unicorn-' };
  const DummyComponent = (props) =>
    // eslint-disable-next-line react/prop-types
    <div className={props.prefix(['foo', 'bar'], props)}>
      it works
    </div>;

  const PrefixedDummyComponent = prefixable(DummyComponent);

  it('prefixes sldsClasses from the surrounded component', () => {
    const comp = mount(<PrefixedDummyComponent />, { context });
    expect(comp.find('div').hasClass('unicorn-foo')).toBeTruthy();
    expect(comp.find('div').hasClass('unicorn-bar')).toBeTruthy();
  });

  it('does not prefix anything if sldsClasses is empty', () => {
    const EmptyDummy = (props) =>
      // eslint-disable-next-line react/prop-types
      <div className={props.prefix([], props)}>
        it works
      </div>;

    const PrefixedEmptyDummy = prefixable(EmptyDummy);

    const comp = mount(<PrefixedEmptyDummy />, { context });
    expect(comp.html()).toEqual('<div class="">it works</div>');
  });
});
