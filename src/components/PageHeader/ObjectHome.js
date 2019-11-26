import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ClickOutside } from '../ClickOutside';
import { ControlledMenu } from '../Menu';
import { IconButton } from '../Button';
import { MediaObject } from '../MediaObject';
import { Icon } from '../Icon';
import { Grid } from '../Grid';

class ObjectHome extends Component {
  static propTypes = {
    /**
     * bottom Buttons or ButtonGroup(s)
     */
    bottomButtons: PropTypes.node,
    /**
     * Additional PageHeader rows
     */
    children: PropTypes.node,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * Whether the menu closes automatically on an outside click
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * icon and sprite
     */
    icon: PropTypes.shape({
      sprite: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
    /**
     * info that is displayed below the title
     */
    info: PropTypes.string,
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
     * title headline. Must be one or more instances of MenuItem/MenuSubHeader
     */
    titleMenu: PropTypes.node,
    /**
     * optional title menu action that gets displayed beside the header menu.
     *
     * TODO The SLDS does not yet provide the specifications for the pin button,
     * once it does the structure should be updated accordingly.
     */
    titleMenuAction: PropTypes.node,
    /**
     * top Buttons or ButtonGroup(s)
     */
    topButtons: PropTypes.node,
  };

  static defaultProps = {
    bottomButtons: null,
    children: null,
    className: null,
    closeOnClickOutside: false,
    icon: null,
    info: null,
    titleMenu: null,
    titleMenuAction: null,
    topButtons: null,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { menuIsOpen: false };
  }

  onClickOutside = () => {
    this.setState({ menuIsOpen: false });
  }

  toggleMenu = () => this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));

  openMenu = () => {
    this.setState({ menuIsOpen: true });
  }

  render() {
    const {
      bottomButtons,
      children,
      className,
      closeOnClickOutside,
      icon,
      info,
      recordType,
      title,
      titleMenu,
      titleMenuAction,
      topButtons,
      ...rest
    } = this.props;
    const { menuIsOpen } = this.state;

    const sldsClasses = ['slds-page-header', className];

    const titleClasses = [
      'slds-page-header__title',
      'slds-truncate',
      { 'slds-text-link_faux': titleMenu },
    ];

    return (
      <div {...rest} className={cx(sldsClasses)}>
        <div className="slds-page-header__row">
          <div className="slds-page-header__col-title">
            <MediaObject
              figureLeft={icon ? (
                <Icon
                  sprite={icon.sprite}
                  icon={icon.icon}
                  svgClassName="slds-page-header__icon"
                />
              ) : null}
            >
              <div className="slds-page-header__name">
                <div className="slds-page-header__name-title">
                  <h1>
                    <span>{recordType}</span>
                    <span
                      className={cx(titleClasses)}
                      onClick={titleMenu && this.toggleMenu}
                      title={title}
                    >
                      {title}
                    </span>
                  </h1>
                </div>
                {titleMenu && (
                  <>
                    <ClickOutside
                      className="slds-page-header__name-switcher"
                      onClickOutside={this.onClickOutside}
                      condition={closeOnClickOutside && menuIsOpen}
                    >
                      <ControlledMenu
                        button={(
                          <IconButton
                            container
                            icon="down"
                            size="small"
                            sprite="utility"
                            onClick={this.toggleMenu}
                          />
                        )}
                        isOpen={this.state.menuIsOpen}
                      >
                        {titleMenu}
                      </ControlledMenu>
                    </ClickOutside>
                    {titleMenuAction && (
                      <Grid
                        className="slds-p-left_xx-small"
                        verticalAlign="end"
                      >
                        {titleMenuAction}
                      </Grid>
                    )}
                  </>
                )}
              </div>
            </MediaObject>
          </div>
          {topButtons && (
            <div className="slds-page-header__col-actions">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  {topButtons}
                </div>
              </div>
            </div>
          )}
        </div>
        {(info || bottomButtons) && (
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-meta">
              {info && (
                <p className="slds-page-header__meta-text">{info}</p>
              )}
            </div>
            <div className="slds-page-header__col-controls">
              {bottomButtons && (
                <div className="slds-page-header__controls">{bottomButtons}</div>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    );
  }
}

export default ObjectHome;
