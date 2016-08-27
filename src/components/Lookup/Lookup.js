import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import throttle from 'lodash.throttle';

import { prefixClasses } from '../../utils';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  Icon,
  IconSVG,
  Pill,
  PillContainer,
} from '../../';

import { InputRaw } from '../Form/Input';

export class Lookup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
    this.state = {
      searchTerm: '',
      highlighted: null,
      open: false,
      loaded: [],
      selected: this.props.initialSelection,
    };

    this.handleLoad = throttle(this.handleLoad, 200);
  }

  componentDidMount() {
    if (this.props.loadOnMount) {
      this.handleLoad();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!!this.props.onChange && this.state.selected !== nextState.selected) {
      this.props.onChange(nextState.selected);
    }
  }

  /**
   * use standard sprite and if custom icon is used, custom sprite
   */
  getSprite(objectType = '') {
    if (objectType.startsWith('custom')) {
      return 'custom';
    }

    return 'standard';
  }

  // Event Handlers
  handleClickOutside() {
    this.closeList();
  }

  handleLoad(searchTerm) {
    const param = typeof searchTerm === 'string' ? searchTerm : this.state.searchTerm;
    Promise.resolve(this.props.load(param))
      .then((data) => {
        if (Array.isArray(data)) {
          this.setState({ loaded: data });
        }
      });
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
    if (this.props.loadOnChange) {
      this.handleLoad(event.target.value);
    }
  }

  handleInputFocus(e) {
    this.openList();

    if (!!this.props.onFocus) {
      this.props.onFocus(e);
    }

    if (this.props.loadOnFocus) {
      this.handleLoad();
    }
  }

  // List Toggles
  toggleList(state) {
    this.setState({ open: state });
  }

  closeList() {
    if (this.state.open) {
      this.toggleList(false);
    }
  }

  openList() {
    // single selection
    if (!this.state.open && !this.props.multi && this.state.selected.length < 1) {
      this.toggleList(true);
    }

    // multi selection
    if (!this.state.open && this.props.multi) {
      this.toggleList(true);
    }
  }

  // Result handlers
  addSelection(item) {
    let selected = this.state.selected;

    if (selected.indexOf(item) === -1) {
      if (this.props.multi) {
        selected = [...selected, item];
      } else {
        selected = [item];
        this.closeList();
      }
    }

    this.setState({ selected });
  }

  removeSelection(item) {
    const selected = this.state.selected.filter(select => select.id !== item.id);

    this.setState({ selected });
  }

  highlightSelection(id) {
    this.setState({ highlighted: id });
  }

  // Elements
  input() {
    // hide single select
    if (!this.props.multi && !this.state.open && this.state.selected.length > 0) {
      return null;
    }

    // hide multi select
    if (this.props.multi && !this.state.open && this.state.selected.length > 0) {
      return null;
    }

    const handleInputChange = this.handleInputChange.bind(this);
    const handleInputFocus = this.handleInputFocus.bind(this);

    if (this.props.emailLayout) {
      return (
        <FormElementControl>
          <input
            className={this.prefix(['input--bare', 'input--height'])}
            id={this.props.id}
            type="text"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={this.state.searchTerm}
            ref={(input) => { if (input && this.state.open) { input.focus(); } }}
          />
        </FormElementControl>
      );
    }

    return (
      <FormElementControl hasIconRight>
        <InputRaw
          aria-activedescendant={this.state.highlighted}
          aria-expanded={this.state.open}
          iconRight="search"
          value={this.state.searchTerm}
          id={this.props.id}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={this.props.placeholder}
          role="combobox"
          isFocused={this.state.open}
        />
      </FormElementControl>
    );
  }

  selections() {
    if (this.state.selected.length < 1) {
      return null;
    }

    const onClick = this.openList.bind(this);

    const selectionPills = this.state.selected.map((item, i) => {
      const sldsClasses = this.props.multi ? null : ['size--1-of-1'];
      const onClose = (e) => {
        e.stopPropagation();
        return this.removeSelection.bind(this, item)();
      };
      const icon = (<Icon sprite={this.getSprite(item.objectType)} icon={item.objectType} />);
      return (
        <Pill
          key={i}
          icon={icon}
          id={item.id}
          title={item.label}
          label={item.label}
          onClose={onClose}
          className={this.prefix(sldsClasses)}
        />
      );
    });

    return (
      <PillContainer bare={this.props.emailLayout} onClick={onClick}>{selectionPills}</PillContainer>
    );
  }

  controls() {
    const hasSelection = this.state.selected.length > 0;

    if (hasSelection) {
      return this.selections();
    }

    return this.input();
  }

  lookupItem(item, i) {
    const addSelection = this.addSelection.bind(this, item);
    const highlightSelection = this.highlightSelection.bind(this, item.id);
    const sldsClasses = ['lookup__item-action', 'media', 'media--center'];

    const renderMeta = () => {
      if (item.meta) {
        return (<span className={this.prefix(['lookup__result-meta', 'text-body--small'])}>{item.meta}</span>);
      }

      return null;
    };

    return (
      <li onClick={addSelection} onMouseOver={highlightSelection} key={i}>
        <a className={this.prefix(sldsClasses)} role="option">
          <IconSVG sprite={this.getSprite(item.objectType)} icon={item.objectType} />
          <div className={this.prefix('media__body')}>
            <div className={this.prefix('lookup__result-text')}>{item.label}</div>
            {renderMeta()}
          </div>
        </a>
      </li>
    );
  }

  lookupItems() {
    const filterDisplayItems = (src, target, prop = 'id') =>
      src.filter(o1 => !target.some(o2 => o1[prop] === o2[prop]));

    if (this.state.loaded.length > 0) {
      const displayItems = filterDisplayItems(this.state.loaded, this.state.selected);
      return displayItems.map((item, i) => this.lookupItem(item, i));
    }

    return null;
  }

  lookupList() {
    if (this.state.open && this.state.loaded.length > 0) {
      return (
        <div className={this.prefix('lookup__menu')} role="listbox">
          <div className={this.prefix(['lookup__item--label', 'text-body--small'])}>
            {this.props.listLabel}
          </div>
          <ul className={this.prefix('lookup__list')} role="presentation">
            {this.lookupItems()}
          </ul>
        </div>
      );
    }

    return null;
  }

  render() {
    const sldsClasses = [
      'lookup',
      { 'is-open': this.state.open },
    ];

    const scope = this.props.multi ? null : 'single';

    if (this.props.emailLayout) {
      return (
        <div className={this.prefix(['grid', 'grow', 'p-horizontal--small'])}>
          <label className={this.prefix(['email-composer__label', 'align-middle'])} htmlFor={this.props.id}>
            {this.props.inputLabel}
          </label>
          <FormElement className={this.prefix(sldsClasses)} data-select={scope} data-scope={scope}>
            {this.input()}
            {this.selections()}
            {this.lookupList()}
          </FormElement>
        </div>
      );
    }

    return (
      <FormElement className={this.prefix(sldsClasses)} data-select={scope} data-scope={scope}>
        <FormElementLabel id={this.props.id} label={this.props.inputLabel} />
        {this.input()}
        {this.selections()}
        {this.lookupList()}
      </FormElement>
    );
  }
}

Lookup.defaultProps = {
  initialSelection: [],
  loadOnChange: true,
  multi: false,
  placeholder: 'Search',
};

const validateSelection = (props, propName, componentName, ...rest) => {
  const arrayValidation = React.PropTypes.array(props, propName, componentName, ...rest);

  if (arrayValidation === null && props[propName].length > 1 && !props.multi) {
    return new Error(`${componentName}.initialSelection should not supply multiple selections to a single-item
        lookup`);
  }

  return arrayValidation;
};

Lookup.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Lookup.propTypes = {
  /**
   * renders a different layour without borders (bare) for email docked
   * composer
   */
  emailLayout: React.PropTypes.bool,
  /**
   * id of the input field in the lookup component
   */
  id: React.PropTypes.string.isRequired,
  /**
   * initial item selection
   */
  initialSelection: validateSelection,
  /**
   * label for the input field in the lookup component
   */
  inputLabel: React.PropTypes.string.isRequired,
  /**
   * label for the dropdown in the lookup component
   */
  listLabel: React.PropTypes.string.isRequired,
  /**
   * loads items into the lookup component
   */
  load: React.PropTypes.func.isRequired,
  /**
   * set true to call load() onInputChange (defaults to true)
   */
  loadOnChange: React.PropTypes.bool,
  /**
   * set true to call load() onInputFocus (defaults to false)
   */
  loadOnFocus: React.PropTypes.bool,
  /**
   * set true to call load() onComponentDidMount (defaults to false)
   */
  loadOnMount: React.PropTypes.bool,
  /**
   * renders the lookup in multiple mode
   */
  multi: React.PropTypes.bool,
  /**
   * onChange handler for the lookup. has selected items as first argument
   */
  onChange: React.PropTypes.func,
  /**
   * onFocus handler for the input field in the lookup
   */
  onFocus: React.PropTypes.func,
  /**
   * placeholder for the input field in lookup
   */
  placeholder: React.PropTypes.string,
};

export default enhanceWithClickOutside(Lookup);
