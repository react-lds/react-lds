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
const mockListbox = <div />;

const renderInputMock = jest.fn(() => mockInput);
const renderItemMock = jest.fn(() => mockItem);
const renderListboxMock = jest.fn(() => mockListbox);

const getCmp = (props = {}) => shallow(
  <ComboboxCore
    closeOnSelect
    id="foo"
    isLoading={false}
    isMultiSelect={false}
    isOpen={false}
    items={ITEMS}
    label="bar"
    placeholder="baz"
    onSelect={onSelectMock}
    onToggle={onToggleMock}
    renderInput={renderInputMock}
    renderItem={renderItemMock}
    renderListbox={renderListboxMock}
    selectedItems={[]}
    {...props}
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
    renderListboxMock.mockClear();
  });

  it('renders a combobox dropdown', () => {
    const mounted = getCmp({
      comboboxClassName: 'foo',
      height: 7,
      isOpen: true,
    });

    const dropdown = mounted.find(ComboboxDropdown);
    expect(dropdown.exists()).toBeTruthy();
    expect(dropdown.props()).toMatchObject({
      height: 7,
      className: 'foo',
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

    expect(dropdownLists.prop('renderItemsAppended')).toBeInstanceOf(Function);
  });

  // TODO: When enzyme allows it
  // it('renders a Listbox when a multiselect combobox is closed', () => {});
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
