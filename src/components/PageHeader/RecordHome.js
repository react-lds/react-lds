import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Grid, Column, MediaObject, Icon } from '../../';

const RecordHome = (props) => {
  const { className, detailItems = [], headerButtons, icon, recordType, title, ...rest } = props;

  const iconRendered = <Icon sprite={icon.sprite} icon={icon.icon} />;
  let detailRow;

  if (detailItems.length > 0) {
    const titleClasses = [
      'slds-text-title',
      'slds-truncate',
      'slds-m-bottom_xx-small'
    ];

    const detailItemsRendered = detailItems.map((item, index) =>
      <li className="slds-page-header__detail-block" key={`${item.title}-${index}`}>
        <p className={cx(titleClasses)}>{item.title}</p>
        <p className="slds-text-body_regular slds-truncate">{item.content}</p>
      </li>
    );
    detailRow = (
      <ul className="slds-grid slds-page-header__detail-row">{detailItemsRendered}</ul>
    );
  } else {
    detailRow = '';
  }

  const sldsClasses = [
    'slds-page-header',
    className
  ];

  const pageHeaderTitleClasses = [
    'slds-page-header__title',
    'slds-m-right_small',
    'slds-truncate',
    'slds-align-middle',
  ];

  return (
    <div {...rest} className={cx(sldsClasses)} role="banner">
      <Grid>
        <Column className="slds-has-flexi-truncate">
          <MediaObject
            center
            figureLeft={iconRendered}
            className="slds-grow slds-no-space"
          >
            <p className="slds-text-title_caps">{recordType}</p>
            <h1 className={pageHeaderTitleClasses} title={title}>
              {title}
            </h1>
          </MediaObject>
        </Column>
        <Column className="slds-no-flex slds-grid slds-align-bottom">{headerButtons}</Column>
      </Grid>
      {detailRow}
    </div>
  );
};

RecordHome.defaultProps = {
  className: null,
  detailItems: null,
  headerButtons: null
};

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
