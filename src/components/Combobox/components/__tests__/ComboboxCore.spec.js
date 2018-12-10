import React from 'react';
import { shallow } from 'enzyme';
import ComboboxCore from '../ComboboxCore';
import { ComboboxDropdown } from '..';
import ComboboxDropdownLists from '../ComboboxDropdownLists';
import { ClickOutside } from '../../../ClickOutside';

const ITEMS = [
  { id: '1', label: 'l1' },
  { id: '2', label: 'l2' },
  { id: '3', label: 'l3' },
];

const onSelectMock = jest.fn();

const onToggleMock = jest.fn();

const mockInput = <input type="text" />;
const mockItem = <li />;

const renderInputMock = jest.fn(() => mockInput);
const renderItemMock = jest.fn(() => mockItem);

const getCmp = (props = {}) => shallow(
  <ComboboxCore
    {...props}
    id="foo"
    items={ITEMS}
    label="bar"
    placeholder="baz"
    onSelect={onSelectMock}
    onToggle={onToggleMock}
    renderInput={renderInputMock}
    renderItem={renderItemMock}
  />
);

// TODO: Ideally, we could use `mount` here and run some more advanced expectations on the input
// As it stands, enzyme does not support `React.memo` yet so we cannot do that :(
describe('<ComboboxCore />', () => {
  beforeEach(() => {
    onSelectMock.mockClear();
    onToggleMock.mockClear();
    renderInputMock.mockClear();
    renderItemMock.mockClear();
  });

  it('renders a combobox dropdown', () => {
    const mounted = getCmp({
      height: 7,
      isOpen: true,
    });

    const dropdown = mounted.find(ComboboxDropdown);
    expect(dropdown.exists()).toBeTruthy();
    expect(dropdown.props()).toMatchObject({
      height: 7,
      id: 'combobox-foo',
      listboxId: 'listbox-foo',
      isOpen: true,
    });
  });

  it('renders dropdown lists', () => {
    const mockFn = jest.fn();
    const selection = [ITEMS[1]];
    const mounted = getCmp({
      renderItemsAppended: mockFn,
      renderItemsPrepended: mockFn,
      selectedItems: selection,
    });

    const dropdownLists = mounted.find(ComboboxDropdownLists);
    expect(dropdownLists.exists()).toBeTruthy();
    expect(dropdownLists.props()).toMatchObject({
      items: ITEMS,
      renderItemsPrepended: mockFn,
      selectedItems: selection,
    });
  });

  it('renders a Listbox when a multiselect combobox is closed', () => {
    const mockFn = jest.fn(() => <span />);
    const selection = [ITEMS[1]];

    const mounted = getCmp({
      isOpen: false,
      labelListbox: 'foobaz',
      renderListbox: mockFn,
      selectedItems: selection,
    });

    expect(mockFn).toHaveBeenCalledTimes(0);
    mounted.setProps({ isMultiSelect: true });
    expect(mockFn).toHaveBeenCalledTimes(1);

    const call = mockFn.mock.calls[0];
    const [props, opts] = call;

    expect(props).toHaveProperty('label', 'foobaz');
    expect(props).toHaveProperty('selectedItems', selection);
    expect(props).toHaveProperty('makeSelectHandler');

    expect(opts).toHaveProperty('items', ITEMS);
    expect(opts).toHaveProperty('selectedItems', selection);
    expect(opts).toHaveProperty('makeSelectHandler');
    expect(opts).toHaveProperty('keyboardSelection');
  });

  it('closes when a click outside is registered', () => {
    const mounted = getCmp({ isOpen: true });
    mounted.find(ClickOutside).simulate('clickOutside');
    expect(onToggleMock).toHaveBeenCalledWith(false);
  });

  // TODO: When enzyme allows it
  // it('renders dropdown items with the supplied render function', () => {});
  // it('renders an input with the supplied render function', () => {});
  // it('opens if input is not focussed and clicked', () => {});
  // it('opens if input is focussed and clicked', () => {});
  // it('opens if the input receives some keyboard events', () => {});
  // it('opens when the input receives focus', () => {});
  // it('closes when a selection is made and closeOnSelect is true', () => {});
  // it('closes when input is blurred', () => {});
  // it('does not close the combobox when a selection is made and closeOnSelect is false', () => {});
});
