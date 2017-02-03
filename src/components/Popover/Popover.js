import React from 'react';

import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

import { Button, ButtonIcon } from '../../';

const getThemeName = (themeStr) => {
  if (typeof themeStr === 'string') {
    return themeStr.includes('error') ||
      themeStr.includes('success') ||
      themeStr.includes('info');
  }
  return false;
};

const Popover = (props, { cssPrefix }) => {
  const {
    open,
    header,
    body,
    footer,
    className,
    onClose,
    closeable,
    panels,
    nubbin,
    customLayout,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'popover',
    { 'nubbin--left': !nubbin },
    { [`nubbin--${nubbin}`]: !!nubbin },
    { 'popover--panel': (!!panels && (typeof customLayout === 'undefined' || customLayout === '')) },
    { hide: !open },
  ];
  const sldsClassesHeader = [
    'popover__header',
    { 'theme--warning': customLayout === 'warning' },
    { 'theme--error': customLayout === 'error' },
    { 'theme--success': customLayout === 'success' },
    { 'theme--info': customLayout === 'info' },
  ];
  const sldsClassesBody = [
    { popover__body: (typeof customLayout === 'undefined' || customLayout === '') },
  ];
  const sldsClassesFooter = 'popover__footer';
  const sldsClassesCloseButton = [
    'button--icon-small',
    'float--right',
    'popover__close',
  ];

  const renderHeader = () => {
    let headerContent;
    let borderRadius;
    if (!!panels && (typeof customLayout !== 'undefined') && customLayout !== '') {
      headerContent = (<h2 className={prefix(['text-heading--medium', 'p-around--x-small'])}>{header}</h2>);
      borderRadius = {
        borderTopLeftRadius: 'calc(0.25rem - 1px)',
        borderTopRightRadius: 'calc(0.25rem - 1px)',
      };
    } else {
      headerContent = header;
    }
    return (
      <header className={prefix(sldsClassesHeader)} style={borderRadius}>
        {headerContent}
      </header>
    );
  };

  const renderBody = () => (
    <div className={prefix(sldsClassesBody)}>
      {body}
    </div>
  );

  const renderFooter = () => (
    <footer className={prefix(sldsClassesFooter)}>
      <p>{footer}</p>
    </footer>
  );

  const renderCloseButton = () => {
    const invertIcon = customLayout ? getThemeName(customLayout) : getThemeName(className);
    return (
      <Button
        icon
        icon-inverse={invertIcon}
        className={prefix(sldsClassesCloseButton)}
        onClick={onClose}
      >
        <ButtonIcon sprite="utility" icon="close" />
      </Button>
    );
  };

  return (
    <section
      {...rest}
      className={prefix(sldsClasses, className)}
      role="dialog"
      onBlur={onClose}
    >
      {closeable ? renderCloseButton() : null}
      {header ? renderHeader() : null}
      {body ? renderBody() : null}
      {footer ? renderFooter() : null}
    </section>
  );
};

Popover.contextTypes = {
  cssPrefix: React.PropTypes.string,
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
