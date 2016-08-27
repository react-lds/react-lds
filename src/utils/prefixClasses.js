import classNames from 'classnames';
import isArray from 'lodash.isarray';
import isString from 'lodash.isstring';

const prefixClasses = (prefix, classes, passThrough) => {
  const applyPrefix = className => {
    if (!!className) {
      const classString = classNames(className);
      if (classString !== '') {
        return `${prefix}${classString}`;
      }
    }

    return false;
  };

  let prefixed = classes;

  if (isArray(classes) && isString(prefix)) {
    prefixed = classes.map(applyPrefix);
  } else if (isString(classes) && isString(prefix)) {
    prefixed = applyPrefix(classes);
  }

  return classNames(
    prefixed,
    passThrough,
  );
};

export default prefixClasses;
