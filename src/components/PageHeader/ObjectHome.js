import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';

import {
  ClickOutside,
  Column,
  Grid,
  Menu,
} from '../../';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
const propTypes = {
  /**
   * bottom Buttons or ButtonGroup(s)
   */
  bottomButtons: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * info that is displayed below the title
   */
  info: PropTypes.string,
  /**
   * Whether the menu closes automatically on an outside click
   */
  closeOnClickOutside: PropTypes.bool,
  /**
   * record type header above the title
   */
  recordType: PropTypes.string.isRequired,
  /**
   * title
   */
  title: PropTypes.string.isRequired,
  /**
   * dropdown header menu that also get's triggered when a user clicks on the
   * title headline. Must be one or more instances of MenuDropdownList
   */
  titleMenu: PropTypes.node,
  /**
   * top Buttons or ButtonGroup(s)
   */
  topButtons: PropTypes.node,
};

export class ObjectHomeRaw extends Component {
  static propTypes = propTypes;

  static defaultProps = {
    bottomButtons: null,
    className: null,
    closeOnClickOutside: false,
    info: null,
    titleMenu: null,
    topButtons: null,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { menuIsOpen: false };
  }

  onClickOutside = () => {
    this.setState({ menuIsOpen: false });
  }

  openMenu = () => {
    this.setState({ menuIsOpen: true });
  }

  render() {
    const {
      bottomButtons,
      className,
      closeOnClickOutside,
      info,
      recordType,
      title,
      titleMenu,
      topButtons,
    } = this.props;
    const { menuIsOpen } = this.state;

    const rest = omit(this.props, Object.keys(propTypes));

    const sldsClasses = [
      'slds-page-header',
      className,
    ];

    const titleClasses = [
      { 'slds-type-focus': !!titleMenu },
      'slds-no-space'
    ];

    const condition = closeOnClickOutside && menuIsOpen;

    return (
      <div {...rest} className={cx(sldsClasses)} role="banner">
        <Grid>
          <Column className="slds-has-flexi-truncate">
            <p className="slds-text-title_caps">{recordType}</p>
            <Grid>
              <Grid className={cx(titleClasses)}>
                <h1
                  onClick={titleMenu && this.openMenu}
                  className="slds-page-header__title slds-truncate"
                  title={title}
                >
                  {title}
                </h1>
                {titleMenu && (
                  <ClickOutside onClickOutside={this.onClickOutside} condition={condition}>
                    <Menu
                      button={{ sprite: 'utility', icon: 'down', noBorder: true }}
                      isOpen={this.state.menuIsOpen}
                    >
                      {titleMenu}
                    </Menu>
                  </ClickOutside>
                )}
              </Grid>
            </Grid>
          </Column>
          <Column className="slds-no-flex slds-grid slds-align-top">
            {topButtons}
          </Column>
        </Grid>
        <Grid>
          <Column className="slds-align-bottom">
            <p className="slds-page-header__info slds-text-body_small">{info}</p>
          </Column>
          <Column className="slds-align-bottom slds-no-flex slds-grid">{bottomButtons}</Column>
        </Grid>
      </div>
    );
  }
}

const ObjectHome = props => <ObjectHomeRaw closeOnClickOutside {...props} />;

export default ObjectHome;
