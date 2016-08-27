import React from 'react';
import Quill from 'quill';
import { prefixClasses } from '../../../utils';

class Rte extends React.Component {
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
      this.props.onChange(html);
    });

    this.editor = editor;
  }

  addEditorElem(elem) {
    this.editorElem = elem;
  }

  render() {
    return (
      <div
        className={this.prefix(['docked-composer__input', 'input--bare text-longform', 'grow'], this.props.className)}
        ref={this.addEditorElem}
      >
        <div className="ql-editor" />
      </div>
    );
  }
}

Rte.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};


Rte.propTypes = {
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
   * toolbar element used to construct quill editor
   */
  toolbar: React.PropTypes.any,
};

export default Rte;
