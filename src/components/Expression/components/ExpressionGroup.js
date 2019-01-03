import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Picklist } from '../../..';
import {
  ALWAYS,
  CUSTOM,
  FORMULA,
  OPTIONS,
} from '../constants';
import { Input } from '../../Form';
import { getOperator } from '../helpers';

const ExpressionGroup = (props) => {
  const {
    buttonLabel,
    children,
    customLogicLabel,
    customLogicPlaceholder,
    customLogicValue,
    disableDelete,
    id,
    onAddCondition,
    onChangeCustomLogic,
    onSelectOption,
    operator,
    optionLabels,
    optionSelection,
    resourceItems,
    rowLabels,
    title,
  } = props;

  const deleteEnabled = React.Children.count(children) > 1 || !disableDelete;

  return (
    <li className="slds-expression__group">
      <legend className="slds-expression__legend slds-expression__legend_group">
        {!!operator && <span>{operator}</span>}
        <span className="slds-assistive-text">{title}</span>
      </legend>
      <div className="slds-expression__options">
        <Picklist
          closeOnSelect
          id={`${id}_options_picklist`}
          items={OPTIONS.map(key => ({
            key,
            label: optionLabels[key],
            selected: optionSelection === key,
          }))}
          labelInput={optionLabels.legend}
          onSelect={onSelectOption}
          placeholder=""
        />
      </div>
      {optionSelection === CUSTOM && (
        <div className="slds-expression__custom-logic">
          <Input
            id={`${id}_custom-logic_input`}
            label={customLogicLabel}
            onChange={onChangeCustomLogic}
            placeholder={customLogicPlaceholder}
            value={customLogicValue}
          />
        </div>
      )}
      {optionSelection !== FORMULA && optionSelection !== ALWAYS && (
        <Fragment>
          <ul>
            {React.Children.map(children, ((child, index) => React.cloneElement(child, {
              disableDelete: !deleteEnabled,
              id: `${id}_child_${index}`,
              isGroupRow: true,
              operator: getOperator(optionSelection, index),
              resourceItems: resourceItems || child.props.resourceItems,
              rowLabels,
            })))}
          </ul>
          <div className="slds-expression__buttons">
            <Button
              icon="add"
              onClick={onAddCondition}
              sprite="utility"
              title={buttonLabel}
            >
              {buttonLabel}
            </Button>
          </div>
        </Fragment>
      )}
    </li>
  );
};

ExpressionGroup.propTypes = {
  /**
   * label for the 'add condition' button
   */
  buttonLabel: PropTypes.string,
  /**
   * children should be of type ExpressioRow
   */
  children: PropTypes.node,
  /**
   * label for the custom logic input, can be passed down from Expression
   */
  customLogicLabel: PropTypes.string,
  /**
   * placeholder for the custom logic input, can be passed down from Expression
   */
  customLogicPlaceholder: PropTypes.string,
  /**
   * value of the custom logic field
   */
  customLogicValue: PropTypes.string,
  /**
   * the group is the last condition (cannot delete all of its rows or there wouldn't be any conditions left)
   */
  disableDelete: PropTypes.bool,
  /**
   * id, can be passed down from Expression
   */
  id: PropTypes.string,
  /**
   * onAddCondition
   */
  onAddCondition: PropTypes.func.isRequired,
  /**
   * on change custom logic input
   */
  onChangeCustomLogic: PropTypes.func.isRequired,
  /**
   * onSelectOption
   */
  onSelectOption: PropTypes.func.isRequired,
  /**
   * group condition operator (such as "AND") or row number if custom logic is used,
   * can be passed down from Expression
   */
  operator: PropTypes.string,
  /**
   * labels for the options Picklist, can be passed down from Expression
   */
  optionLabels: PropTypes.shape({
    legend: PropTypes.string.isRequired,
    all: PropTypes.string.isRequired,
    any: PropTypes.string.isRequired,
    custom: PropTypes.string.isRequired,
    always: PropTypes.string.isRequired,
    formula: PropTypes.string.isRequired,
  }),
  /**
   * currently selected picklist option
   */
  optionSelection: PropTypes.oneOf(OPTIONS),
  /**
   * resource items, can be passed down from Expression
   */
  resourceItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  /**
   * labels, can be passed down from Expression
   */
  rowLabels: PropTypes.shape({
    delete: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
    operatorPlaceholder: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    resourcePlaceholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    valuePlaceholder: PropTypes.string.isRequired,
  }),
  /**
   * title for the group, can be passed down from Expression
   */
  title: PropTypes.string,
};

ExpressionGroup.defaultProps = {
  buttonLabel: '',
  children: null,
  customLogicLabel: '',
  customLogicPlaceholder: '',
  customLogicValue: '',
  disableDelete: false,
  id: null,
  operator: null,
  optionLabels: {
    legend: '',
    all: '',
    any: '',
    custom: '',
    always: '',
    formula: '',
  },
  optionSelection: 'all',
  resourceItems: null,
  rowLabels: {
    resource: '',
    operator: '',
    value: '',
    delete: '',
    resourcePlaceholder: '',
    operatorPlaceholder: '',
    valuePlaceholder: '',
  },
  title: '',
};

export default ExpressionGroup;
