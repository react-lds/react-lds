import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Input, Picklist } from '../../Form';
import { IconButton } from '../../Button';

const ExpressionRow = (props) => {
  const {
    disableDelete,
    id,
    isGroupRow,
    onClear,
    onDelete,
    onSelectOperator,
    onSelectResource,
    operator,
    operatorError,
    operatorItems,
    operatorSelection,
    resourceError,
    resourceItems,
    resourceSelection,
    rowLabels,
    title,
    valueError,
    valueFormComponent,
  } = props;

  const isInput = () => valueFormComponent.type.displayName === 'Input';

  const liClasses = [
    'slds-expression__row',
    { 'slds-expression__row_group': isGroupRow },
  ];

  return (
    <li className={cx(liClasses)}>
      <fieldset>
        <legend className="slds-expression__legend">
          {!!operator && <span>{operator}</span>}
          <span className="slds-assistive-text">{title}</span>
        </legend>
        <div className="slds-grid slds-gutters_xx-small">
          <div className="slds-col">
            <Picklist
              closeOnSelect
              error={resourceError}
              id={`${id}_picklist_resource`}
              items={resourceItems.map(item => ({
                ...item,
                selected: resourceSelection === item.key,
              }))}
              labelInput={rowLabels.resource}
              onSelect={onSelectResource}
              placeholder={rowLabels.resourcePlaceholder}
            />
          </div>
          <div className="slds-col slds-grow-none">
            <Picklist
              closeOnSelect
              disabled={!resourceSelection}
              error={operatorError}
              id={`${id}_picklist_operator`}
              items={
                resourceSelection
                  ? operatorItems.map(item => ({ ...item, selected: operatorSelection === item.key }))
                  : []
              }
              labelInput={rowLabels.operator}
              onSelect={onSelectOperator}
              placeholder={rowLabels.resourcePlaceholder}
            />
          </div>
          <div className="slds-col">
            {(resourceSelection && operatorSelection && valueFormComponent)
              ? React.cloneElement(valueFormComponent, {
                disabled: !resourceSelection || !operatorSelection,
                error: valueError,
                id: `${id}_formComponent_value`,
                label: isInput() ? rowLabels.value : undefined,
                labelInput: !isInput() ? rowLabels.value : undefined,
                placeholder: rowLabels.valuePlaceholder,
              }) : (
                <Input
                  disabled
                  id={`${id}_formComponent_value`}
                  error={valueError}
                  placeholder={rowLabels.valuePlaceholder}
                  label={rowLabels.value}
                  value=""
                />
              )
            }
          </div>
          <div className="slds-col slds-grow-none">
            <div className="slds-form-element">
              <span className="slds-form-element__label">&nbsp;</span>
              <div className="slds-form-element__control">
                <IconButton
                  border="filled"
                  disabled={disableDelete}
                  icon="delete"
                  onClick={resourceSelection ? onClear : onDelete}
                  sprite="utility"
                  title={rowLabels.delete}
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  );
};

ExpressionRow.propTypes = {
  /**
   * delete button disable (passed down from ExpressionGroup, ExpressionWrapper, Expression)
   */
  disableDelete: PropTypes.bool,
  /**
   * id (passed down from ExpressionWrapper or ExpressionGroup)
   */
  id: PropTypes.string,
  /**
   * row is part of expression group (set by parent component ExpressionGroup)
   */
  isGroupRow: PropTypes.bool,
  /**
   * onClear row
   */
  onClear: PropTypes.func,
  /**
   * onDelete row
   */
  onDelete: PropTypes.func,
  /**
   * onSelect operator
   */
  onSelectOperator: PropTypes.func,
  /**
   * onSelect resource
   */
  onSelectResource: PropTypes.func,
  /**
   * row condition operator (such as "AND") or row number if custom logic is used
   * (passed down from Expression or ExpressionGroup)
   */
  operator: PropTypes.string,
  /**
   * operator picklist error
   */
  operatorError: PropTypes.string,
  /**
   * selectable operators
   */
  operatorItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  /**
   * selected operator
   */
  operatorSelection: PropTypes.string,
  /**
   * resource picklist error
   */
  resourceError: PropTypes.string,
  /**
   * items for the resource picklist (passed down from Expression)
   */
  resourceItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  /**
   * selected resource
   */
  resourceSelection: PropTypes.string,
  /**
   * labels (passed down from Expression or ExpressionGroup)
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
   * condition title (passed down from ExpressionGroupor Expression)
   */
  title: PropTypes.string,
  /**
   * value form component error error
   */
  valueError: PropTypes.string,
  /**
   * Form component to select value for the selected resource (Input, Combobox, Picklist, or Lookup).
   */
  valueFormComponent: PropTypes.element.isRequired,
};

ExpressionRow.defaultProps = {
  disableDelete: false,
  id: null,
  isGroupRow: false,
  onClear: () => {},
  onDelete: () => {},
  onSelectOperator: () => {},
  onSelectResource: () => {},
  operator: null,
  operatorError: null,
  operatorItems: [],
  operatorSelection: null,
  resourceError: null,
  resourceItems: [],
  resourceSelection: null,
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
  valueError: null,
};

export default ExpressionRow;
