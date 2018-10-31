import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ToggleButton, TOGGLE_BUTTON_WIDTH } from './ToggleButton';

const FULL_HEIGHT = { height: '100%' };
const DETAIL_VIEW_STYLE = { marginLeft: TOGGLE_BUTTON_WIDTH };

export class ControlledSplitView extends Component {
  static propTypes = {
    assistiveTextOpen: PropTypes.string,
    assistiveTextClose: PropTypes.string,
    className: PropTypes.string,
    detail: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    master: PropTypes.node.isRequired,
    masterMaxWidth: PropTypes.string,
    masterMinWidth: PropTypes.string,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    assistiveTextOpen: '',
    assistiveTextClose: '',
    className: null,
    masterMaxWidth: '20rem',
    masterMinWidth: '20rem',
  };

  getMasterViewId = () => `master_view_${this.props.id}`;

  toggle = () => {
    const { isOpen, onOpen, onClose } = this.props;

    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  renderMasterView() {
    const { isOpen, master } = this.props;

    return isOpen && (
      <article
        id={this.getMasterViewId()}
        className="slds-split-view slds-grid slds-grid_vertical slds-grow slds-scrollable_none"
      >
        {master}
      </article>
    );
  }

  render() {
    const {
      assistiveTextOpen,
      assistiveTextClose,
      className,
      detail,
      id,
      isOpen,
      masterMaxWidth,
      masterMinWidth,
    } = this.props;
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
