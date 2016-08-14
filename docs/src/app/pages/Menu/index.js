import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleHeadings from './ExampleHeadings';
import exampleHeadingsCode from '!raw!./ExampleHeadings';
import ExampleIcons from './ExampleIcons';
import exampleIconsCode from '!raw!./ExampleIcons';
import ExampleNubbin from './ExampleNubbin';
import exampleNubbinCode from '!raw!./ExampleNubbin';
import ExampleHeight from './ExampleHeight';
import exampleHeightCode from '!raw!./ExampleHeight';
import ExamplePicklist from './ExamplePicklist';
import examplePicklistCode from '!raw!./ExamplePicklist';

import dropdownMenuCode from '!raw!react-lds/components/Menu/DropdownMenu';
import dropdownMenuListCode from '!raw!react-lds/components/Menu/DropdownMenuList';
import dropdownMenuListItemCode from '!raw!react-lds/components/Menu/DropdownMenuListItem';
import picklistCode from '!raw!react-lds/components/Menu/Picklist';

const MenuPage = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Menus" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Dropdown Menu"
        description="Default dropdown Menu with different sizes"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Dropdown Menu Sub Headings"
        description="Every DropdownMenuList can have a heading"
        code={exampleHeadingsCode}
      />
      <ExampleHeadings />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Dropdowns with Icons"
        description="Icons can be left and right. Left Icons are only displayed if the list item is selected"
        code={exampleIconsCode}
      />
      <ExampleIcons />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Dropdowns Nubbins and Positions"
        description="A Nubbin is useful with a borderless button."
        code={exampleNubbinCode}
      />
      <ExampleNubbin />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Hight Limitation for Dropdowns"
        description="Fixed height, it's also possible to always display an image on the left side here."
        code={exampleHeightCode}
      />
      <ExampleHeight />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Picklist and Multipicklist"
        description="Picklists only need fixed data structure to render."
        code={examplePicklistCode}
      />
      <ExamplePicklist />
    </div>

    <PropTypeDescription code={dropdownMenuCode} header="### DropdownMenu Properties" />
    <PropTypeDescription code={dropdownMenuListCode} header="### DropdownMenuList Properties" />
    <PropTypeDescription code={dropdownMenuListItemCode} header="### DropdownMenuListItem Properties" />
    <PropTypeDescription code={picklistCode} header="### Picklist Properties" />
  </div>;

export default MenuPage;
