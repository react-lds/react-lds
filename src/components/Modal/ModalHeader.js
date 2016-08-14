import React from 'react';
import { Button, ButtonIcon } from '../../index';
import { prefixable } from '../../decorators';

export class ModalHeader extends React.Component {
  getCloseButton() {
    return (
      <Button sldsClasses={['modal__close']} variation="icon-inverse" size="large">
        <ButtonIcon sprite="action" icon="close" size="large" />
        <span className={this.props.prefix(['assistive-text'])}>Close</span>
      </Button>
    );
  }

  getTagline() {
    return (
      <p className={this.props.prefix(['m-top--x-small'])}>
        {this.props.tagline}
      </p>
    );
  }

  getTitle() {
    const titleID = this.props.label || null;
    return (
      <h2 id={titleID} className={this.props.prefix(['text-heading--medium'])}>
        {this.props.title}
      </h2>
    );
  }

  render() {
    const isEmpty = !this.props.children && !this.props.tagline && !this.props.title;

    const sldsClasses = [
      'modal__header',
      { 'modal__header--empty': isEmpty },
      { 'theme--error': !!this.props.prompt },
      { 'theme--alert-texture': !!this.props.prompt },
    ];

    return (
      <div className={this.props.prefix(sldsClasses, this.props)}>
        {!this.props.uncloseable ? this.getCloseButton() : null}
        {this.props.children}
        {this.props.title ? this.getTitle() : null}
        {this.props.tagline ? this.getTagline() : null}
      </div>
    );
  }
}

ModalHeader.propTypes = {
  /**
   * modal header content
   */
  children: React.PropTypes.node,
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
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(ModalHeader);
