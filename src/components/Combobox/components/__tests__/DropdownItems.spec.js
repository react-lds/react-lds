import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  DropdownItem,
  DropdownItemBase,
  DropdownItemHeader,
  DropdownItemLoading,
  DropdownItemEntity,
  DropdownItemSearch,
} from '../DropdownItems';
import { Icon } from '../../../Icon';
import { Spinner } from '../../../Spinner';

describe('<DropdownItem />', () => {
  const sampleChild = <span />;

  const getCmp = (props = {}) => shallow(
    <DropdownItem {...props}>
      {sampleChild}
    </DropdownItem>
  );

  it('renders children', () => {
    const mounted = getCmp();
    expect(mounted.find('.slds-listbox__option').prop('role')).toEqual('option');
    expect(mounted.find('.slds-listbox__option').contains(sampleChild)).toBeTruthy();
    expect(mounted.find('.slds-media__body').contains(sampleChild)).toBeTruthy();
  });

  it('renders as selected', () => {
    const mounted = getCmp({ isSelected: true });
    expect(mounted.find('.slds-listbox__option').hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders as focused', () => {
    const mounted = getCmp({ isFocus: true });
    expect(mounted.find('.slds-listbox__option').hasClass('slds-has-focus')).toBeTruthy();
  });

  it('renders an icon', () => {
    const sampleIcon = <span className="icon" />;
    const mounted = getCmp({ icon: sampleIcon });
    expect(mounted.find('.slds-listbox__option').contains(sampleIcon)).toBeTruthy();
  });

  it('renders as header', () => {
    const mounted = getCmp({ isHeader: true });
    expect(mounted.find('.slds-listbox__option').prop('role')).toEqual('presentation');
    expect(mounted.find('.slds-media__body').exists()).toBeFalsy();
  });

  it('applies an onMouseDown handler', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ onSelect: mockFn });
    mounted.find('.slds-listbox__option').simulate('mouseDown');
    expect(mockFn).toBeCalled();
  });
});

describe('<DropdownItemBase />', () => {
  const getCmp = (props = {}) => mount(
    <DropdownItemBase
      id="foo"
      label="bar"
      {...props}
    />
  );

  it('renders a label', () => {
    const mounted = getCmp();
    expect(mounted.find('span[title="bar"]').text()).toEqual('bar');
  });

  it('renders meta information', () => {
    const meta = <span className="meta" />;
    const mounted = getCmp({ meta });
    expect(mounted.find(DropdownItem).contains(meta)).toBeTruthy();
  });

  it('renders an assistive label when selected in a multi-select combobox', () => {
    const mounted = getCmp({
      isSelected: true,
      isMultiSelect: true,
      isSelectedAssistiveLabel: 'baz',
    });

    expect(mounted.find('.slds-truncate > .slds-assistive-text').text()).toEqual('baz');
  });

  it('renders an empty icon container when no icon is passed', () => {
    const mounted = getCmp();
    expect(mounted.find('.slds-listbox__option-icon').exists()).toBeTruthy();
  });

  it('renders an icon when passed', () => {
    const mounted = getCmp({
      icon: { icon: 'down', sprite: 'utility' },
    });

    expect(mounted.find(Icon).exists()).toBeTruthy();
  });

  it('renders an icon when selected', () => {
    const mounted = getCmp({
      icon: { icon: 'down', sprite: 'utility' },
      isSelected: true,
    });

    const icon = mounted.find(Icon);

    expect(icon.exists()).toBeTruthy();
    expect(icon.prop('icon')).toEqual('check');
  });
});

describe('<DropdownItemHeader />', () => {
  const getCmp = () => shallow(
    <DropdownItemHeader
      id="foo"
      label="bar"
    />
  );

  it('renders label as heading', () => {
    const mounted = getCmp();
    expect(mounted.find('h3').text()).toEqual('bar');
  });

  it('renders as ComboboxDropdownListItem', () => {
    const mounted = getCmp();
    const item = mounted.find(DropdownItem);
    expect(item.prop('className')).toEqual('slds-listbox__option_plain');
    expect(item.prop('id')).toEqual('foo');
    expect(item.prop('isHeader')).toBeTruthy();
    expect(item.prop('onSelect')).toBeDefined();
  });
});

describe('<DropdownItemLoading />', () => {
  it('renders an inline spinner', () => {
    const mounted = shallow(<DropdownItemLoading />);
    expect(mounted.find('.slds-listbox__item').prop('role')).toEqual('presentation');
    expect(mounted.find(Spinner).prop('inline')).toBeTruthy();
  });
});

describe('<DropdownItemEntity />', () => {
  const getCmp = ({ props = {}, isShallow = true } = {}) => {
    const renderer = isShallow ? shallow : mount;

    return renderer(
      <DropdownItemEntity
        {...props}
        icon={{ icon: 'account', sprite: 'standard' }}
        label="foo"
      />
    );
  };

  it('renders a DropdownItem', () => {
    const mounted = getCmp();
    expect(mounted.find(DropdownItem).exists()).toBeTruthy();
  });

  it('renders an icon and passes it to DropdownItem', () => {
    const mounted = getCmp({ isShallow: false });
    const icon = mounted.find(Icon);
    expect(icon.exists()).toBeTruthy();
    expect(icon.props()).toMatchObject({
      icon: 'account',
      sprite: 'standard'
    });
  });

  it('renders the content wrapped in an entity-specific class', () => {
    const mounted = getCmp();
    expect(mounted.find('.slds-listbox__option-text_entity').text()).toEqual('foo');
  });

  it('renders the meta wrapped in an entity-specific class', () => {
    const sampleEl = <span className="sample" />;
    const mounted = getCmp({ props: { meta: sampleEl } });
    expect(mounted.find('.slds-listbox__option-meta_entity').contains(sampleEl)).toBeTruthy();
  });
});

describe('DropdownItemSearch />', () => {
  it('renders a DropdownItemEntity', () => {
    const mounted = shallow(<DropdownItemSearch search="foo" />);
    expect(mounted.find(DropdownItemEntity).exists()).toBeTruthy();
  });
});
