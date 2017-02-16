import React from 'react';
import omit from 'lodash.omit';

import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

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

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
  }

  renderHeader() {
    const { header, panels, customLayout } = this.props;
    const sldsClassesHeader = [
      'popover__header',
      { 'theme--warning': customLayout === 'warning' },
      { 'theme--error': customLayout === 'error' },
      { 'theme--success': customLayout === 'success' },
      { 'theme--info': customLayout === 'info' },
    ];

    let headerContent;
    let borderRadius;
    if (!!panels && (typeof customLayout !== 'undefined') && customLayout !== '') {
      headerContent = (<h2 className={this.prefix(['text-heading--medium', 'p-around--x-small'])}>{header}</h2>);
      borderRadius = {
        borderTopLeftRadius: 'calc(0.25rem - 1px)',
        borderTopRightRadius: 'calc(0.25rem - 1px)',
      };
    } else {
      headerContent = header;
    }

    return (
      <header className={this.prefix(sldsClassesHeader)} style={borderRadius}>
        {headerContent}
      </header>
    );
  }

  renderBody() {
    const { body, customLayout } = this.props;
    const sldsClassesBody = [
      { popover__body: (typeof customLayout === 'undefined' || customLayout === '') },
    ];

    return (
      <div className={this.prefix(sldsClassesBody)}>
        {body}
      </div>
    );
  }

  renderFooter() {
    const { footer } = this.props;
    const sldsClassesFooter = 'popover__footer';

    return (
      <footer className={this.prefix(sldsClassesFooter)}>
        <p>{footer}</p>
      </footer>
    );
  }

  renderCloseButton() {
    const { onClose, className, customLayout } = this.props;
    const sldsClassesCloseButton = [
      'button--icon-small',
      'float--right',
      'popover__close',
    ];
    const invertIcon = customLayout ? Popover.getThemeName(customLayout) : Popover.getThemeName(className);

    return (
      <Button
        icon
        icon-inverse={invertIcon}
        className={this.prefix(sldsClassesCloseButton)}
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
      'popover',
      { [`nubbin--${nubbin}`]: !!nubbin },
      { 'popover--panel': (!!panels && (typeof customLayout === 'undefined' || customLayout === '')) },
      { hide: !open },
    ];

    return (
      <section
        {...rest}
        className={this.prefix(sldsClasses, className)}
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

Popover.contextTypes = { cssPrefix: React.PropTypes.string };

Popover.defaultProps = {
  open: false,
  closeable: true,
  panels: false,
  nubbin: 'bottom-left',
};

Popover.propTypes = {
  /**
   * Open popover
   */
  open: React.PropTypes.bool,
  /**
   * Show close button
   */
  closeable: React.PropTypes.bool,
  /**
   * onClose handler
   */
  onClose: React.PropTypes.func.isRequired,
  /**
   * Popover header content
   */
  header: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  /**
   * Popover body content
   */
  body: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  /**
   * Popover footer content
   */
  footer: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  /**
   * Additional css classes
   */
  className: React.PropTypes.string,
  /**
   * Optional panel layout
   */
  panels: React.PropTypes.bool,
  /**
   * Optional position of nubbin
   */
  nubbin: React.PropTypes.string,
  /**
   * Optional custom layout (warning, error, success, info)
   */
  customLayout: React.PropTypes.string,
};

export default themeable(Popover);
