import React from 'react';

import prefixable from './../../decorators/prefixable';
import enhanceWithClickOutside from 'react-click-outside';

import { Grid, Column, DropdownMenu } from '../../index';

export class ObjectHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuIsOpen: false };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({ menuIsOpen: true });
  }

  handleClickOutside() {
    this.setState({ menuIsOpen: false });
  }

  render() {
    return (
      <div className={this.props.prefix(['page-header'])} role="banner">
        <Grid>
          <Column className={this.props.prefix(['has-flexi-truncate'])}>
            <p className={this.props.prefix(['text-heading--label'])}>{this.props.recordType}</p>
            <Grid>
              <Grid className={this.props.prefix(['type-focus', 'no-space'])}>
                <h1
                  onClick={this.openMenu}
                  className={this.props.prefix(['page-header__title', 'truncate'])}
                  title={this.props.title}
                >
                  {this.props.title}
                </h1>
                <DropdownMenu
                  button={{ sprite: 'utility', icon: 'down', noBorder: true }}
                  position="top-right"
                  isOpen={this.state.menuIsOpen}
                >
                  {this.props.titleMenu}
                </DropdownMenu>
              </Grid>
            </Grid>
          </Column>
          <Column className={this.props.prefix(['no-flex', 'grid', 'align-top'])}>
            {this.props.topButtons}
          </Column>
        </Grid>
        <Grid>
          <Column className={this.props.prefix(['align-bottom'])}>
            <p className={`${this.props.prefix(['text-body--small'])} page-header__info`}>
              {this.props.info}
            </p>
          </Column>
          <Column className={this.props.prefix(['align-bottom', 'no-flex', 'grid'])}>{this.props.bottomButtons}</Column>
        </Grid>
      </div>
    );
  }
}

ObjectHome.propTypes = {
  /**
   * bottom Buttons or ButtonGroup(s)
   */
  bottomButtons: React.PropTypes.node,
  /**
   * info that is displayed below the title
   */
  info: React.PropTypes.string,
  /**
   * record type header above the title
   */
  recordType: React.PropTypes.string.isRequired,
  /**
   * title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * dropdown header menu that also get's triggered when a user clicks on the
   * title headline. Must be one or more instances of DropdownMenuList
   */
  titleMenu: React.PropTypes.node,
  /**
   * top Buttons or ButtonGroup(s)
   */
  topButtons: React.PropTypes.node,
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(enhanceWithClickOutside(ObjectHome));
