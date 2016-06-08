const iconName = (sprite, icon) => (sprite === 'custom' ? `custom${icon}` : icon);

const iconClass = (sprite, icon) => iconName(sprite, icon.replace(/_/g, '-'));

export { iconClass, iconName };
