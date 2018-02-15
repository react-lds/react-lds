import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';
import { THEMES, getThemeClass } from '../../utils';

import { IconButton } from '../../';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
const propTypes = {
  /**
   * Open popover
   */
  open: PropTypes.bool,
  /**
   * Show close button
   */
  closeable: PropTypes.bool,
  /**
   * onClose handler
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Popover header content
   */
  header: PropTypes.node,
  /**
   * Popover body content
   */
  body: PropTypes.node,
  /**
   * Popover footer content
   */
  footer: PropTypes.node,
  /**
   * Additional css classes
   */
  className: PropTypes.string,
  /**
   * Optional panel layout
   */
  panels: PropTypes.bool,
  /**
   * Optional position of nubbin. Positions: left, left-top, left-bottom,
   * top-left, top-right, right-top, right-bottom, bottom-left, bottom-right
   */
  nubbin: PropTypes.oneOf([
    'left',
    'left-top',
    'left-bottom',
    'top-left',
    'top-right',
    'right-top',
    'right-bottom',
    'bottom-left',
    'bottom-right',
  ]),
  /**
   * Optional custom Header theme. Themes: warning, error, success, info
   */
  customHeaderTheme: PropTypes.oneOf(THEMES),
  /**
   * themes: alt-inverse, default, error, info, inverse, offline, shade, success, warning
   */
  theme: PropTypes.oneOf(THEMES),
};

class Popover extends Component {
  static propTypes = propTypes

  static defaultProps = {
    body: null,
    header: null,
    footer: null,
    className: null,
    customHeaderTheme: null,
    open: false,
    closeable: true,
    panels: false,
    nubbin: 'bottom-left',
    theme: null,
  }

  static shouldInvertIcon(themeStr) {
    if (typeof themeStr === 'string') {
      return themeStr.includes('error') ||
        themeStr.includes('success') ||
        themeStr.includes('info') ||
        themeStr.includes('offline');
    }
    return false;
  }

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });
  }

  renderHeader() {
    const { header, panels, customHeaderTheme } = this.props;
    const headerClasses = [
      'slds-popover__header',
      getThemeClass(customHeaderTheme),
    ];

    let headerContent;
    let borderRadius;
    if (panels && !customHeaderTheme) {
      headerContent = (<h2 className="slds-text-heading_small slds-p-around_xxx-small">{header}</h2>);
      borderRadius = {
        borderTopLeftRadius: 'calc(0.25rem - 1px)',
        borderTopRightRadius: 'calc(0.25rem - 1px)',
      };
    } else {
      headerContent = header;
    }

    return (
      <header className={cx(headerClasses)} style={borderRadius}>
        {headerContent}
      </header>
    );
  }

  renderBody() {
    const { body } = this.props;

    return (
      <div className="slds-popover__body">
        {body}
      </div>
    );
  }

  renderFooter() {
    const { footer } = this.props;

    return (
      <footer className="slds-popover__footer">
        <p>{footer}</p>
      </footer>
    );
  }

  renderCloseButton() {
    const { onClose, customHeaderTheme, theme } = this.props;
    const invertIcon = Popover.shouldInvertIcon(customHeaderTheme || theme);
    const closeButtonClasses = [
      'slds-float_right',
      'slds-popover__close',
    ];

    return (
      <IconButton
        flavor={invertIcon ? 'inverse' : null}
        className={cx(closeButtonClasses)}
        onClick={onClose}
        size="small"
        sprite="utility"
        icon="close"
      />
    );
  }

  render() {
    const { className, closeable, open, customHeaderTheme, nubbin, panels, header, body, footer, theme } = this.props;
    const rest = omit(this.props, Object.keys(propTypes));

    const sldsClasses = [
      'slds-popover',
      { [`slds-nubbin_${nubbin}`]: !!nubbin },
      { 'slds-popover_panel': (panels && !customHeaderTheme) },
      { 'slds-hide': !open },
      getThemeClass(theme),
      className,
    ];

    return (
      <section
        {...rest}
        className={cx(sldsClasses)}
        role="dialog"
      >
        {closeable ? this.renderCloseButton() : null}
        {header ? this.renderHeader() : null}
        {body ? this.renderBody() : null}
        {footer ? this.renderFooter() : null}
      </section>
    );
  }
}

export default Popover;
