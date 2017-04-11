import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { prefixClasses } from '../../utils';

class Tab extends React.Component {
  static contextTypes = { cssPrefix: PropTypes.string };
  static defaultProps = { variation: 'default' }

  static propTypes = {
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * array of tabs
     */
    tabs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })).isRequired,
    /**
     * scoped has a border around the tab
     */
    variation: PropTypes.oneOf(['default', 'scoped']),
  };

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: this.props.tabs[0].id };
    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
  }

  setActiveTab(id) {
    this.setState({ activeTab: id });
  }

  renderHeader() {
    return this.props.tabs.map((tab, index) => {
      const boundClick = this.setActiveTab.bind(this, tab.id);
      const classes = [
        `tabs--${this.props.variation}__item`,
        'text-title--caps',
        { active: this.state.activeTab === tab.id },
      ];

      return (
        <li
          key={tab.id}
          className={this.prefix(classes)}
          title={tab.title}
          role="presentation"
          onClick={boundClick}
        >
          <a
            className={this.prefix(`tabs--${this.props.variation}__link`)}
            role="tab"
            tabIndex={index}
            aria-selected={this.state.activeTab === tab.id}
            aria-controls={tab.id}
            id={`${tab.id}__item`}
          >
            {tab.title}
          </a>
        </li>
      );
    });
  }

  renderBody() {
    return this.props.tabs.map((tab) => {
      const classes = [
        `tabs--${this.props.variation}__content`,
        { show: this.state.activeTab === tab.id },
        { hide: this.state.activeTab !== tab.id },
      ];

      return (
        <div
          key={tab.id}
          id={tab.id}
          className={this.prefix(classes)}
          role="tabpanel"
          aria-labelledby={`${tab.id}__item`}
        >
          {tab.content}
        </div>
      );
    });
  }

  render() {
    const rest = omit(this.props, Object.keys(Tab.propTypes));

    return (
      <div {...rest} className={this.prefix(`tabs--${this.props.variation}`, this.props.className)}>
        <ul className={this.prefix(`tabs--${this.props.variation}__nav`)} role="tablist">
          {this.renderHeader()}
        </ul>
        {this.renderBody()}
      </div>
    );
  }
}

export default Tab;
