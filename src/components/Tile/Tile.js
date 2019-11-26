import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MediaObject } from '../MediaObject';

import Title from './components/Title';
import TitleRow from './components/TitleRow';

const Tile = (props) => {
  const {
    as,
    board,
    children,
    className,
    action,
    figure,
    title,
    titleText,
    ...rest
  } = props;

  const tileClasses = cx([
    'slds-tile',
    { 'slds-tile_board': board },
    { 'slds-hint-parent': !!action },
    className,
  ]);

  const tileContent = (
    <>
      <TitleRow action={action}>
        <Title title={title} titleText={titleText} />
      </TitleRow>
      <div className="slds-tile__detail">
        {children}
      </div>
    </>
  );

  if (figure) {
    return (
      <MediaObject
        {...rest}
        customTag={as}
        center={false}
        className={tileClasses}
        figureLeft={figure}
      >
        {tileContent}
      </MediaObject>
    );
  }

  const El = as;
  return (
    <El {...rest} className={tileClasses}>
      {tileContent}
    </El>
  );
};

Tile.defaultProps = {
  as: 'article',
  board: false,
  className: null,
  figure: null,
  action: null,
  titleText: '',
};

Tile.propTypes = {
  /**
   * HTML element name
   */
  as: PropTypes.string,
  /**
   * adds `slds-tile_board` modifier
   */
  board: PropTypes.bool,
  /**
   * `Tile` content
   */
  children: PropTypes.node.isRequired,
  /**
   * additional class names, added to `.slds-tile`
   */
  className: PropTypes.string,
  /**
   * action that renders on the right side of the tile
   */
  action: PropTypes.node,
  /**
   * figure (Icon,Avatar,Checkbox) that renders on the left side of the tile
   */
  figure: PropTypes.node,
  /**
   * title node
   */
  title: PropTypes.node.isRequired,
  /**
   * fallback `title` attribute for `.slds-tile__title` if `title` is not a string
   */
  titleText: PropTypes.string,
};

export default Tile;
