import React from 'react';
import { Badge } from 'react-lds';

require('./decoratorlist.scss');

const DecoratorList = (props) => {
  const { component } = props;

  const variations = component.variations;
  const flavors = component.flavors;

  const getList = (items, name) => {
    if (!!items && items.length > 0) {
      const decoratorItems = items.map((_variation, i) => {
        let variation = _variation;

        if (typeof variation === 'object') {
          variation = JSON.stringify(variation);
        }

        return (<li className="slds-p-right--small" key={i}><Badge label={variation} /></li>);
      });


      return (
        <div className="slds-p-bottom--medium">
          <h3 className="slds-text-heading--small slds-p-bottom--small">{name}</h3>
          <ul className="decoratorlist">{decoratorItems}</ul>
        </div>
      );
    }

    return null;
  };

  const renderList = () => {
    const hasDecorators = !!variations || !!flavors;

    if (hasDecorators) {
      return (
        <div className="slds-p-right--xx-large slds-p-left--xx-large slds-p-bottom--small">
          {getList(flavors, 'Flavors')}
          {getList(variations, 'Variations')}
        </div>
      );
    }

    return null;
  };

  return renderList();
};

DecoratorList.propTypes = {
  component: React.PropTypes.func.isRequired,
};

export default DecoratorList;
