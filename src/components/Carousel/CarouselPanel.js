import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CarouselPanel = (props) => {
  const {
    active,
    children,
    className,
    id,
    imageUrl,
    title,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-carousel__panel',
    className
  ];

  const tabIndex = active ? 0 : -1;

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      id={id}
      role="tabpanel"
      aria-hidden={active}
      aria-labelledby={`${id}-indicator`}
    >
      <a className="slds-carousel__panel-action slds-text-link_reset" tabIndex={tabIndex}>
        <div className="slds-carousel__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="slds-carousel__content">
          <h2 className="slds-carousel__content-title">{title}</h2>
          <p>{children}</p>
        </div>
      </a>
    </div>
  );
};

CarouselPanel.defaultProps = {
  active: false,
  children: [],
  className: null,
};

CarouselPanel.propTypes = {
  /**
   * indicates whether the panel is currently active
   */
  active: PropTypes.bool,

  /**
   * list of carousel panels
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,

  /**
   * unique panel id
   */
  id: PropTypes.string.isRequired,

  /**
   * url for the panel image
   */
  imageUrl: PropTypes.string.isRequired,

  /**
   * title text
   */
  title: PropTypes.string.isRequired,
};

export default CarouselPanel;
