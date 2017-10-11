import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

class Tab extends React.Component {
  static defaultProps = {
    className: null,
    scoped: false,
  }

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
    scoped: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: this.props.tabs[0].id };
  }

  setActiveTab(id) {
    this.setState({ activeTab: id });
  }

  renderHeader() {
    const { tabs, scoped } = this.props;
    const { activeTab } = this.state;

    return tabs.map((tab, index) => {
      const boundClick = this.setActiveTab.bind(this, tab.id);
      const headerClasses = [
        `slds-tabs_${scoped ? 'scoped' : 'default'}__item`,
        'slds-text-title_caps',
        { 'slds-active': activeTab === tab.id },
      ];

      return (
        <li
          key={tab.id}
          className={cx(headerClasses)}
          title={tab.title}
          role="presentation"
          onClick={boundClick}
        >
          <a
            className={`slds-tabs_${scoped ? 'scoped' : 'default'}__link`}
            role="tab"
            tabIndex={index}
            aria-selected={activeTab === tab.id}
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
    const { tabs, scoped } = this.props;
    const { activeTab } = this.state;

    return tabs.map((tab) => {
      const bodyClasses = [
        `slds-tabs_${scoped ? 'scoped' : 'default'}__content`,
        { 'slds-show': activeTab === tab.id },
        { 'slds-hide': activeTab !== tab.id },
      ];

      return (
        <div
          key={tab.id}
          id={tab.id}
          className={cx(bodyClasses)}
          role="tabpanel"
          aria-labelledby={`${tab.id}__item`}
        >
          {tab.content}
        </div>
      );
    });
  }

  render() {
    const { className, scoped } = this.props;
    const rest = omit(this.props, Object.keys(Tab.propTypes));

    const sldsClasses = [
      `slds-tabs_${scoped ? 'scoped' : 'default'}`,
      className
    ];

    return (
      <div {...rest} className={cx(sldsClasses)}>
        <ul className={`slds-tabs_${scoped ? 'scoped' : 'default'}__nav`} role="tablist">
          {this.renderHeader()}
        </ul>
        {this.renderBody()}
      </div>
    );
  }
}

export default Tab;
