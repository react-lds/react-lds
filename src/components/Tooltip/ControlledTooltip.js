import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';

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

const getPopperProps = (position) => {
  let offset;

  if (position === 'left' || position === 'right') {
    offset = '0, 16';
  } else if (position.endsWith('start')) {
    offset = '-16, 16';
  } else if (position.endsWith('end')) {
    offset = '16, 16';
  } else {
    offset = '0, 16';
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

const ControlledTooltip = (props) => {
  const {
    children,
    className,
    id,
    isOpen,
    onOpen,
    onClose,
    position,
    renderTitle,
    title,
  } = props;

  const popoverClasses = cx([
    'slds-popover',
    'slds-popover_tooltip',
    `slds-nubbin_${getNubbin(position)}`,
    className,
  ]);

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
            style={{ display: 'inline-block' }}
          >
            {children}
          </div>
        )}
      </Reference>
      {isOpen && (
        <Popper {...getPopperProps(position)}>
          {({ ref, style }) => {
            if (!isOpen) return null;

            return (
              <div
                className={popoverClasses}
                id={id}
                ref={ref}
                role="tooltip"
                style={style}
              >
                <div className="slds-popover__body">
                  {renderTitle ? renderTitle(title) : title}
                </div>
              </div>
            );
          }}
        </Popper>
      )}
    </Manager>
  );
};

ControlledTooltip.defaultProps = {
  className: null,
  isOpen: true,
  onOpen: null,
  onClose: null,
  position: 'top-start',
  renderTitle: null,
  title: null,
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
   * Function toggled when hovering or focussing the reference
   */
  onOpen: PropTypes.func,
  /**
   * Function toggled when blurring the reference (when open)
   */
  onClose: PropTypes.func,
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
