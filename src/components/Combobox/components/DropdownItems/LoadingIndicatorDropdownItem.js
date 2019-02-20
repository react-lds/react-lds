import React from 'react';
import { Spinner } from '../../../Spinner';

export const LoadingIndicatorDropdownItem = () => (
  <li className="slds-listbox__item" role="presentation">
    <div className="slds-align_absolute-center slds-p-top_medium">
      <Spinner size="x-small" inline />
    </div>
  </li>
);
