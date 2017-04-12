import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { Grid, Column, MediaObject, IconSVG } from '../../';

const RecordHome = (props, { cssPrefix }) => {
  const { className, detailItems = [], headerButtons, icon, recordType, title, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;
  let detailRow;

  if (detailItems.length > 0) {
    const detailItemsRendered = detailItems.map((item, index) =>
      <li className={prefix('page-header__detail-block')} key={`${item.title}-${index}`}>
        <p className={prefix(['text-title', 'truncate', 'm-bottom--xx-small'])}>{item.title}</p>
        <p className={prefix(['text-body--regular', 'truncate'])}>{item.content}</p>
      </li>
    );
    detailRow = (
      <ul className={prefix(['grid', 'page-header__detail-row'])}>{detailItemsRendered}</ul>
    );
  } else {
    detailRow = '';
  }

  return (
    <div {...rest} className={prefix('page-header', className)} role="banner">
      <Grid>
        <Column className={prefix('has-flexi-truncate')}>
          <MediaObject figureLeft={iconRendered} className={prefix(['grow', 'no-space', 'media--center'])}>
            <p className={prefix('text-title--caps')}>{recordType}</p>
            <h1 className={prefix(['page-header__title', 'm-right--small', 'truncate', 'align-middle'])} title={title}>
              {title}
            </h1>
          </MediaObject>
        </Column>
        <Column className={prefix(['no-flex', 'grid', 'align-bottom'])}>{headerButtons}</Column>
      </Grid>
      {detailRow}
    </div>
  );
};

RecordHome.contextTypes = { cssPrefix: PropTypes.string };

RecordHome.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * entries for the detail row, can be just strings or more complex nodes like
   * links or text with icons etc...
   */
  detailItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  })),
  /**
   * buttons that are rendered on the right side of the header
   */
  headerButtons: PropTypes.node,
  /**
   * sprite and icon
   */
  icon: PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * record type header above the title
   */
  recordType: PropTypes.string.isRequired,
  /**
   * title
   */
  title: PropTypes.string.isRequired,
};

export default RecordHome;
