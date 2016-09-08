import React from 'react';
import Quill from 'quill';
import omit from 'lodash.omit';

import { prefixClasses } from '../../../utils';

class Rte extends React.Component {
  static contextTypes = { cssPrefix: React.PropTypes.string };

  static propTypes = {
    /**
     * class name
     */
    className: React.PropTypes.string,
    /**
     * initial HTML value
     */
    initialValue: React.PropTypes.string,
    /**
     * callback with new HTML value
     */
    onChange: React.PropTypes.func,
    /**
     * callback with new text value
     */
    onChangeText: React.PropTypes.func,
    /**
     * toolbar element used to construct quill editor
     */
    toolbar: React.PropTypes.any,
  };

  constructor(props, context) {
    super(props, context);

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
    this.addEditorElem = this.addEditorElem.bind(this);
  }

  // we must use componentDidUpdate because the toolbar element get's retrieved
  // by a ref function and therefore isn't in the initial props.
  componentDidUpdate() {
    if (!this.props.toolbar || this.editor) {
      return;
    }

    const editor = new Quill(this.editorElem, {
      modules: {
        toolbar: {
          container: this.props.toolbar,
        },
      },
    });
    editor.pasteHTML(0, this.props.initialValue);

    editor.on('text-change', () => {
      const html = this.editorElem.querySelector('.ql-editor').innerHTML;
      const text = editor.getText();
      if (this.props.onChange) {
        this.props.onChange(html);
      }
      if (this.props.onChangeText) {
        this.props.onChangeText(text);
      }
    });

    this.editor = editor;
  }

  addEditorElem(elem) {
    this.editorElem = elem;
  }

  render() {
    const rest = omit(this.props, Object.keys(Rte.propTypes));
    const sldsClasses = [
      'docked-composer__input',
      'input--bare text-longform',
      'grow',
    ];

    return (
      <div
        {...rest}
        className={this.prefix(sldsClasses, this.props.className)}
        ref={this.addEditorElem}
      >
        <div className="ql-editor" />
      </div>
    );
  }
}

export default Rte;
