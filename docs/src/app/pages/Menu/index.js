import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleHeadingsCode from '!raw!./ExampleHeadings';
import exampleHeightCode from '!raw!./ExampleHeight';
import exampleIconsCode from '!raw!./ExampleIcons';
import exampleNubbinCode from '!raw!./ExampleNubbin';

import menuCode from '!raw!react-lds/components/Menu/Menu';
import menuDropdownListCode from '!raw!react-lds/components/Menu/MenuDropdownList';
import menuDropdownListItemCode from '!raw!react-lds/components/Menu/MenuDropdownListItem';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleHeadings from './ExampleHeadings';
import ExampleHeight from './ExampleHeight';
import ExampleIcons from './ExampleIcons';
import ExampleNubbin from './ExampleNubbin';

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
        description="Every menuDropdownList can have a heading"
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

    <PropTypeDescription code={menuCode} header="### Menu Properties" />
    <PropTypeDescription code={menuDropdownListCode} header="### MenuDropdownList Properties" />
    <PropTypeDescription code={menuDropdownListItemCode} header="### MenuDropdownListItem Properties" />
  </div>;

export default MenuPage;
