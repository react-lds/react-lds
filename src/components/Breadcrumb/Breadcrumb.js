import React from 'react';
import prefixable from '../../decorators/prefixable';

export const Breadcrumb = ({ prefix, children = [] }) => {
  let filtered = children;

  if (!Array.isArray(children)) {
    filtered = [children];
  }

  const olClasses = ['breadcrumb', 'list--horizontal'];
  const liClasses = ['breadcrumb__item text-heading--label'];

  const wrapItems =
    filtered.map(child => <li className={prefix(liClasses)} key={child.key}>{child}</li>);

  return (
    <nav role="navigation" aria-label="Breadcrumbs">
      <ol className={prefix(olClasses)}>
        {wrapItems}
      </ol>
    </nav>);
};

Breadcrumb.propTypes = {
  /**
   * One or many children, that automatically get wrapped into the surrounding
   * `<ol><li></li></ol>` structure of the breadcrumb. Don't forget to add
   * unique keys since react requires this to render more efficiently.
   */
  children: React.PropTypes.node.isRequired,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Breadcrumb);
