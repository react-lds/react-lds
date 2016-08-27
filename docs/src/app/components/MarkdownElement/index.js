import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

require('./mui-github-markdown.css');

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
    padding: '0 10px',
  },
};

class MarkdownElement extends Component {
  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: (code, lang) => hljs.highlight(lang, code).value,
    });
  }

  render() {
    const {
      style,
      text,
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <div
        style={Object.assign({}, styles.root, style)}
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    );
    /* eslint-enable */
  }
}

MarkdownElement.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

MarkdownElement.defaultProps = {
  text: '',
};


export default MarkdownElement;
