import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import {
  VisualPicker,
  VisualPickerCaption,
  VisualPickerTileIcon,
  VisualPickerTileText,
  VisualPickerContainer,
  VisualPickerVertical,
} from '../src';

const stories = storiesOf('VisualPicker', module);

stories
  .add('With icons', () => (
    <VisualPickerContainer label="Select an app">
      <VisualPicker
        caption={<VisualPickerCaption>Connected App</VisualPickerCaption>}
        disabled={boolean('Disabled?', false)}
        id="visual-picker-1"
        inputProps={{ onChange: action('change') }}
        size={select('Size', ['medium', 'large'], 'medium')}
        type={select('Type', ['radio', 'checkbox'], 'radio')}
      >
        <VisualPickerTileIcon icon="connected_apps" sprite="utility" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerCaption>Custom App</VisualPickerCaption>}
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
          <VisualPickerCaption title="Lightning Professional">
            Complete service CRM for teams of any size
          </VisualPickerCaption>
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
          <VisualPickerCaption title="Lightning Enterprise">
            Everything you need to take support to the next level
          </VisualPickerCaption>
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
          <VisualPickerCaption title="Lightning Unlimited">
            Complete support with enterprise-grade customization
          </VisualPickerCaption>
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
        caption={<VisualPickerCaption>Account</VisualPickerCaption>}
        id="visual-picker-1"
        inputProps={{ checked: boolean('First selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="account" sprite="standard" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerCaption>Lead</VisualPickerCaption>}
        id="visual-picker-2"
        inputProps={{ checked: boolean('Second selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="lead" sprite="standard" />
      </VisualPicker>
      <VisualPicker
        caption={<VisualPickerCaption>Orders</VisualPickerCaption>}
        id="visual-picker-3"
        inputProps={{ checked: boolean('Third selected', false) }}
        type="checkbox"
      >
        <VisualPickerTileIcon icon="orders" sprite="standard" />
      </VisualPicker>
    </VisualPickerContainer>
  ));
