import React from 'react';
import PropTypes from 'prop-types';
import { ObjectHome } from './';

const RecordHome = ({
  detailItems,
  headerButtons,
  icon,
  recordType,
  title,
  ...rest
}) => (
  <ObjectHome
    {...rest}
    icon={icon}
    recordType={recordType}
    title={title}
    topButtons={headerButtons}
    bottomButtons={null}
    titleMenu={null}
  >
    <div className="slds-page-header__row slds-page-header__row_gutters">
      <div className="slds-page-header__col-details">
        {detailItems.length > 0 && (
          <ul className="slds-grid slds-page-header__detail-row">
            {detailItems.map(({ title: itemTitle, content: itemContent }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li className="slds-page-header__detail-block" key={`${itemTitle}-${index}`}>
                <div className="slds-text-title slds-truncate" title={itemTitle}>{itemTitle}</div>
                <div className="slds-truncate" title={itemContent}>{itemContent}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </ObjectHome>
);


RecordHome.defaultProps = {
  className: null,
  detailItems: [],
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
