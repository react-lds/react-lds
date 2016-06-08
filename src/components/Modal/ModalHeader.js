import React from 'react';
import { Button, ButtonIcon } from 'react-lds';
import { prefixable } from '../../decorators';

export class ModalHeader extends React.Component {
  getCloseButton() {
    return (
      <Button sldsClasses={['modal__close']} variation="icon-inverse" size="large">
        <ButtonIcon sprite="action" icon="close" />
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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the modal content
   */
  children: React.PropTypes.node,
  /**
   * the heading id. gets passed down from `Modal`
   */
  label: React.PropTypes.string,
  /**
   * renders a prompt header. Gets passed down from `Modal prompt`
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
};

export default prefixable(ModalHeader);
