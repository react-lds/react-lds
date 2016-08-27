import React from 'react';
import { Button, ButtonIcon } from '../../index';
import { prefixClasses } from '../../utils';

const ModalHeader = (props, { cssPrefix }) => {
  const { children, className, label, prompt, tagline, title, uncloseable, onClickClose, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const getCloseButton = () => (
    <Button onClick={onClickClose} className={prefix('modal__close')} icon-inverse size="large">
      <ButtonIcon sprite="action" icon="close" size="large" />
      <span className={prefix('assistive-text')}>Close</span>
    </Button>
  );

  const getTagline = () => (
    <p className={prefix('m-top--x-small')}>
      {tagline}
    </p>
  );

  const getTitle = () => {
    const titleID = label || null;
    return (
      <h2 id={titleID} className={prefix('text-heading--medium')}>
        {title}
      </h2>
    );
  };

  const isEmpty = !children && !tagline && !title;

  const sldsClasses = [
    'modal__header',
    { 'modal__header--empty': isEmpty },
    { 'theme--error': !!prompt },
    { 'theme--alert-texture': !!prompt },
  ];

  return (
    <div {...rest} className={prefix(sldsClasses, className)}>
      {!uncloseable ? getCloseButton() : null}
      {children}
      {title ? getTitle() : null}
      {tagline ? getTagline() : null}
    </div>
  );
};

ModalHeader.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

ModalHeader.propTypes = {
  /**
   * modal header content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * heading id (gets passed down from `Modal prompt`)
   */
  label: React.PropTypes.string,
  /**
   * render header as a prompt header (gets passed down from `Modal prompt`)
   */
  prompt: React.PropTypes.bool,
  /**
   * (optional) modal tagline
   */
  tagline: React.PropTypes.node,
  /**
   * (optional) modal title
   */
  title: React.PropTypes.string,
  /**
   * hides the close-button (gets passed down from `Modal prompt`)
   */
  uncloseable: React.PropTypes.bool,
  /**
   * triggered when the user clicks the close button
   */
  onClickClose: React.PropTypes.func,
};

export default ModalHeader;
