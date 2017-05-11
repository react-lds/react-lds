import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import debounce from 'lodash.debounce';
import omit from 'lodash.omit';

import { prefixClasses } from '../../utils';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  Icon,
  IconSVG,
  InputRaw,
  Pill,
  PillContainer,
  Table,
  Row,
  Cell,
} from '../../';

export class Lookup extends Component {
  static contextTypes = { cssPrefix: PropTypes.string };

  static propTypes = {
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * renders a different layour without borders (bare) for email docked
     * composer
     */
    emailLayout: PropTypes.bool,
    /**
     * id of the input field in the lookup component
     */
    id: PropTypes.string.isRequired,
    /**
     * initial item selection
     */
    initialSelection: Lookup.validateSelection,
    /**
     * label for the input field in the lookup component
     */
    inputLabel: PropTypes.string.isRequired,
    /**
     * label for the dropdown in the lookup component
     */
    listLabel: PropTypes.string.isRequired,
    /**
     * loads items into the lookup component
     */
    load: PropTypes.func.isRequired,
    /**
     * set true to call load() onInputChange (defaults to true)
     */
    loadOnChange: PropTypes.bool,
    /**
     * set true to call load() onInputFocus (defaults to false)
     */
    loadOnFocus: PropTypes.bool,
    /**
     * set true to call load() onComponentDidMount (defaults to false)
     */
    loadOnMount: PropTypes.bool,
    /**
     * renders the lookup in multiple mode
     */
    multi: PropTypes.bool,
    /**
     * onChange handler for the lookup. has selected items as first argument
     */
    onChange: PropTypes.func.isRequired,
    /**
     * onFocus handler for the input field in the lookup
     */
    onFocus: PropTypes.func,
    /**
     * placeholder for the input field in lookup
     */
    placeholder: PropTypes.string,
    /**
     * if set to true, allows the creation of new elements that were not found
     * during lookups. For example new email addresses.
     * The new entry will not have an object type and the ID will be the current
     * timestamp.
     */
    allowCreate: PropTypes.bool,
    /**
     * if set, renders the Advanced Modal table layout
     */
    table: PropTypes.bool,
    tableFields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    /**
     * Label behind the number of Results in the table header
     */
    tableResultsHeading: PropTypes.string,
  };

  static defaultProps = {
    allowCreate: false,
    className: null,
    emailLayout: false,
    initialSelection: [],
    loadOnFocus: true,
    loadOnChange: true,
    loadOnMount: false,
    multi: false,
    onFocus: null,
    placeholder: 'Search',
    tableResultsHeading: 'Results',
    table: false,
    tableFields: [],
  };

  static getSprite(objectType = '') {
    if (objectType.startsWith('custom')) {
      return 'custom';
    }

    return 'standard';
  }

  static validateSelection(props, propName, componentName, ...rest) {
    const arrayValidation = PropTypes.array(props, propName, componentName, ...rest);

    if (arrayValidation === null && props[propName].length > 1 && !props.multi) {
      return new Error(`${componentName}.initialSelection should not supply multiple selections to a single-item
          lookup`);
    }

    return arrayValidation;
  }

  static filterDisplayItems(src, target, prop = 'id') {
    return src.filter(o1 => !target.some(o2 => o1[prop] === o2[prop]));
  }

  constructor(props, context) {
    super(props, context);

    const { initialSelection } = props;

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);

    this.state = {
      searchTerm: '',
      highlighted: null,
      open: false,
      loaded: [],
      selected: initialSelection,
    };

    this.handleLoad = debounce(this.handleLoad, 500);
  }

  componentDidMount() {
    if (this.props.loadOnMount) { this.handleLoad(); }
  }

  componentWillUpdate(nextProps, nextState) {
    const { onChange } = this.props;
    if (this.state.selected !== nextState.selected) { onChange(nextState.selected); }
  }

  handleClickOutside = () => {
    this.setState({ open: false });
  }

  handleLoad = (searchTerm) => {
    const { searchTerm: prevSearchTerm } = this.state;
    const { load } = this.props;

    const param = typeof term === 'string' ? searchTerm : prevSearchTerm;

    const onSuccess = (data) => {
      if (Array.isArray(data)) {
        this.setState({ loaded: data });
      }

      return data;
    };

    const loadCall = load(param);

    return new Promise((resolve) => {
      const isPromise = loadCall && loadCall.then;
      return isPromise ? loadCall : Promise.resolve(loadCall)
        .then(onSuccess)
        .then(resolve);
    });
  }

  handleInputChange = (event) => {
    const { loadOnChange } = this.props;
    const { target: { value } } = event;

    this.setState({ searchTerm: value });
    if (loadOnChange) { this.handleLoad(value); }
  }

  handleInputFocus = (event) => {
    const { loadOnFocus, onFocus } = this.props;

    this.openList();
    if (onFocus) { onFocus(event); }
    if (loadOnFocus) { this.handleLoad(); }
  }

  createElement(value) {
    const newItem = {
      id: Date.now(),
      label: value,
    };

    this.setState({
      selected: [...this.state.selected, newItem],
      searchTerm: '',
      open: false,
    });
  }

  handleCreateElement = (event) => {
    const { charCode, target: { value } } = event;
    const { allowCreate, emailLayout, multi } = this.props;
    const { loaded } = this.state;

    const isEnterPress = (charCode === 13 || typeof charCode === 'undefined');
    const isAllowed = allowCreate && multi && loaded.length === 0;
    const isValid = emailLayout ? /^.+@.+\..+$/.test(value) : value !== '';

    if (isEnterPress && isValid && isAllowed) {
      this.createElement(value);
    }
  }

  openList = () => {
    const { multi } = this.props;
    const { open, selected } = this.state;

    if (!open) {
      if (!multi && selected.length < 1) { this.setState({ open: true }); }
      if (multi) { this.setState({ open: true }); }
    }
  }

  addSelection(item) {
    const { multi } = this.props;
    const { selected } = this.state;

    const isNewItem = selected.indexOf(item) === -1;

    const setNextSelection = (nextSelection = selected) => {
      this.setState({
        open: false,
        selected: nextSelection,
        searchTerm: ''
      });
    };

    if (isNewItem) {
      setNextSelection(multi ? [...selected, item] : [item]);
    } else {
      setNextSelection();
    }
  }

  removeSelection(item) {
    const nextSelection = this.state.selected.filter(select => select.id !== item.id);
    this.setState({ selected: nextSelection });
  }

  highlightSelection = (id) => {
    this.setState({ highlighted: id });
  }

  input() {
    const { emailLayout, id, placeholder } = this.props;
    const {
      highlighted,
      open,
      searchTerm,
      selected
    } = this.state;

    if (!open && selected.length > 0) { return null; }

    if (emailLayout) {
      return (
        <FormElementControl>
          <input
            className={this.prefix(['input--bare', 'input--height'])}
            id={id}
            type="text"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleCreateElement}
            onKeyPress={this.handleCreateElement}
            value={searchTerm}
            ref={(input) => { if (input && open) { input.focus(); } }}
          />
        </FormElementControl>
      );
    }

    return (
      <FormElementControl hasIconRight>
        <InputRaw
          aria-activedescendant={highlighted}
          aria-expanded={open}
          iconRight="search"
          value={searchTerm}
          id={id}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleCreateElement}
          onKeyPress={this.handleCreateElement}
          placeholder={placeholder}
          role="combobox"
          isFocused={open}
        />
      </FormElementControl>
    );
  }

  selections() {
    const { emailLayout, multi } = this.props;
    const { selected } = this.state;

    if (selected.length < 1) { return null; }

    const pill = (item, i) => {
      const { id, label, objectType } = item;
      return (
        <Pill
          key={i}
          className={!multi ? this.prefix(['size--1-of-1']) : null}
          icon={objectType && (<Icon sprite={Lookup.getSprite(objectType)} icon={objectType} />)}
          id={id}
          title={label}
          label={label}
          onClose={() => this.removeSelection(item)}
        />
      );
    };

    return (
      <PillContainer bare={emailLayout} onClick={this.openList}>
        {selected.map(pill)}
      </PillContainer>
    );
  }

  lookupItem = (item, i) => {
    const { id } = this.props;
    const { objectType, label, id: itemId, meta } = item;

    return (
      <li key={i} role="presentation">
        <span
          className={this.prefix(['lookup__item-action', 'media', 'media--center'])}
          id={`${id}-option-${i}`}
          onClick={() => this.addSelection(item)}
          onMouseOver={() => this.highlightSelection(itemId)}
          role="option"
        >
          <IconSVG
            className={this.prefix('media__figure')}
            sprite={Lookup.getSprite(objectType)}
            icon={objectType}
          />
          <div className={this.prefix('media__body')}>
            <div className={this.prefix('lookup__result-text')}>{label}</div>
            {meta && (
              <span className={this.prefix(['lookup__result-meta', 'text-body--small'])}>
                {meta}
              </span>
            )}
          </div>
        </span>
      </li>
    );
  }

  lookupList() {
    const { listLabel, table } = this.props;
    const { loaded, selected } = this.state;

    const displayItems = Lookup.filterDisplayItems(loaded, selected);

    if (table || !open || displayItems.length < 1) { return null; }

    return (
      <div className={this.prefix('lookup__menu')} role="listbox">
        <div className={this.prefix(['lookup__item--label', 'text-body--small'])}>
          {listLabel}
        </div>
        <ul className={this.prefix('lookup__list')} role="presentation">
          {displayItems.map(this.lookupItem)}
        </ul>
      </div>
    );
  }

  lookupListTable() {
    const { table, tableFields, tableResultsHeading } = this.props;
    const { loaded, selected } = this.state;

    const displayItems = Lookup.filterDisplayItems(loaded, selected);

    if (!table || displayItems.length < 1) { return null; }

    const renderBodyCell = (content, index, objectType) => {
      if (index === 0) {
        return (
          <a>
            {objectType && (
              <Icon
                size="small"
                className={this.prefix('m-right--x-small')}
                sprite={Lookup.getSprite(objectType)}
                icon={objectType}
              />
            )}
            {content}
          </a>
        );
      }

      return content;
    };

    const header = (
      <thead>
        <Row>
          <Cell scope="col" colSpan={tableFields.length}>
            {`${displayItems.length} ${tableResultsHeading}`}
          </Cell>
        </Row>
        <Row>
          {tableFields.map(({ name, label }) => <Cell scope="col" key={name}>{label}</Cell>)}
        </Row>
      </thead>
    );

    const body = (
      <tbody>
        {displayItems.map(item =>
          <Row key={item.id}>
            {tableFields.map((field, index) =>
              <Cell
                data-label={field.name}
                scope={index === 0 ? 'row' : null}
                onClick={() => this.addSelection(item)}
                key={`${item.id}${index}`}
              >
                {renderBodyCell(item[field.name], index, item.objectType)}
              </Cell>
            )}
          </Row>
        )}
      </tbody>
    );

    return (
      <Table bordered className={this.prefix('m-top--small')}>
        {header}
        {body}
      </Table>
    );
  }

  render() {
    const { className, emailLayout, id, inputLabel, multi } = this.props;
    const { open } = this.state;

    const rest = omit(this.props, Object.keys(Lookup.propTypes));

    const sldsClasses = [
      'lookup',
      { 'is-open': open },
    ];

    const scope = multi ? null : 'single';

    if (emailLayout) {
      return (
        <div className={this.prefix(['grid', 'grow', 'p-horizontal--small'])}>
          <label className={this.prefix(['email-composer__label', 'align-middle'])} htmlFor={id}>
            {inputLabel}
          </label>
          <FormElement
            {...rest}
            className={this.prefix(sldsClasses, className)}
            data-select={scope}
            data-scope={scope}
          >
            {this.input()}
            {this.selections()}
            {this.lookupList()}
          </FormElement>
        </div>
      );
    }

    return (
      <div>
        <FormElement
          {...rest}
          className={this.prefix(sldsClasses, className)}
          data-select={scope}
          data-scope={scope}
        >
          <FormElementLabel id={id} label={inputLabel} />
          {this.input()}
          {this.selections()}
          {this.lookupList()}
        </FormElement>
        {this.lookupListTable()}
      </div>
    );
  }
}

export default enhanceWithClickOutside(Lookup);
