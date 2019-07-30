import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import {
  VisualPicker,
  VisualPickerTileCaption,
  VisualPickerTileIcon,
  VisualPickerTileText,
  VisualPickerContainer,
  VisualPickerVertical,
  VisualPickerLink,
  Icon,
} from '../src';

const stories = storiesOf('VisualPicker', module);

stories
  .add('With icons', () => (
    <VisualPickerContainer label="Select an app">
      <VisualPicker
        caption={<VisualPickerTileCaption>Connected App</VisualPickerTileCaption>}
        disabled={boolean('Disabled?', false)}
        id="visual-picker-1"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileIcon icon="connected_apps" sprite="utility" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerTileCaption>Custom App</VisualPickerTileCaption>}
        id="visual-picker-2"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileIcon icon="custom_apps" sprite="utility" />
      </VisualPicker>
    </VisualPickerContainer>
  ))
  .add('With text', () => (
    <VisualPickerContainer label="Select a plan">
      <VisualPicker
        caption={(
          <VisualPickerTileCaption title="Lightning Professional">
            Complete service CRM for teams of any size
          </VisualPickerTileCaption>
        )}
        disabled={boolean('Disabled?', false)}
        id="visual-picker-1"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileText title="$30">
          USD/user/month *
        </VisualPickerTileText>
      </VisualPicker>
      <VisualPicker
        caption={(
          <VisualPickerTileCaption title="Lightning Enterprise">
            Everything you need to take support to the next level
          </VisualPickerTileCaption>
        )}
        id="visual-picker-2"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileText title="$150">
          USD/user/month *
        </VisualPickerTileText>
      </VisualPicker>
      <VisualPicker
        caption={(
          <VisualPickerTileCaption title="Lightning Unlimited">
            Complete support with enterprise-grade customization
          </VisualPickerTileCaption>
        )}
        id="visual-picker-3"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileText title="$300">
          USD/user/month *
        </VisualPickerTileText>
      </VisualPicker>
    </VisualPickerContainer>
  ))
  .add('Vertical', () => (
    <VisualPickerContainer label="Select an option">
      <VisualPickerVertical
        id="visual-picker-1"
        title="Item Text"
      >
        Some optional item description to help the user better understand what this option is about.
      </VisualPickerVertical>
      <VisualPickerVertical
        id="visual-picker-2"
        title="Item Text"
      >
        Some optional item description to help the user better understand what this option is about.
      </VisualPickerVertical>
      <VisualPickerVertical
        id="visual-picker-3"
        title="Item Text"
      >
        Some optional item description to help the user better understand what this option is about.
      </VisualPickerVertical>
    </VisualPickerContainer>
  ))
  .add('Controlled state', () => (
    <VisualPickerContainer
      onChange={action('fieldset:change')}
      label="Select an app"
    >
      <VisualPicker
        caption={<VisualPickerTileCaption>Account</VisualPickerTileCaption>}
        id="visual-picker-1"
        inputProps={{ checked: boolean('First selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="account" sprite="standard" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerTileCaption>Lead</VisualPickerTileCaption>}
        id="visual-picker-2"
        inputProps={{ checked: boolean('Second selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="lead" sprite="standard" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerTileCaption>Orders</VisualPickerTileCaption>}
        id="visual-picker-3"
        inputProps={{ checked: boolean('Third selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="orders" sprite="standard" />
      </VisualPicker>
    </VisualPickerContainer>
  ))
  .add('Link', () => (
    <VisualPickerLink
      icon={(
        <Icon
          sprite="utility"
          icon="knowledge_base"
          svgClassName="slds-icon-text-default"
        />
      )}
      title="Share the knowledge"
    >
      Harness your team&#x27;s collective know-how with our powerful knowledge base
    </VisualPickerLink>

  ))
