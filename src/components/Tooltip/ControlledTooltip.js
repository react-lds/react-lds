import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';

const ELEMENT_STYLE = { display: 'inline-block' };

export const POSITIONS = [
  'top',
  'top-start',
  'top-end',
  'left',
  'right',
  'bottom',
  'bottom-start',
  'bottom-end',
];

const getNubbin = (position) => {
  const nubbinMap = {
    bottom: 'top',
    left: 'right',
    right: 'left',
    top: 'bottom',
    end: 'right',
    start: 'left',
  };

  return position
    .split('-')
    .map(x => nubbinMap[x])
    .join('-');
};

const getPopperProps = (position, customOffset) => {
  let offset;

  if (!customOffset) {
    if (position === 'left' || position === 'right') {
      offset = '0, 16';
    } else if (position.endsWith('start')) {
      offset = '-16, 16';
    } else if (position.endsWith('end')) {
      offset = '16, 16';
    } else {
      offset = '0, 16';
    }
  } else {
    offset = customOffset;
  }

  return {
    placement: position,
    positionFixed: true,
    modifiers: {
      offset: {
        enabled: true,
        offset,
      },
      flip: {
        enabled: true,
        boundariesElement: 'window',
        padding: 0,
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: 'window',
        padding: 0,
      },
    },
  };
};

class ControlledTooltip extends PureComponent {
  renderPopper = () => {
    const {
      className,
      id,
      isOpen,
      offset,
      position,
      renderTitle,
      title,
    } = this.props;
    const popoverClasses = cx([
      'slds-popover',
      'slds-popover_tooltip',
      `slds-nubbin_${getNubbin(position)}`,
      className,
    ]);

    return (
      <Popper {...getPopperProps(position, offset)}>
        {({ placement, ref, style }) => {
          if (!isOpen) return null;

          return (
            <div
              className={popoverClasses}
              id={id}
              ref={ref}
              role="tooltip"
              style={style}
              data-placement={placement}
            >
              <div className="slds-popover__body">
                {renderTitle ? renderTitle(title) : title}
              </div>
            </div>
          );
        }}
      </Popper>
    );
  }

  render = () => {
    const {
      children,
      id,
      onOpen,
      onClose,
      portalSelector,
    } = this.props;

    const popper = portalSelector
      ? ReactDOM.createPortal(this.renderPopper(), document.querySelector(portalSelector))
      : this.renderPopper();

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div
              aria-describedby={id}
              onMouseEnter={onOpen}
              onFocus={onOpen}
              onMouseLeave={onClose}
              onBlur={onClose}
              ref={ref}
              style={ELEMENT_STYLE}
            >
              {children}
            </div>
          )}
        </Reference>
        {popper}
      </Manager>
    );
  };
}

ControlledTooltip.defaultProps = {
  className: null,
  isOpen: true,
  offset: null,
  onOpen: null,
  onClose: null,
  portalSelector: null,
  position: 'top-start',
  renderTitle: null,
};

ControlledTooltip.propTypes = {
  /**
   * Will be wrapped with a div referencing the tooltip
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional className applied to the slds-popover element
   */
  className: PropTypes.string,
  /**
   * Id linking the popover to the reference
   */
  id: PropTypes.string.isRequired,
  /**
   * Controls whether the popover is visible
   */
  isOpen: PropTypes.bool,
  /**
   * Allows you to set popper offsets manually
   * Usage: https://popper.js.org/popper-documentation.html#modifiers..offset
   */
  offset: PropTypes.string,
  /**
   * Function toggled when hovering or focussing the reference
   */
  onOpen: PropTypes.func,
  /**
   * Function toggled when blurring the reference (when open)
   */
  onClose: PropTypes.func,
  /**
   * If set, use element with this selector as Portal for Popper
   */
  portalSelector: PropTypes.string,
  /**
   * Position of the popover. The popover will move if it hits a window boundary
   */
  position: PropTypes.oneOf(POSITIONS),
  /**
   * Function that renders `title` if set. Is passed the `title` prop
   */
  renderTitle: PropTypes.func,
  /**
   * Static title property
   */
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default ControlledTooltip;
