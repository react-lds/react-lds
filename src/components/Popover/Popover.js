import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

import { Button, ButtonIcon } from '../../';

export class Popover extends React.Component {
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
      { 'slds-theme_warning': customHeaderTheme === 'warning' },
      { 'slds-theme_error': customHeaderTheme === 'error' },
      { 'slds-theme_success': customHeaderTheme === 'success' },
      { 'slds-theme_info': customHeaderTheme === 'info' },
    ];

    let headerContent;
    let borderRadius;
    if (!!panels && (typeof customHeaderTheme !== 'undefined') && customHeaderTheme !== '') {
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
    const invertIcon =
      customHeaderTheme ? Popover.shouldInvertIcon(customHeaderTheme) : Popover.shouldInvertIcon(theme);
    const closeButtonClasses = [
      'slds-button_icon-small',
      'slds-float_right',
      'slds-popover__close',
      { 'slds-button_icon-inverse': invertIcon },
    ];

    return (
      <Button
        flavor={['icon', invertIcon ? 'icon-inverse' : null]}
        className={cx(closeButtonClasses)}
        onClick={onClose}
      >
        <ButtonIcon sprite="utility" icon="close" />
      </Button>
    );
  }

  render() {
    const { className, closeable, open, customHeaderTheme, nubbin, panels, header, body, footer, theme } = this.props;
    const rest = omit(this.props, Object.keys(Popover.propTypes));

    const sldsClasses = [
      'slds-popover',
      { [`slds-nubbin_${nubbin}`]: !!nubbin },
      { 'slds-popover_panel': (!!panels && (typeof customHeaderTheme === 'undefined' || customHeaderTheme === '')) },
      { 'slds-hide': !open },
      { [`slds-theme_${theme}`]: !!theme },
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

Popover.defaultProps = {
  body: null,
  header: null,
  footer: null,
  className: null,
  customHeaderTheme: undefined,
  open: false,
  closeable: true,
  panels: false,
  nubbin: 'bottom-left',
  theme: null,
};

Popover.propTypes = {
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
   * Optional position of nubbin
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
   * Optional custom layout
   */
  customHeaderTheme: PropTypes.oneOf([
    'warning',
    'error',
    'success',
    'info']),
  /**
   * theme
   */
  theme: PropTypes.oneOf([
    'alt-inverse',
    'default',
    'error',
    'info',
    'inverse',
    'offline',
    'shade',
    'success',
    'warning',
  ]),
};

export default Popover;
