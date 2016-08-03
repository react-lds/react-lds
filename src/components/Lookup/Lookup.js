import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import throttle from 'lodash.throttle';

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
import { prefixable } from '../../decorators';

export class Lookup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  // Event Handlers
  handleClickOutside() {
    this.closeList();
  }

  handleLoad() {
    Promise.resolve(this.props.load())
      .then((data) => {
        this.setState({ loaded: data });
      });
  }

  handleInputChange() {
    if (this.props.loadOnChange) {
      this.handleLoad();
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
    if (!this.state.open) {
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
    const handleInputChange = this.handleInputChange.bind(this);
    const handleInputFocus = this.handleInputFocus.bind(this);

    return (
      <InputRaw
        aria-activedescendant={this.state.highlighted}
        aria-expanded={this.state.open}
        iconRight="search"
        id={this.props.id}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={this.props.placeholder}
        role="combobox"
      />
    );
  }

  selections() {
    const onClick = this.openList.bind(this);

    const selectionPills = this.state.selected.map((item, i) => {
      const sldsClasses = this.props.multi ? null : ['size--1-of-1'];
      const onClose = this.removeSelection.bind(this, item);
      const icon = (<Icon sprite="standard" icon={item.objectType} />);
      return (
        <Pill
          key={i}
          icon={icon}
          id={item.id}
          title={item.label}
          label={item.label}
          onClose={onClose}
          sldsClasses={sldsClasses}
        />
      );
    });

    return (
      <PillContainer onClick={onClick}>{selectionPills}</PillContainer>
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
        return (<span className={this.props.prefix(['lookup__result-meta', 'text-body--small'])}>{item.meta}</span>);
      }

      return null;
    };

    return (
      <li onClick={addSelection} onMouseOver={highlightSelection} key={i}>
        <a className={this.props.prefix(sldsClasses)} role="option">
          <IconSVG sprite="standard" icon={item.objectType} />
          <div className={this.props.prefix(['media__body'])}>
            <div className={this.props.prefix(['lookup__result-text'])}>{item.label}</div>
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
    const prefix = this.props.prefix;

    if (this.state.open && this.state.loaded.length > 0) {
      return (
        <div className={prefix(['lookup__menu'])} role="listbox">
          <div className={prefix(['lookup__item--label', 'text-body--small'])}>
            {this.props.listLabel}
          </div>
          <ul className={prefix(['lookup__list'])} role="presentation">
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

    return (
      <FormElement sldsClasses={sldsClasses} data-select={scope} data-scope={scope}>
        <FormElementLabel id={this.props.id} label={this.props.inputLabel} />
        <FormElementControl hasIconRight>
          {this.controls()}
        </FormElementControl>
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

Lookup.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * the id of the input field in the lookup
   */
  id: React.PropTypes.string.isRequired,
  /**
   * the initial selection
   */
  initialSelection: function validateSelection(props, propName, componentName, ...rest) {
    const arrayValidation = React.PropTypes.array(props, propName, componentName, ...rest);

    if (arrayValidation === null && props[propName].length > 1 && !props.multi) {
      return new Error(`${componentName}.initialSelection should not supply multiple selections to a single-item
          lookup`);
    }

    return arrayValidation;
  },
  /**
   * label for the input in the lookup
   */
  inputLabel: React.PropTypes.string.isRequired,
  /**
   * label for the dropdown in the lookup
   */
  listLabel: React.PropTypes.string.isRequired,
  /**
   * load function
   */
  load: React.PropTypes.func.isRequired,
  /**
   * whether load is called on input change
   */
  loadOnChange: React.PropTypes.bool,
  /**
   * whether load is called on input focus
   */
  loadOnFocus: React.PropTypes.bool,
  /**
   * whether load is called on component mount
   */
  loadOnMount: React.PropTypes.bool,
  /**
   * render as a multi lookup
   */
  multi: React.PropTypes.bool,
  /**
   * lookup onchange cb. gets passed the selected-array
   */
  onChange: React.PropTypes.func,
  /**
   * onFocus cb for the input in lookup. gets passed the event
   */
  onFocus: React.PropTypes.func,
  /**
   * placeholder for the input field in lookup
   */
  placeholder: React.PropTypes.string,
};

export default prefixable(enhanceWithClickOutside(Lookup));
