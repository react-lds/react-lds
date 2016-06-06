import React from 'react';
import { Button, ButtonIcon } from 'react-lds';

import Masthead from './Masthead';
import HeaderIcon from './HeaderIcon';

const Buttons = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Buttons" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Base</h2>
        <Button title="Button Reset" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Neutral</h2>
        <Button variation="neutral" title="Button Neutral" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Brand</h2>
        <Button variation="brand" title="Button Brand" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Neutral Disabled</h2>
        <Button variation="neutral" title="Button Neutral Disabled" disabled />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Neutral with left icon</h2>
        <Button variation="neutral" title="Neutral with left Icon">
          <ButtonIcon position="left" sprite="utility" icon="download" />
        </Button>
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Neutral with right icon</h2>
        <Button variation="neutral" title="Neutral with right Icon">
          <ButtonIcon position="right" sprite="utility" icon="download" />
        </Button>
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Icon</h2>
        <Button icon>
          <ButtonIcon sprite="utility" icon="download" />
        </Button>
        <Button icon>
          <ButtonIcon size="large" sprite="utility" icon="download" />
        </Button>
      </section>
    </div>
  </div>;

export default Buttons;
