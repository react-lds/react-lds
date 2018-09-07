import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ToggleButton, TOGGLE_BUTTON_WIDTH } from './ToggleButton';

const FULL_HEIGHT = { height: '100%' };
const DETAIL_VIEW_STYLE = { marginLeft: TOGGLE_BUTTON_WIDTH };

export class SplitView extends Component {
  static propTypes = {
    assistiveTextOpen: PropTypes.string,
    assistiveTextClose: PropTypes.string,
    className: PropTypes.string,
    detail: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    initialIsOpen: PropTypes.bool,
    master: PropTypes.node.isRequired,
    masterMaxWidth: PropTypes.string,
    masterMinWidth: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    assistiveTextOpen: '',
    assistiveTextClose: '',
    className: null,
    initialIsOpen: false,
    masterMaxWidth: '20rem',
    masterMinWidth: '20rem',
    onOpen: Function.prototype,
    onClose: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: props.initialIsOpen };
  }

  getMasterViewId = () => `master_view_${this.props.id}`;

	setIsOpen = (isOpen) => {
	  this.setState({ isOpen });
	}

	toggle = () => {
	  const { isOpen } = this.state;
	  const { onOpen, onClose } = this.props;

	  this.setIsOpen(!isOpen);

	  if (isOpen) {
	    onClose();
	  } else {
	    onOpen();
	  }
	}

	renderMasterView() {
    return this.state.isOpen
      ? (
        <article
          id={this.getMasterViewId()}
          className="slds-split-view slds-grid slds-grid_vertical slds-grow slds-scrollable_none"
        >
          {this.props.master}
        </article>
      )
      : null;
	}

	render() {
	  const {
	    assistiveTextOpen,
	    assistiveTextClose,
	    className,
	    detail,
	    id,
	    masterMaxWidth,
	    masterMinWidth,
	  } = this.props;
	  const { isOpen } = this.state;
	  const masterStyle = isOpen
	    ? { maxWidth: masterMaxWidth, minWidth: masterMinWidth }
	    : null;

	  return (
  <div
    id={id}
    className={cx('slds-grid', className)}
    style={FULL_HEIGHT}
  >
    <div
      style={masterStyle}
      className={cx(
						'slds-split-view_container',
						{ 'slds-is-open': isOpen },
						{ 'slds-is-closed': !isOpen },
					)}
    >
      <ToggleButton
        ariaControls={this.getMasterViewId()}
        assistiveTextOpen={assistiveTextOpen}
        assistiveTextClose={assistiveTextClose}
        isOpen={isOpen}
        onClick={this.toggle}
      />
      {this.renderMasterView()}
    </div>
    <div style={DETAIL_VIEW_STYLE} className="slds-grow slds-scrollable_y">
      {detail}
    </div>
  </div>
	  );
	}
}
