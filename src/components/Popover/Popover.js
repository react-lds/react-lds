import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

import { themeable } from '../../decorators';

import { Button, ButtonIcon } from '../../';

export class Popover extends React.Component {

  static getThemeName(themeStr) {
    if (typeof themeStr === 'string') {
      return themeStr.includes('error') ||
        themeStr.includes('success') ||
        themeStr.includes('info');
    }
    return false;
  }

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });
  }

  renderHeader() {
    const { header, panels, customLayout } = this.props;
    const headerClasses = [
      'slds-popover__header',
      { 'slds-theme--warning': customLayout === 'warning' },
      { 'slds-theme--error': customLayout === 'error' },
      { 'slds-theme--success': customLayout === 'success' },
      { 'slds-theme--info': customLayout === 'info' },
    ];

    let headerContent;
    let borderRadius;
    if (!!panels && (typeof customLayout !== 'undefined') && customLayout !== '') {
      headerContent = (<h2 className="slds-text-heading--small slds-p-around--xxx-small">{header}</h2>);
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
    const { body, customLayout } = this.props;
    const bodyClasses = [
      { 'slds-popover__body': (typeof customLayout === 'undefined' || customLayout === '') },
    ];

    return (
      <div className={cx(bodyClasses)}>
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
    const { onClose, className, customLayout } = this.props;
    const closeButtonClasses = [
      'slds-button--icon-small',
      'slds-float--right',
      'slds-popover__close',
    ];
    const invertIcon = customLayout ? Popover.getThemeName(customLayout) : Popover.getThemeName(className);

    return (
      <Button
        icon
        icon-inverse={invertIcon}
        className={cx(closeButtonClasses)}
        onClick={onClose}
      >
        <ButtonIcon sprite="utility" icon="close" />
      </Button>
    );
  }

  render() {
    const { className, closeable, open, customLayout, nubbin, panels, header, body, footer } = this.props;
    const rest = omit(this.props, Object.keys(Popover.propTypes));

    const sldsClasses = [
      'slds-popover',
      { [`slds-nubbin--${nubbin}`]: !!nubbin },
      { 'slds-popover--panel': (!!panels && (typeof customLayout === 'undefined' || customLayout === '')) },
      { 'slds-hide': !open },
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
  customLayout: undefined,
  open: false,
  closeable: true,
  panels: false,
  nubbin: 'bottom-left',
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
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Popover body content
   */
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Popover footer content
   */
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
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
  nubbin: PropTypes.string,
  /**
   * Optional custom layout (warning, error, success, info)
   */
  customLayout: PropTypes.string,
};

export default themeable(Popover);
