import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Picklist, Input } from '../..';
import ExpressionGroup from './components/ExpressionGroup';
import {
  ALL,
  ALWAYS,
  CUSTOM,
  FORMULA,
  OPTIONS,
} from './constants';
import { getOperator } from './helpers';

const Expression = (props) => {
  const {
    children,
    customLogicValue,
    id,
    labels,
    onAddCondition,
    onAddGroup,
    onChangeCustomLogic,
    onSelectOption,
    optionSelection,
    resourceItems,
    title,
  } = props;

  const {
    buttonLabels,
    customLogicLabel,
    customLogicPlaceholder,
    optionLabels,
    rowLabels,
  } = labels;

  return (
    <div className="slds-expression">
      <h2 className="slds-expression__title">{title}</h2>
      <div className="slds-expression__options">
        <Picklist
          closeOnSelect
          id={id}
          onSelect={onSelectOption}
          items={OPTIONS.map(key => ({
            key,
            label: optionLabels[key],
            selected: optionSelection === key,
          }))}
          labelInput={optionLabels.legend}
          placeholder=""
        />
      </div>
      {optionSelection === CUSTOM && (
        <div className="slds-expression__custom-logic">
          <Input
            label={customLogicLabel}
            placeholder={customLogicPlaceholder}
            id={`${id}_custom-logic_input`}
            onChange={onChangeCustomLogic}
            value={customLogicValue}
          />
        </div>
      )}
      {optionSelection !== FORMULA && optionSelection !== ALWAYS && (
        <Fragment>
          <ul>
            {React.Children.map(children, ((child, index) => React.cloneElement(child, {
              id: `${id}_child_${index}`,
              resourceItems,
              operator: getOperator(optionSelection, index),
              rowLabels,
              optionLabels: child.type === ExpressionGroup ? optionLabels : null,
              disableDelete: React.Children.count(children) === 1,
              customLogicLabel: child.type === ExpressionGroup && customLogicLabel,
              customLogicPlaceholder: child.type === ExpressionGroup && customLogicPlaceholder,
              buttonLabel: child.type === ExpressionGroup ? buttonLabels.addCondition : undefined,
            })))}
          </ul>
          <div className="slds-expression__buttons">
            <Button
              icon="add"
              sprite="utility"
              title={buttonLabels.addCondition}
              onClick={onAddCondition}
            >
              {buttonLabels.addCondition}
            </Button>
            <Button
              icon="add"
              sprite="utility"
              title={buttonLabels.addGroup}
              onClick={onAddGroup}
            >
              {buttonLabels.addGroup}
            </Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

Expression.propTypes = {
  /**
   * children should be of type ExpressionRow or ExpressionGroup
   */
  children: PropTypes.node,
  /**
   * Value of the custom logic input field
   */
  customLogicValue: PropTypes.string,
  /**
   * id
   */
  id: PropTypes.string.isRequired,
  /**
   * labels for options Picklist, buttons, rows
   */
  labels: PropTypes.shape({
    buttonLabels: PropTypes.shape({
      addCondition: PropTypes.string.isRequired,
      addGroup: PropTypes.string.isRequired,
    }).isRequired,
    customLogicLabel: PropTypes.string,
    customLogicPlaceholder: PropTypes.string,
    optionLabels: PropTypes.shape({
      all: PropTypes.string.isRequired,
      always: PropTypes.string.isRequired,
      any: PropTypes.string.isRequired,
      custom: PropTypes.string.isRequired,
      formula: PropTypes.string.isRequired,
      legend: PropTypes.string.isRequired,
    }).isRequired,
    rowLabels: PropTypes.shape({
      delete: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
      operatorPlaceholder: PropTypes.string.isRequired,
      resource: PropTypes.string.isRequired,
      resourcePlaceholder: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      valuePlaceholder: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  /**
   * onAddCondition
   */
  onAddCondition: PropTypes.func.isRequired,
  /**
   * onAddGroup
   */
  onAddGroup: PropTypes.func.isRequired,
  /**
   * onChange function for custom logic input field
   */
  onChangeCustomLogic: PropTypes.func,
  /**
   * onSelectOption
   */
  onSelectOption: PropTypes.func.isRequired,
  /**
   * Currently selected option
   */
  optionSelection: PropTypes.oneOf(OPTIONS),
  /**
   * Selectable resources for the ExpressionRow children, can also be passed directly to ExpressionRow
   */
  resourceItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  /**
   * title for the expression
   */
  title: PropTypes.string,
};

Expression.defaultProps = {
  children: null,
  customLogicValue: '',
  onChangeCustomLogic: () => {},
  optionSelection: ALL,
  resourceItems: [],
  title: '',
};

export default Expression;
