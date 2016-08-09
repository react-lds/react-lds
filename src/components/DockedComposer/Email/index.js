import React from 'react';

import prefixable from './../../../decorators/prefixable';
import { MediaObject } from './../../MediaObject';
import { Icon } from './../../Icon';
import { Button, ButtonIcon } from './../../Button';
import { Lookup } from './../../Lookup';
import { Grid } from './../../Grid';

import Toolbar from './Toolbar';
import Rte from './Rte';

export class Email extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({
      to: [],
      cc: [],
      bcc: [],
      subject: '',
      hideCc: true,
      hideBcc: true,
    }, this.props.value);
    this.addToolbar = this.addToolbar.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeRecipients = this.onChangeRecipients.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onChangeHtml = this.onChangeHtml.bind(this);
  }

  onChange(params) {
    const { to, cc, bcc, subject } = params;
    const attachments = this.props.value.attachments;
    const content = params.content || this.content;
    this.props.onChange({ content, to, cc, bcc, subject, attachments });
  }

  onChangeHtml(value) {
    this.content = value;
    this.onChange(this.state);
  }

  onChangeSubject(element) {
    const subject = element.target.value;
    this.setState({ subject });
    this.onChange(Object.assign({}, this.state, { subject }));
  }

  onChangeRecipients(recipientType) {
    return (recipients) => {
      const update = {};
      update[recipientType] = recipients;
      this.setState(update);
      this.onChange(Object.assign({}, this.state, update));
    };
  }

  toggle(target) {
    return () => {
      const update = {};
      update[target] = !this.state[target];
      this.setState(update);
    };
  }

  addToolbar(toolbarElem) {
    this.setState({ toolbarElem });
  }


  removeAttachment(index) {
    return () => {
      const attachments = this.props.value.attachments;
      attachments.splice(index, 1);
      this.setState({ attachments });
      this.onChange(Object.assign({}, this.state, attachments));
    };
  }

  renderAttachments() {
    if (!Array.isArray(this.props.value.attachments)) {
      return null;
    }

    return (
      <ul className={this.props.prefix(['has-dividers--bottom-space'])}>
        {this.props.value.attachments.map((attachment, index) =>
          <li className={this.props.prefix(['item'])} key={index}>
            <MediaObject
              figureLeft={<Icon sprite="doctype" icon={attachment.icon} />}
              figureRight={
                <Button icon onClick={this.removeAttachment(index)}>
                  <ButtonIcon sprite="utility" icon="delete" />
                </Button>
              }
            >
              {attachment.name}
            </MediaObject>
          </li>
        )}
      </ul>
    );
  }

  renderFooterButtons() {
    return this.props.footerButtons.map((button) =>
      <Button key={button.key} onClick={button.onClick} variation="icon-container" icon>
        <ButtonIcon sprite="utility" icon={button.icon} />
      </Button>
    );
  }

  render() {
    const emailIcon = <Icon sprite="standard" icon="email" size="small" />;

    return (
      <div
        role="dialog"
        aria-labelled-by="dialog-heading-id"
        className={this.props.prefix(['docked-composer', 'grid', 'grid--vertical', 'nowrap', 'is-open'])}
      >
        <header className={this.props.prefix(['docked-composer__header', 'grid', 'grid--align-spread', 'shrink-none'])}>
          <MediaObject center figureLeft={emailIcon}>{this.props.header}</MediaObject>
          <div className={this.props.prefix(['docked-composer__actions'])}>
            <Button variation="icon-inverse" icon>
              <ButtonIcon sprite="utility" icon="minimize_window" />
            </Button>
          </div>
        </header>
        <div
          className={this.props.prefix([
            'docked-composer__body',
            'docked-composer__body--email',
            'col',
            'grid',
            'grid--vertical',
            'nowrap',
          ])}
        >
          <Grid align-spread className={this.props.prefix(['shrink-none'])}>
            <Lookup
              emailLayout
              multi
              loadOnFocus
              loadOnMount
              initialSelection={this.state.to}
              id={`${this.props.id}-lookup`}
              listLabel={this.props.loadRecipientsLabel}
              inputLabel="To"
              load={this.props.loadRecipients}
              onChange={this.onChangeRecipients('to')}
            />
            <div className={this.props.prefix(['grid', 'shrink-none', 'p-horizontal--small', 'align-top'])}>
              <Button title="Cc" onClick={this.toggle('hideCc')} />
              <Button title="Bcc" onClick={this.toggle('hideBcc')} />
            </div>
          </Grid>
          <Grid className={this.props.prefix([{ hide: this.state.hideCc }, 'shrink-none'])}>
            <Lookup
              emailLayout
              multi
              loadOnFocus
              loadOnMount
              initialSelection={this.state.cc}
              id={`${this.props.id}-cc-lookup`}
              listLabel={this.props.loadRecipientsLabel}
              inputLabel="Cc"
              load={this.props.loadRecipients}
              onChange={this.onChangeRecipients('cc')}
            />
          </Grid>
          <Grid className={this.props.prefix([{ hide: this.state.hideBcc }, 'shrink-none'])}>
            <Lookup
              emailLayout
              multi
              loadOnFocus
              loadOnMount
              initialSelection={this.state.bcc}
              id={`${this.props.id}-bcc-lookup`}
              listLabel={this.props.loadRecipientsLabel}
              inputLabel="Bcc"
              load={this.props.loadRecipients}
              onChange={this.onChangeRecipients('bcc')}
            />
          </Grid>
          <label
            className={this.props.prefix(['assistive-text'])}
            htmlFor={`${this.props.id}-subject`}
          >
            Enter subject
          </label>
          <input
            id={`${this.props.id}-subject`}
            className={this.props.prefix(['input'])}
            placeholder={this.props.subjectPlaceholder}
            value={this.state.subject}
            onChange={this.onChangeSubject}
          />

          <div ref={this.addToolbar}>
            <Toolbar />
          </div>
          <Rte
            toolbar={this.state.toolbarElem}
            initialValue={this.props.value.initialContent}
            onChange={this.onChangeHtml}
          />
          {this.renderAttachments()}
        </div>
        <footer className={this.props.prefix(['docked-composer__footer', 'shrink-none'])}>
          <div
            className={this.props.prefix([
              'float--right',
              'grid',
              'grid--align-end',
              'size--1-of-2',
              'text-align--right',
            ])}
          >
            {this.renderFooterButtons()}
            <Button variation="brand" onClick={this.props.onSend}>{this.props.sendLabel}</Button>
          </div>
        </footer>
      </div>
    );
  }
}

Email.defaultProps = {
  header: 'New Email',
  sendLabel: 'Send',
  subjectPlaceholder: 'Enter subject',
};

Email.propTypes = {
  /*
   * header title
   */
  header: React.PropTypes.string,
  /**
   * value. Attachment icons will be taken from doctype icons
   */
  value: React.PropTypes.shape({
    initialContent: React.PropTypes.string,
    to: React.PropTypes.array,
    cc: React.PropTypes.array,
    bcc: React.PropTypes.array,
    subject: React.PropTypes.string,
    attachments: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        icon: React.PropTypes.string,
        name: React.PropTypes.string,
      })
    ),
  }),
  /**
   * placeholder for subject input element
   */
  subjectPlaceholder: React.PropTypes.string,
  /**
   * callback, called whenever something changes, which can be:
   *   - to
   *   - cc
   *   - bcc
   *   - subject
   *   - content
   *   - attachments
   * those are keys in the callback object
   */
  onChange: React.PropTypes.func,
  /**
   * html id
   */
  id: React.PropTypes.string.isRequired,
  /**
   * additional buttons before the Send button in the footer,
   * will always be taken from utility sprite
   */
  footerButtons: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      icon: React.PropTypes.string,
      key: React.PropTypes.string,
      onClick: React.PropTypes.func,
    })
  ),
  /**
   * onClick handler for the send button
   */
  onSend: React.PropTypes.func,
  /**
   * label for send button
   */
  sendLabel: React.PropTypes.string,
  /**
   * load function to search for contacts
   */
  loadRecipients: React.PropTypes.func.isRequired,
  /**
   * Help text displayed in lookup directive
   */
  loadRecipientsLabel: React.PropTypes.string,
  /**
   * prefixable function
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Email);
