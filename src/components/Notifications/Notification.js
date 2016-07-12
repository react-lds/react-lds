import React from 'react';
import { Button, ButtonIcon } from '../../index';
import { flavorable, prefixable, themeable } from '../../decorators';

function getThemeName(themeStr) {
  return /\stexture/.test(themeStr) ? `${themeStr.split(' ')[0]}` : `${themeStr}`;
}

export const Notification = (props) => {
  const {
    children,
    title,
    prefix,
    toast, // eslint-disable-line react/prop-types
    theme, // eslint-disable-line react/prop-types
  } = props;

  const sldsClasses = [
    'notify',
  ];

  return (
    <div className={prefix(['notify_container'])}>
      <div className={prefix(sldsClasses, props)} role="alert">
        <Button
          icon
          variation={getThemeName(theme) !== 'warning' ? 'icon-inverse' : undefined}
          sldsClasses={['notify__close']}
        >
          <ButtonIcon sprite="utility" icon="close" size={!!toast ? 'large' : undefined} />
          <span className={prefix(['assistive-text'])}>Close</span>
        </Button>
        <span className={prefix(['assistive-text'])}>{title}</span>
        {children}
      </div>
    </div>
  );
};

Notification.flavors = [
  'alert',
  'toast',
];

Notification.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the alert title (will be rendered as assistiveText)
   */
  title: React.PropTypes.string.isRequired,
  /**
   * the alert content
   */
  children: React.PropTypes.node.isRequired,
};

export default prefixable(themeable(
  flavorable(Notification, 'notify')
));
