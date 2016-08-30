import React from 'react';
import { Button, ButtonIcon } from '../../index';
import { flavorable, themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

const getThemeName = themeStr => {
  if (typeof themeStr === 'string') {
    return themeStr.includes('theme--warning');
  }

  return false;
};

export const Notification = (props, { cssPrefix }) => {
  const {
    children,
    className,
    title,
    toast,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'notify',
    { 'notify--toast': !!toast },
  ];

  return (
    <div className={prefix('notify_container')}>
      <div {...rest} className={prefix(sldsClasses, className)} role="alert">
        <Button
          icon-inverse={getThemeName(className) ? undefined : true}
          className={prefix('notify__close')}
          icon
        >
          <ButtonIcon sprite="utility" icon="close" size={toast ? 'large' : undefined} />
          <span className={prefix('assistive-text')}>Close</span>
        </Button>
        <span className={prefix('assistive-text')}>{title}</span>
        {children}
      </div>
    </div>
  );
};

Notification.flavors = [
  'alert',
];

Notification.contextTypes = { cssPrefix: React.PropTypes.string };

Notification.propTypes = {
  /**
   * notification content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * notification title (will be rendered as assistiveText)
   */
  title: React.PropTypes.string.isRequired,
  /**
   * render the notification as a toast
   */
  toast: React.PropTypes.bool,
};

export default themeable(
  flavorable(Notification, 'notify')
);
