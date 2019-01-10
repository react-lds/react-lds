import React from 'react';
import { mount } from 'enzyme';
import ComboboxCore from '../ComboboxCore';
import { ComboboxDropdown } from '..';
import ComboboxDropdownLists from '../ComboboxDropdownLists';
import { InputRaw } from '../../../Form';

// TODO: Remove once enzyme supports React.memo
jest.mock('react', () => {
  const r = jest.requireActual('react');
  return { ...r, memo: x => x };
});

const ITEMS = [
  { id: '1', label: 'l1' },
  { id: '2', label: 'l2' },
  { id: '3', label: 'l3' },
];

const onSelectMock = jest.fn();

const onToggleMock = jest.fn();

/* eslint-disable react/prop-types */
const MockItem = ({ id, onMouseDown }) => <li onMouseDown={onMouseDown} key={id} />;
const MockInput = React.forwardRef((inputProps, ref) => <InputRaw {...inputProps} ref={ref} />);
const mockListbox = <div />;

const renderInputMock = jest.fn(props => <MockInput {...props} />);
const renderItemMock = jest.fn(({ id }, { makeSelectHandler }) => (
  <MockItem onMouseDown={makeSelectHandler(id)} key={id} />
));
const renderListboxMock = jest.fn(() => mockListbox);
/* eslint-enable */

const getCmp = (props = {}) => mount(
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

  it('renders a Listbox when a multiselect combobox is closed', () => {
    const selection = [ITEMS[1]];

    const mounted = getCmp({
      isOpen: false,
      labelListbox: 'foobaz',
      selectedItems: selection,
      onSearch: Function.prototype,
      search: 'foo',
    });

    expect(renderListboxMock).toHaveBeenCalledTimes(0);
    mounted.setProps({ isMultiSelect: true });
    expect(renderListboxMock).toHaveBeenCalledTimes(1);

    const call = renderListboxMock.mock.calls[0];
    const [props] = call;

    expect(props).toHaveProperty('label', 'foobaz');
    expect(props).toHaveProperty('selectedItems', selection);
    expect(props).toHaveProperty('makeSelectHandler');
  });

  it('renders dropdown items with the supplied render function', () => {
    getCmp();
    expect(renderItemMock).toHaveBeenCalledTimes(ITEMS.length);
  });

  it('renders an input with the supplied render function', () => {
    const mounted = getCmp();
    expect(renderInputMock).toHaveBeenCalled();
    expect(mounted.find(InputRaw).exists()).toBeTruthy();
  });

  it('opens if input is clicked', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ isOpen: false, onToggle: mockFn });
    mounted.find(InputRaw).simulate('mouseDown');
    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it('opens if the input receives some keyboard events', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ isOpen: false, onToggle: mockFn });
    mounted.find(InputRaw).simulate('keyDown', { key: 'j' });
    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it('opens when the input receives focus', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ isOpen: false, onToggle: mockFn });
    mounted.find(InputRaw).simulate('focus', {});
    expect(mockFn).not.toHaveBeenCalled();
    mounted.find(InputRaw).simulate('focus', { isTrusted: true });
    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it('closes when input is blurred', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ isOpen: false, onToggle: mockFn });
    mounted.find(InputRaw).simulate('blur', {});
    expect(mockFn).not.toHaveBeenCalled();
    mounted.find(InputRaw).simulate('blur', { isTrusted: true });
    expect(mockFn).toHaveBeenCalledWith(false);
  });

  it('fires a selection event when an option is clicked', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ onSelect: mockFn });
    mounted.find(MockItem).at(0).simulate('mouseDown');
    expect(mockFn).toBeCalledTimes(1);
    const call = mockFn.mock.calls[0];
    expect(call[0]).toEqual('1');
    expect(call[1]).toMatchObject({ isAdd: false, isRemove: false, isReplace: false });
  });

  it('fires a remove selection event when a selected option is clicked', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({
      onSelect: mockFn,
      selectedItems: [ITEMS[0]]
    });
    mounted.find(MockItem).at(0).simulate('mouseDown');
    const call = mockFn.mock.calls[0];
    expect(call[0]).toEqual('1');
    expect(call[1]).toMatchObject({ isAdd: false, isRemove: true, isReplace: false });
  });

  it('fires a replace selection event when an option is clicked in a single selection combobox', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ onSelect: mockFn, isMultiSelect: false, selectedItems: [ITEMS[1]] });
    mounted.find(MockItem).at(0).simulate('mouseDown');
    expect(mockFn).toBeCalledTimes(1);
    const call = mockFn.mock.calls[0];
    expect(call[0]).toEqual('1');
    expect(call[1]).toMatchObject({ isAdd: false, isRemove: false, isReplace: true });
  });

  it('does not close when a selection is made and closeOnSelect is false', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ closeOnSelect: false, isOpen: true, onToggle: mockFn });
    mounted.find(MockItem).at(0).simulate('mouseDown');
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('closes when a selection is made and closeOnSelect is false', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ closeOnSelect: true, isOpen: true, onToggle: mockFn });
    mounted.find(MockItem).at(0).simulate('mouseDown');
    expect(mockFn).toBeCalledWith(false);
  });

  it('deletes single selection when encountering a backspace key event', () => {
    const mockFn = jest.fn();

    const mounted = getCmp({
      isMultiSelect: false,
      onSelect: mockFn,
      selectedItems: [ITEMS[0]],
    });

    mounted.find(InputRaw).simulate('keydown', { key: 'Backspace' });

    const call = mockFn.mock.calls[0];
    expect(call[0]).toEqual('1');
    expect(call[1]).toMatchObject({ isAdd: false, isRemove: true, isReplace: false });
  });

  it('unselects a keyboard selection when encountering backspace and updates the search value if present', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ onSearch: mockFn });
    mounted.setState({ keyboardSelection: '1' });
    mounted.find(InputRaw).simulate('keydown', { key: 'Backspace', target: { value: 'fooo' } });
    expect(mounted.state('keyboardSelection')).toBeNull();
    expect(mockFn).toHaveBeenCalledWith('foo');
  });

  it('finalizes selection when pressing enter', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({ isOpen: true, onSelect: mockFn });

    mounted.setState({ keyboardSelection: '2' });
    mounted.find(InputRaw).simulate('keydown', { key: 'Enter' });

    const call = mockFn.mock.calls[0];
    expect(call[0]).toEqual('2');
    expect(call[1]).toMatchObject({ isAdd: false, isRemove: false, isReplace: false });
  });

  // it('cycles keyboard selection when encountering arrow keys', () => {});
  // it('does not allow selecting headers when using arrow keys', () => {});
});
